var express = require('express');
var router = express.Router();
const User = require('../models/user');

// project admin routes with user authentication, access control, session management, and TLS/SSL
router.get('/', async function(req, res, next) {
    // documents are stored as BSON so thats what we get here
    const users = await User.find(); 
    // res.json will convert the bson to json and send that in the response
    res.status(200).json(users);
});

router.get('/:uid', async function(req, res, next) {
    // documents are stored as BSON so thats what we get here
    const user = await User.findById(req.params.uid); 
    // res.json will convert the bson to json and send that in the response
    res.status(200).json(user);
});

module.exports = router;
