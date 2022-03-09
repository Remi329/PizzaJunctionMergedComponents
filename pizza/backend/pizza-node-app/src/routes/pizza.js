const express = require('express');
//const { request } = require('http');
const db = require('../db/connection')
const router = express.Router();
console.log("pizza route");
router.use(express.json());

db.connect()

router.get("", (req, res) => {
  res.send({ "id:": 1, name: "Meatlovers Pizza", total_price: 30, image_url:"https://b.zmtcdn.com/data/pictures/chains/9/6100639/d5d412e1ebb167dd6fb584cc632d8bde.jpg",topping_id:1 });
});

// endpoint = https://localhost:300?api/v1/auth/
router.get('/pizza', (req, res) => {
  //var name = req.query['name'];
  //var total_price = req.query['total_price'];
  //var image_url = req.query['image_url'];
  //console.log("name: "+ name +" total price: "+ total_price +" Img: "+image_url);
  const connection = db;
  sql = `select * from product_table;`;

  connection.on('error',function(error,client){
    console.log("error with connection",error);
  });

  connection.query(sql,(error,data) =>{
    let result = {};
    if (error){return console.error('error detected !!',error,sql);}
    //console.log('pizzas:', data.rows);
    result['status'] = data.rows;
    res.send(result)
  });
});

router.get('/pizza/:id', (req, res) => {
  //var name = req.query['name'];
  //var total_price = req.query['total_price'];
  //var image_url = req.query['image_url'];
  //console.log("name: "+ name +" total price: "+ total_price +" Img: "+image_url);
  const connection = db;
  sql = `select * from product_table where id=${req.params.id}`;

  connection.on('error',function(error,client){
    console.log("error with connection",error);
  });

  connection.query(sql,(error,data) =>{
    let result = {};
    if (error){return console.error('error detected !!',error,sql);}
    //console.log('pizzas:', data.rows);
    result['status'] = data.rows;
    res.send(result)
  });
});

// endpoint = https://localhost:300?api/v1/auth/pizza - POST
router.post("/pizza", (req, res) => {
  console.log("hello");
  const {name, total_price, image_url, topping_id} = req.body;
  const connection = db;
  //const statement = `select * from users where email ='${email}' and password='${password}'`
  //res.json({message: 'Welcome to POST method from router'});
  connection.query(`INSERT INTO product_table (name, total_price, image_url, topping_id) VALUES 
  (${name}, ${total_price} ${image_url} ${topping_id})`, (error, data) => {
      const result = {};
      if (error) {
          throw error;
      } else {
          result ["status"] = "success";
          result ["error"] = data.rows;
      }
      res.send(result)
  });
});

module.exports = router;