const express = require('express');
const app = express();
const cookieParse = require('cookie-parser');
const mongoose = require('mongoose');
app.use(cookieParse());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/prototype',{useNewUrlParser : true, useUnifiedTopology: true }, () => {
    console.log("db connected");
});

const userRouter = require('./routes/User');
app.use('/user',userRouter);

app.listen(3000, () => {
    console.log("express server started");
});

module.exports = userRouter;


const User = require('./models/User');

const userInput = {
    username : "IwanJones4",
    password : "password1234",
    role : "admin"
}

const user = new User(userInput);
user.save((err,document) => {
    if(err)
        console.log(err);
    console.log(document);
});