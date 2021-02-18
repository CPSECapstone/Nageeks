var express = require('express');
var createError = require('http-errors');
var router = express.Router();
var axios = require('axios');
//added after Code Review
const formA = {firstName: 'textfield', lastName: 'textfield', dob: 'textfield', phoneNumber: 'textfield'};
const formB = {country: 'textfield', firstLine: 'textfield', secondLine: 'textfield', city: 'textfield', state: 'textfield', zipcode: 'textfield'};
const formEmplA = {Client: 'textfield', city: 'textfield', state: 'textfield', zipcode: 'textfield'};
//http
//store collection of uris in DB or file that gets updates

router.route('/UCDavis/forms/:formId')
    // get form from hardcoded jsons
    .get(async function(req, res, next) {
        const formId = req.params.formId;
        if(formId === "a") {
            return res.status(200).json(formA);
        }
        else if(formId === "b") {
            return res.status(200).json(formB);
        }
        //TODO routing to an actual 3rd party would take care of what forms show up but need to find a way to 
        //tokenize user to send to third party app
        else if(formId === "emplA") {
            return res.status(200).json(formEmplA);
        }
        else {
            return res.status(404).json({message: 'Form not available', formid: formId})
        }
    })

module.exports = router;