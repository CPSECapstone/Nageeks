var express = require('express');
var createError = require('http-errors');
var router = express.Router();
var axios = require('axios');

//http
//store collection of uris in DB or file that gets updates

router.route('/UCDavis/forms/:formId')
    // get form from thirdparty application
    .get(async function(req, res, next) {
        const url = `http://localhost:3002/forms/${req.params.formId}`;
        try{
            // get axios data from the third party application
            const formData = await axios.get(url);
            console.log(formData);
            return res.status(200).json(formData);
        }
        catch (err){
            console.error(err.message);
            return res.status(404).json({message: "Error 404: Form not found"});
        }
    })

module.exports = router;