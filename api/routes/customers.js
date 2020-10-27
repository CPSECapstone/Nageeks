var express = require('express');
var router = express.Router();
const customersModel = require('../models/customers');

/* GET users listing. */
router.get('/', async function(req, res, next) {
    // get data from db here
    const customers = await customersModel.find();
    res.send(customers);
});

module.exports = router