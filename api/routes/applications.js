var express = require('express');
var router = express.Router();

const VENDOR_ID = "UCDavis";

// vendor database only stores tokenized cloud haven ids
// and non-sensitive data as plain text
let stubDB = {
    users: {
        "123": {
            cloudHavenId: "abc",
            visitHistory: {
                weight: "200 lbs"
            }
        },
        "321": {
            cloudHavenId: "xyz",
            visitHistory: {
                weight: "175 lbs"
            }
        }
    }
};

// fields marked as tokens will be filled if a userId is specified (GET with id)
// or become user input fields if no userId is specified (GET without id)
const forms = {
    userProfile: {
        VendorId: VENDOR_ID,
        Components: [
            {
                Component: "Form",
                Title: "User Profile",
                Fields: [
                    {
                        Child: "TextField",
                        Title: "First Name",
                        Content: "%%user.firstName%%",
                        Required: true 
                    },
                    {
                        Child: "TextField",
                        Title: "Last Name",
                        Content: "%%user.lastName%%",
                        Required: true 
                    },
                    {
                        Child: "TextField",
                        Title: "Phone Number",
                        Content: "%%user.phoneNumber%%",
                        Required: false
                    },
                    {
                        Child: "TextField",
                        Title: "UCDavis MedicalId",
                        Content: "%%user.medicalId%%",
                        Required: false
                    },
                    {
                        Child: "TextField",
                        Title: "Insurance Provider",
                        Content: "%%user.lastName%%",
                        Required: false
                    },
                ]
            }
        ]
    },
    newPatient: {
        vendorId: VENDOR_ID,
    },
    verifyPatient: {
        vendorId: VENDOR_ID,
    },
    recordPatient: {
        vendorId: VENDOR_ID,
    },
}

// this endpoint returns blank UIAAS to be filled in and returned to vendor 
router.get('/UCDavis/forms/:formId', async function(req, res) {
    const formId = req.params.formId;
    if (Object.keys(forms).includes(formId)){
        res.json(forms[formId]);
    }
    else {
        res.status(404).json({message: 'Form not available', formId: formId})
    }
});

/*  
    this endpoint returns blank UIAAS to be filled in CH backend and displayed
    satisfies medical admin approving new patient

    steps
    1. Medical Admin requests to view the userProfile of the new patient
    2. Medical Admin requests to view the approval form of the new patient
    3. Medical Admin would send a post using method below to fill approval form
*/
router.get('/UCDavis/forms/:formId/:userId', async function(req, res) {
    const formId = req.params.formId;
    const userId = req.params.userId;
    if (Object.keys(forms).includes(formId)){
        let form = forms[formId];

        // TOKENIZED USER ID INSERTED INTO UIAAS JSON
        // this will be used by cloud haven backend to fill any tokens
        // that the form contains
        form.userId = stubDB.users[userId].cloudHavenId;

        res.json(form);
    }
    else {
        res.status(404).json({message: 'Form not available', formId: formId})
    }
});

/*
    this end point expects to recieve filled out forms from cloud haven
    backend to store in its own database

    for example
    Medical Admin submitting approval form would come here

*/
router.post('/UCDavis/forms/:formId', async function(req, res){
    // since the vendor team will do this parsing, we just log the data
    console.log(req.body);
});

module.exports = router;