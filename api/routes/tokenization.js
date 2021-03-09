var express = require('express');
var router = express.Router();

router.route('/tokenization/data')
    // get form from thirdparty application
    .get(async function(req, res, next) {
        const formId = req.params.formId;
        url = 'http://localhost:3002/cloudhaven/data/';
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
            res.status(404).json({message: err.response});
        }
    })

module.exports = router; 