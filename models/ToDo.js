const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

const ToDoSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('ToDo', ToDoSchema);