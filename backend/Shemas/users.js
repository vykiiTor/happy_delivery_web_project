const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Creation du shéma User pour ensuite avoir un modéle de ce type ;

const usersSchema = new Schema({
    Name:  String,
    eMail: String,
    Password: String,
  });
 

const users =  mongoose.model('users', usersSchema)

module.exports = users