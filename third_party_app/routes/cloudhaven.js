var express = require('express');
var router = express.Router();



// Send form json back to Cloud Haven 
router.route('/forms/a')
  .get(async function(req, res, next) {
    // res.send('Sending Json...');
    // const formId = req.params.formId;
    const formId = "a";
    if(formId === "a") {
        console.log('here a');
        return res.status(200).json({firstName: 'textfield', lastName: 'textfield', dob: 'textfield', phoneNumber: 'textfield'});
    }
    else if(formId === "b") {
        console.log('here b');
        return res.status(200).json({country: 'textfield', firstLine: 'textfield', secondLine: 'textfield', city: 'textfield', state: 'textfield', zipcode: 'textfield'});
    }
    else {
        console.log('here else');
        return res.status(404).json({message: 'Form not available', formid: formId})
    }
  })

module.exports = router;