const mysql = require("mysql");
const methods = {};
const connection = require("../service/connection.js");
const now = new Date();
const jsonDate = now.toJSON();
const then = new Date(jsonDate);

/**************************************************************/

methods.Login = async (req, callback) => {
  const response = [];

  if (req.body) {
    let username = req.body.user_name;
    let password = req.body.password;
    let data = [];
    let query = `SELECT * FROM user where email_id='${username}' and password='${password}';`;
    let result = await connection.callConnection1(query, data);
    if (typeof result !== "undefined" && result.length > 0) {
      response.push({
        success: "1",
        successMessage: "success",
        errorMessage: "",
        userData: result,
      });
    } else {
      response.push({
        success: "0",
        successMessage: "",
        errorMessage: "Login failed",
      });
    }
    return callback(response);
  }
};

/**************************************************************/

methods.signUp = async (req, callback) => {
  var data = [];
  const failResponse = [];
  var role_id;
  var userCreateQuery = "";
  var result;
  var success = "1";
  var successMessage = "";
  var errorMessage = "";

  if (req) {
    let emailId = req.body.email_id;
    let password = req.body.password;
    let first_name = req.body.first_name;
    let last_name = req.body.last_name;
    let mobile = req.body.mobile_no;
    let profileImage = req.body.profile_image_url;
    if (req.body) {
      if (req.body.email_id) {
        var query = `SELECT  * FROM user  ' +
                    'WHERE  email_id=${emailId}  `;
        var result = await connection.callConnection1(query, data);
        if (typeof result !== "undefined" && result.length > 0) {
          failResponse.push({
            success: "0",
            successMessage: "You are already registered.Please Login",
            errorMessage: "",
          });
          return callback(failResponse);
        }
      }
    }
    var userCreateQuery =
      "insert into user(email_id,password,first_name,last_name,mobile_no,profile_image_url)" +
      'VALUES("' +
      emailId +
      '","' +
      password +
      '","' +
      first_name +
      '","' +
      last_name +
      '","' +
      mobile +
      '","' +
      profileImage +
      '")';
    result = await connection.callConnection1(userCreateQuery, data);

    if (typeof result !== "undefined" && result.affectedRows === 1) {
      success = "1";
      successMessage = "Saved Successfully";
    } else {
      success = "0";
      errorMessage = "Error , Not saved ";
    }

    const response = {
      success: success,
      successMessage: successMessage,
      errorMessage: errorMessage,
    };
    return callback(response);
  }
};

module.exports = methods;
