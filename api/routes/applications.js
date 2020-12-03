var express = require('express');
var createError = require('http-errors');
var router = express.Router();
var axios = require('axios');

//http
//store collection of uris in DB or file that gets updates

router.route('/UCDavis/forms/a')
    // get form from thirdparty application
    .get(async function(req, res, next) {
        try{
            // get axios data from the third party application
            axios.get('')
            // res.json will convert the get from axios to json and send that in the response
            res.status(200).json();
        }
        catch (err){
            console.error(err.message);
            res.status(404).json({message: "Error 404: User collection not found"});
        }
    })

module.exports = router;