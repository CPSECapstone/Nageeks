var express = require('express');
var createError = require('http-errors');
var router = express.Router();
var axios = require('axios');
const { RequestHeaderFieldsTooLarge } = require('http-errors');

//http
//store collection of uris in DB or file that gets updates

router.route('/UCDavis/forms/a')
    // get form from thirdparty application
    .get(async function(req, res, next) {
        const url = 'http://localhost:3002/cloudhaven/forms/a';
        try{
            // get axios data from the third party application
            return (await axios.get(url, {crossdomain: true}));
        }
        catch (err){
            console.error("Error Response:")
            console.error(err.response.data);
            console.error(err.response.status);
            console.error(err.response.headers);
            //res.status(404).json({message: "Error 404: Form not found"});
            res.status(404).json({message: err});
        }
    })

module.exports = router;