const User = require('./../models/user');
const jwt = require("jwt-simple");
const config = require('../config');

// use https://jwt.io/ JSON Web Token
function tokenForUser(user){
    const timestamp = new Date().getTime();
    return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signin = function(req, res, next) {
    // User has already had their email and password auth'd
    // We just need to give theme a token
    res.send( { user : req.user, token: tokenForUser(req.user), success: true });
}

exports.signup = function(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;
    console.log(email+password);

    if (!email || !password){
        return res.status(422).send({ error: 'You must provide email and password'});
    }
    // See if a user with  the given email exists
    User.findOne({ email: email }, function(err, existingUser) {
        if(err) { return next(err);}

        //If a user with email does exist return an error
        if(existingUser){
            return res.status(422).send( { error: 'Email is in use'});
        }

        // If a user with email deos not exist, create and save user record
        const user = new User({
            email: email,
            password: password
        });

        user.save(function(err){
            if(err) {return next(err)};

            // Respond to request indicating the user was created
            res.json({user, token: tokenForUser(user),success: true});
        });        
    });

    //res.send({ success: 'true'});
};