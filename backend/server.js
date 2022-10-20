const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const bcrypt = require('bcrypt');
const Restaurants = require("./Shemas/Restaurants");
const users = require("./Shemas/users");
const Comments = require("./Shemas/Comments");
//import importToArray from 'import-to-array';
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



app.post("/login",(req, res) => {
    console.log(req.body);
    const eMail = req.body.eMail;
    const Password = req.body.Password;
  
    users.findOne({ eMail: eMail }, (err, data) => {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        if (data) {
          bcrypt.compare(Password, data.Password, (err, result) => {
            if(err){
              console.log(err);
              res.send(err);
            }else{
              console.log(result);
            if ( result === true ) {
                res.send({
                  msg:"user connected",
              });
             }else{
              res.send({msg:"Mauvais Password"});
              console.log("Mauvais Password");
            }
          }
          });
        }
      }
    });
  });
  
    app.post("/SignUp", (req, res) => {
      console.log(req.body);
      let eMail = req.body.eMail;
      let Password = req.body.Password;
      let Name = req.body.Name;
      const saltRounds = 10;
    
      users.findOne({ eMail : eMail }, (err, data) => {
        if (err) {
          console.log(err);
        } else {
          if (data) {
            if (data.eMail === eMail) {
              console.log("Le mail est déjà utilisé ");
              res.send({ message: "Le mail est déjà utilisé " });
            }
          } else {
            bcrypt.hash(Password, saltRounds, (err, hash) => {
              
              const newUser = new users({
                eMail: eMail,
                Password: hash,
                Name: Name,
          
              });
              newUser.save((err) => {
                if (err) {
                  console.log(err);
                } else {
                  res.send({ message: "Utilisateur enregistré" });
                }
              });
            });
          }
        }
      });
    });
  
app.post("/NewComment",(req,res)=>{
    let Comment = req.body.Comment;
    let RestaurantId = req.body.RestaurantId;
    let UserName = req.body.UserName
    Comments.findOne({UserName:UserName},(err,data)=>{
        if(err){
            console.log(err);
        }else{
            if (data) {
                if (data.UserName === UserName && data.RestaurantId === RestaurantId) {
                  console.log("Vous avez dejà posté un commentaire à propos de cet établissement ");
                  res.send({ message: "Vous avez dejà posté un commentaire à propos de cet établissement " });
                }
              } else {
                const NewComment = new Comments({
                    Comment: Comment,
                    UserName: UserName,
                    RestaurantId: RestaurantId,
                  });
                  NewComment.save((err) => {
                    if (err) {
                      console.log(err);
                    } else {
                      res.send({ message: "Commentaire enregistré" });
                    }
                  });
              }
        }

    });
});

app.get("/GetRestaurants",(req,res)=>{
    Restaurants.find({},(err,data)=>{
      if(err){
        console(err);
        res.send(err);
      }else{
        res.send({data});
      }
    })
});

app.get("/GetComments",(req,res)=>{
    Comments.find({},(err,data)=>{
      if(err){
        console(err);
        res.send(err);
      }else{
        res.send({data});
      }
    })
});
app.get("/GetUsers",(req,res)=>{
  users.find({},(err,data)=>{
    if(err){
      console(err);
      res.send(err);
    }else{
      res.send({data});
    }
  })
});