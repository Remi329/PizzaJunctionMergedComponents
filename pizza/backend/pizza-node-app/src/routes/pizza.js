const express = require('express');
//const { request } = require('http');
const db = require('../db/connection')
const router = express.Router();
console.log("auth route");
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
  //const pool  = new Pool(config);
  sql = `select * from product_table;`;

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

// endpoint = https://localhost:300?api/v1/auth/pizza - POST
router.post("/pizza", (req, res) => {
  console.log("hello");
  const {name, total_price, image_url, topping_id} = req.body;
  const connection = db;
  //const statement = `select * from users where email ='${email}' and password='${password}'`
  //res.json({message: 'Welcome to POST method from router'});
  connection.query("SELECT * from product_table where name=$1 and total_price=$2 and image_url=$3 and topping_id=$4", [name, total_price, image_url, topping_id], (error, data) => {
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