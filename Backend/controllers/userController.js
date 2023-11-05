const mysql = require('mysql');
const methods = {};
const connection = require("../service/connection.js");
const now = new Date();
const jsonDate = now.toJSON();
const then = new Date(jsonDate);



/**************************************************************/

methods.Login = async (req, callback) => {

    const response = []

    if (req.body) {
        let username = req.body.user_name
        let password = req.body.password
        let data = [];
        let query = `SELECT * FROM user where email_id='${username}' and password='${password}';`;
        let result = await connection.callConnection1(query, data);
        if (typeof result !== 'undefined' && result.length > 0) {
            response.push({ success: "1", successMessage: "success", errorMessage: "", userData: result });

        } else {
            response.push({ success: "0", successMessage: "", errorMessage: "Login failed" })
        }
        return callback(response);
    }


}

module.exports = methods;