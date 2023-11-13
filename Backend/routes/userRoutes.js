var methods = {};
var userController = require('../controllers/userController.js');
var router = require("express").Router();

methods.login= function(req,callback) {
    if(req)
    {
        userController.Login(req, function (response) {
            console.log(response);
            return callback(response);
        });
    }
    else{
        const response = {
            success:"0",
            successMessage:"",
            errorMessage:"Invalid function",
            result:[]
        }
        return callback(response);
    }
}

methods.signup= function(req,callback) {
    if(req)
    {
        userController.signUp(req, function (response) {
            console.log(response);
            return callback(response);
        });
    }
    else{
        const response = {
            success:"0",
            successMessage:"",
            errorMessage:"Invalid function.user",
            result:[]
        }
        return callback(response);
    }
}

module.exports=methods;