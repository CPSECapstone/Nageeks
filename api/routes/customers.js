var express = require('express');
var router = express.Router();
const customerModel = require('../models/customer');

/* GET users listing. */
router.get('/', async function(req, res, next) {
    // get data from db here
    const customers = await customerModel.find();
    res.send(customers);
});

module.exports = router