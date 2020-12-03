var express = require('express');
var createError = require('http-errors');
var router = express.Router();
var axios = require('axios');

//http
//store collection of uris in DB or file that gets updates

router.route('/UCDavis/forms/a')
    // get form from thirdparty application
    .get(async function(req, res, next) {
        const url = 'https://localhost:3002/forms/a';
        try{
            // get axios data from the third party application
            return await axios.get(url);
        }
        catch (err){
            console.error(err.message);
            res.status(404).json({message: "Error 404: Form not found"});
        }
    })
    

module.exports = router;