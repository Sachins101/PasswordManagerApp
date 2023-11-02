const express=require('express');
const app=express();
const PORT = process.env.PORT || 8080;
const cors = require("cors");
const helmet = require('helmet');
const xss = require('xss-clean');

app.use(cors());
app.use(helmet());
app.use(helmet.frameguard({ action: "SAMEORIGIN" }));
app.use(express.static("public"));
app.use(xss());


const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });