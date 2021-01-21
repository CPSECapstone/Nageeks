var express = require('express');
var createError = require('http-errors');
var router = express.Router();
var axios = require('axios');

//http
//store collection of uris in DB or file that gets updates

router.route('/UCDavis/forms/:formId')
    // get form from hardcoded jsons
    .get(async function(req, res, next) {
        const formId = req.params.formId;
        if(formId === "a") {
            return res.status(200).json({firstName: 'textfield', lastName: 'textfield', dob: 'textfield', phoneNumber: 'textfield'});
        }
        else if(formId === "b") {
            return res.status(200).json({country: 'textfield', firstLine: 'textfield', secondLine: 'textfield', city: 'textfield', state: 'textfield', zipcode: 'textfield'});
        }
        else {
            return res.status(404).json({message: 'Form not available', formid: formId})
        }
    })

module.exports = router;