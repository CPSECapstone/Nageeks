const { model } = require("./mongoose_connection");

module.exports = function(req, res, next){
    console.log(req.sessionID);
    console.log(req.session);
    // get rid of this for DB session verification using connect-mongo
    if (req.session.uid){
        next();
    }
    else{
        res.sendStatus(404);
    }
}