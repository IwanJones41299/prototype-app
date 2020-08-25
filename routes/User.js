const express = require('express');
const userRouter = express.Router();
const passport = require('passport');
const passportConfig = require('../passport');
const JWT = require('jsonwebtoken');
const User = require('../models/User');
const ToDo = require('../models/ToDo');

const signToken = userID => {
    return JWT.sign({
        iss : "IwanJones",
        sub : userID
    }, "IwanJones",{expiresIn : "1h"});
}
//Register a user route
userRouter.post('/register', (req, res) => {
    const { username,password,role } = req.body;
    User.findOne({username}, (err, user) => {
        if(err)
            res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
        if(user)
            res.status(400).json({message : {msgBody : "Username has been taken already", msgError: true}});
        else{
            const newUser = new User({username,password,role});
            newUser.save(err => {
                if(err)
                    res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
                else
                    res.status(201).json({message : {msgBody : "Account successfull created", msgError: false}});
            });
        }
    });
});

//logining in route
userRouter.post('/login',passport.authenticate('local',{session : false}), (req, res) => {
    if(req.isAuthenticated()){
        const {_id,username,role} =req.user;
        const token = signToken(_id);
        res.cookie('access_token',token,{httpOnly: true, sameSite: true});
        res.status(200).json({isAuthenticated : true, user : {username, role}});
    }
});

//loging out route
userRouter.get('/logout',passport.authenticate('jwt',{session : false}), (req, res) => {
    res.clearCookie('access_token');
    res.json({user : {username : "", role : ""}, success : true});
});

//once a user is logged in, this allows them to create their todos
userRouter.post('/todo',passport.authenticate('jwt',{session : false}), (req, res) => {
    const todo = new ToDo(req.body);
    todo.save(err => {
        if(err)
            res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
        else{
            req.user.todos.push(todo);
            req.user.save(err => {
                if(err)
                    res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
                else
                    res.status(200).json({message : {msgBody : "Suceessfully created todo", msgError : false}});
            });
        }
    });
});

//once a user is logged in, this allows the user to view their todos
userRouter.get('/todos',passport.authenticate('jwt',{session : false}), (req, res) => {
    User.findById({_id : req.user._id}).populate('todos').exec((err,document) =>{
        if(err)
            res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
        else{
            res.status(200).json({todos : document.todos, authenticated : true});
        }
    });
});

//this allows an admin user to view the admin page
userRouter.get('/admin',passport.authenticate('jwt',{session : false}), (req, res) => {
    if(req.user.role == 'admin'){
        res.status(200).json({message : {msgBody : "Welcome admin user", msgError: false}});
    }
    else
        res.status(403).json({message : {msgBody : "You are not an admin!", msgError: true}});
});

//backend and frontend synced, so when user closes the page he can revisit page and he'll still be logged in if sucessfully login before
userRouter.get('/authenticated',passport.authenticate('jwt',{session : false}), (req, res) => {
    const {username,role} = req.user;
    res.status(200).json({isAuthenticated : true, user : {username,role}});
});


module.exports = userRouter;