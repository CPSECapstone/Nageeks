var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {

    // What message is sent from the api to client
    res.send("API is working properly");
});

module.exports = router;