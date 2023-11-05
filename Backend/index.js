const express=require('express');
const app=express();
const PORT = process.env.PORT || 8080;
const cors = require("cors");
const helmet = require('helmet');
const xss = require('xss-clean');
const bodyParser = require("body-parser");
const connection = require("./service/connection.js");
const user=require('./routes/userRoutes.js')


app.use(cors());
app.use(helmet());
app.use(helmet.frameguard({ action: "SAMEORIGIN" }));
app.use(express.static("public"));
app.use(xss());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post("/pwdmanager", async(req, res) => {
  console.log('inside node.....req....')
  // let Query='SELECT * FROM user';
  // var result = await connection.callConnection1(Query,res);
  // res.json(result);
  if (req.body.route === "login") {
    user.login(req, function (response) {
      res.json({ response });
     });
  } else {
    console.log("Invalid request"); 
    res.status(400).json({ error: "Invalid request" });
  }
});


app.use((req, res, next) => {
  const error = {
    success: "0",
    successMessage: "",
    result: [],
    errorMessage: "Function doesnot exist",
  };
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json(error);
});

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });