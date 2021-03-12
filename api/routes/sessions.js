var express = require('express');
var createError = require('http-errors');
var router = express.Router();
const Session = require('../models/session');
const User = require('../models/user');
const mongoose = require('../mongoose_connection');
const { ObjectID } = require('mongodb');
const session = require('express-session');

const url = "http://localhost:3001";

router.route('/')
    // get all sessions
    .get(async function(req, res, next) {
        console.log("sessions was hit")
        try{
            const sessions = await Session.find(); 
            res.status(200).json(sessions);
        }
        catch(err){
            res.status(400).send({error: "badLogin"});
        }
    })
    // login
    .post(async function(req, res, next) {
        let user;
        let sess;

        const {email, password} = req.body;
        try{
            // find user by given username
            // authenticate with given password
            // create a session 
            user = await User.findOne({email: email});

            // this will be done using bcrypt
            if (password === user.password){
                req.session.userId = user._id;
                res
                .set({'Location': url + req.baseUrl.toString() + '/' + user._id.toString()})
                .sendStatus(201);
            }
        }
        catch(err){
            console.log(err);
            res
            .status(400)
            .json({message: "badLogin"});
        }
    })
    // update users if they are already found in the database, otherwise create them
    .delete(async function(req, res, next){
        await Session.deleteMany({});
        res.sendStatus(200);
    });

router.route('/:sessionId')
    .get(async function(req, res, next){
        console.log(req.cookies);
        let sess = await Session.find({})
    });

module.exports = router;