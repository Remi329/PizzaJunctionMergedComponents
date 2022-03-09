const express = require('express');
//const { request } = require('http');
const db = require('../db/connection')
const router = express.Router();
console.log("pizza route");
router.use(express.json());

db.connect()

router.get('/order', (req, res) => {
    const connection = db;
    sql = `select * from order_table;`;
  
    connection.on('error',function(error,client){
      console.log("error with connection",error);
    });
    connection.query(sql,(error,data) =>{
      let result = {};
      if (error){return console.error('error detected !!',error,sql);}
      result['status'] = data.rows;
      res.send(result)
    });
  });

  router.get('/order/:id', (req, res) => {
    const connection = db;
    sql = `select * from order_table left join product_table on order_table.product_id = product_table.id where customer_id=${req.params.id} and order_date > now() - INTERVAL '5 MINUTE' order by order_date desc;`;
  
    connection.on('error',function(error,client){
      console.log("error with connection",error);
    });
    connection.query(sql,(error,data) =>{
      let result = {};
      if (error){return console.error('error detected !!',error,sql);}
      result['status'] = data.rows;
      res.send(result)
    });
  });

  router.get('/order/sum/:id', (req, res) => {
    const connection = db;
    sql = `select SUM(total_price * quantity) from order_table left join product_table on order_table.product_id = product_table.id where customer_id=${req.params.id} and  order_date > now() - INTERVAL '5 MINUTE' group by customer_id;`;
  
    connection.on('error',function(error,client){
      console.log("error with connection",error);
    });
    connection.query(sql,(error,data) =>{
      let result = {};
      if (error){return console.error('error detected !!',error,sql);}
      result['status'] = data.rows;
      res.send(result)
    });
  });

router.post("/order", (req, res) => {
    console.log("New order posted");
    const {customer_id, product_id, quantity, order_date} = req.body;
    const connection = db;
    connection.query(`INSERT INTO order_table(customer_id, product_id, quantity, order_date) VALUES ('${customer_id}','${product_id}','${quantity}','${order_date}')`, (error, data) => {
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