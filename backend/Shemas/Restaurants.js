const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Creation du shéma User pour ensuite avoir un modéle de ce type ;

const RestaurantsSchema = new Schema({
    RestaurantId:  Number,
    RestaurantName: String,
    Location:String,
    Rate : Number,
  });
 

const Restaurants =  mongoose.model('Restaurants', RestaurantsSchema)

module.exports = Restaurants