var express = require('express');
var createError = require('http-errors');
var router = express.Router();
const User = require('../models/user');
const mongoose = require('../mongoose_connection');
const uri = "http://api.cloudhaven.com"

router.route('/UCDavis')
    // get form from thirdparty application
    .get(async function(req, res, next) {
        try{
            // documents are stored as BSON so thats what we get here
            const users = await User.find(); 
            // res.json will convert the bson to json and send that in the response
            res.status(200).json(users);
        }
        catch (err){
            console.error(err.message);
            res.status(404).json({message: "Error 404: User collection not found"});
        }
    })