const express = require('express');
//const { request } = require('http');

const db = require('../db/connection');
const router = express.Router();
console.log("auth route");
router.use(express.json());

// endpoint = https://localhost:300?api/v1/auth/
router.get('/', (req, res) => {
    res.send('Welcome to GET method from router');
});

router.get('/pizza', (req, res) => {
  var name = req.query['name'];
  var total_price = req.query['total_price'];
  var image_url = req.query['image_url'];
  console.log("name: "+ name +" total price: "+ total_price +" Img: "+image_url);  

  sql = `select * from product_table`,
  db.on('error',function(err,client){
    console.log("error with connection",err);
  });

  db.query(sql,(err,data) =>{
    let result = {};
    if (err){return console.error('error detected !!',err,sql);}
    //console.log('pizzas:', data.rows);

    result['status'] = data.rows;
    res.send(result)
  });

});

//find a pizza by id
router.get('/pizza/:id', (req, res) => {
  var name = req.query['name'];
  var total_price = req.query['total_price'];
  var image_url = req.query['image_url'];
  console.log("name: "+ name +" total price: "+ total_price +" Img: "+image_url);  

  sql = `select name from product_table where product_id = ${req.params.id}`,
  db.on('error',function(err,client){
    console.log("error with connection",err);
  });

  db.query(sql,(err,data) =>{
    let result = {};
    if (err){return console.error('error detected !!',err,sql);}
    //console.log('pizzas:', data.rows);

    result['status'] = data.rows;
    res.send(result)
  });

});


// //GET http://localhost:3000/api/v1/auth/pizza
// router.get('/pizza', (req, res) => {
    
// });

    // endpoint = https://localhost:300?api/v1/auth/pizza - POST
router.post("/pizzapost", (req, res) => {
    console.log("hello");
    const {name,total_price,image_url,topping_id} = req.body;
    const connection = db;
    //const statement = `select * from users where email ='${email}' and password='${password}'`

    //res.json({message: 'Welcome to POST method from router'});

    connection.query(`INSERT INTO product_table (name,total_price,image_url,topping_id) VALUES 
 ('${name}','${total_price}','${image_url}','${topping_id}')`

, (error, data) => {

        const result = {};
        if (error) {

            throw error;

        } else {
            result ["status"] = "success";
            result ["error"] = data.rows;
        }
        res.send(result);
    });
});

module.exports = router;