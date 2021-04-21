var express = require('express');
var createError = require('http-errors');
var router = express.Router();
const User = require('../models/user');
const mongoose = require('../mongoose_connection');
const auth = require('../auth');
const uri = "http://localhost:3001"

router.route('/')
    // get all users
    .get(async function(req, res, next) {
        try{
            // documents are stored as BSON so thats what we get here
            const users = await User.find(); 
            // res.json will convert the bson to json and send that in the response
            res.status(200).json(users);
        }
        catch (err){
            console.error(err.message);
            res.status(404).json({message: "Error 404: User collection not found"});
        }
    })
    // project admin routes with user authentication, access control, session management, and TLS/SSL
    // insert one new user
    .post(async function(req, res, next) {
        // hangs if request body is empty or wrong format
        // let uid = ObjectId();
        const user = new User(req.body); // assign object id and all other crap from req body
        try{
            const doc = await user.save();
            res.set({'Location': uri + req.baseUrl.toString() + '/' + user._id.toString()}).sendStatus(201);
        }
        catch (e){
            console.error(e.message);
            res.status(400).json({message: e.message});
        }
    })
    .delete(async function(req, res, next){
        try{
            await User.deleteMany({});
            res.sendStatus(204);
        }
        catch(err){
            next(createError(404));
        }
    });

router.route('/:uid')
    .get(auth, async function(req, res, next) {
        const user = await User.findById(req.params.uid); 
        if (user){
            res.status(200).json(user);
        }
        else{
            res.sendStatus(404)
        }
    })
    .post(function(req, res, next){
        res.status(400).json({message: "Error 400: Post requests to existing users are not allowed."});
    })
    .put(async function(req, res, next){
        try{
            const user = await User.findById(req.params.uid); 
            for (let prop in req.body){
                if (user[prop]){
                    user[prop] = req.body[prop];
                }
            }
            try{
                await user.save();
                res.status(200).json();
            }
            catch(err){
                res.status(400).json(err);
            }
        }
        catch(err){
            res.status(404).json(err);
        }
    });


module.exports = router;
