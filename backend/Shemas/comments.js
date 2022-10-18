const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Creation du shéma User pour ensuite avoir un modéle de ce type ;

const CommentSchema = new Schema({
    UserName:  String,
    RestaurantId: Number,
    Commentarry:String,
  });
 

const Comment =  mongoose.model('Comments', CommentSchema)

module.exports = Comment