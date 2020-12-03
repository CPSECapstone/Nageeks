var express = require('express');
var createError = require('http-errors');
var router = express.Router();
var axios = require('axios');
const { RequestHeaderFieldsTooLarge } = require('http-errors');

//http
//store collection of uris in DB or file that gets updates

router.route('/UCDavis/forms/:formId')
    // get form from thirdparty application
    .get(async function(req, res, next) {
        const formId = req.params.formId;
        var url = ''
        if(formId === 'a') {
            url = 'http://localhost:3002/cloudhaven/forms/a';
        }
        else if(formId === 'b') {
            url = 'http://localhost:3002/cloudhaven/forms/b';
        }
        else {
            res.status(404).json({message: "Invalid URL"})
            res.end();
        }
        try{
            // get axios data from the third party application
            var formData = (await axios.get(url));
            return res.status(200).json(formData.data)
        }
        catch (err){
            console.error("Error Response:")
            console.error(err.response.data);
            console.error(err.response.status);
            console.error(err.response.headers);
            //res.status(404).json({message: "Error 404: Form not found"});
            res.status(404).json({message: err.response});
        }
    })

module.exports = router;