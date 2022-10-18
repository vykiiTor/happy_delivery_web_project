const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
//const bcrypt = require('bcrypt');
//const users = require('./src/backend/models/Users');
//const cors = require('cors');


const PORT = 27017;

const app = express();

//app.set('view engine', 'ejs');

//app.use(express.json());
//app.use(cors());
//app.use(express.static('public'));



mongoose
  .connect(process.env.URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch((err) => console.log(err));

app.listen(PORT, ()=>{
    console.log('le serveur est lancé sur le port :'+ PORT )
});


