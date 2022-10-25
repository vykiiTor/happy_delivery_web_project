const express = require('express')
const router = express.Router();
const mysql = require('mysql');



const db = mysql.createConnection({
    host: "localhost",
  
    user: "root",
  
    password: "Othman611"
});
  
db.connect(function(err){
    if (err) throw err;
    console.log("Connected to MySQL DB!");
});


router.get('/articles', (req, res) => {
    let sql = 'select * from restaurant.plats';
    db.query(sql, (err, result)=>{
      if (err) throw err;
      res.json(result);
    })
  });



router.post('/login', (req, res)=>{
  
      const passwordLogin = req.body.passwordLogin;
  
      const emailLogin = req.body.emailLogin;



  
   
  
      if (this.emailLogin === "" || this.passwordLogin === "") {
        this.emptyFields = true;
     }
  
      let promiseQuery = new Promise(async (resolve, reject ) =>{
  
        console.log(emailLogin);
  
        var emailConnexion = [[emailLogin]];
        var passconnexion = [[passwordLogin]];

  
        db.query('SELECT user_id FROM restaurant.users WHERE email = ? ', [emailConnexion], async (err, res) => {
  
          console.log(res);
          console.log("hello22");

  
          if (err) reject(err);
  
          else{
  
              if(res.length <= 0){

  
                reject()
  
              }else{
  
  
                  console.log('connected1');
  
              }
          }
  
        },
        )
  
        db.query('SELECT user_id FROM restaurant.users WHERE password = ? ', [passconnexion], async (err, res) => {
  
          console.log(res);
          console.log("hello11");
  
          if (err) reject(err);
  
          else{
  
              if(res.length <= 0){
  
                reject()
  
              }else{
  
                 

                  console.log('connected2');
  
              }
          }
  
        })
  
      res.json('connected3');  
      })
    
      
   

    
  });


  router.post('/user', (req, res) => {
    const emailreg = req.body.emailReg
    const passwordreg = req.body.passwordReg
    const confirmreg = req.body.confirmReg
    var profil = '0'
  
    let user = [
      [emailreg, passwordreg, profil]
    ]
    console.log(user)
  
      
    
  
    var sql = 'INSERT INTO restaurant.users (email, password, adminuser) VALUES ?';
    db.query(sql, [user], (err, result) => {
      if (err) throw err;
        res.json(result)
    });
    
  })


  router.post('/article', (req, res) => {
    const tittle = req.body.tittle
    const description = req.body.description
    const image = req.body.image
    const author = req.body.author
  
    let book = [
      [tittle, description, image, author]
    ]
    console.log(book)
  
  
    var sql = 'INSERT INTO restaurant.plats (tittle, description, image, author) VALUES ?';
    db.query(sql, [book], (err, result) => {
      if (err) throw err;
      console.log(result)
        res.json({tittle : tittle , description : description , image : image , author : author})
    });
    
  })

  router.get('/cart', (req, res) => {
    let sql = 'select * from restaurant.cart';
    db.query(sql, (err, result)=>{
      if (err) throw err;
      res.json(result);
    })
  });

  router.post('/platscart', (req, res) => {
    const tittle = req.body.tittle
    const description = req.body.description
    const image = req.body.image
    const author = req.body.author
  
    let book = [
      [tittle, description, image, author]
    ]
    console.log(book)
  
  
    var sql = 'INSERT INTO restaurant.cart (tittle, description, image, author) VALUES ?';
    db.query(sql, [book], (err, result) => {
      if (err) throw err;
      console.log(result)
        res.json({tittle : tittle , description : description , image : image , author : author})
    });
    
  })


  router.post('/delete', (req, res) => {
    const id = req.body.id
    console.log(id)

    var sql = 'delete from restaurant.plats where book_id =' +id+ ' ';
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result)
    });
    
  })


  router.post('/deleteitem', (req, res) => {
    const id = req.body.id
    console.log(id)

    var sql = 'delete from restaurant.cart where book_id =' +id+ ' ';
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result)
    });
    
  })

  


  
    

module.exports = router
