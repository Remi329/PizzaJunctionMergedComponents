const express = require("express");
const db = require("../db/connection");
const router = express.Router();

console.log("product route");

router.use(express.json());



// endpoint - http://localhost:3000/api/products - GET-
router.get("", (req, res) => {

  const connection = db;
  //const statement = `select * from users where email='${email}' and password = '${password}'`;
  connection.query(
    "SELECT * from product_table ",
    (error, data) => {
      const result = {};
      if (error) {
        throw error;
      } else {
        result["status"] = "success";
        result["data"] = data.rows;
      }

      res.send(result);
    }
  );
});

router.post("/pizza", (req, res) => {
  console.log("hello");
  const {topping_id,product_name, total_price, image_url} = req.body;
  const connection = db;
  //const statement = `select * from users where email ='${email}' and password='${password}'`
  //res.json({message: 'Welcome to POST method from router'});
  connection.query(`insert into product_table(product_name,total_price,image_url,topping_id) values ('${product_name}','${total_price}','${image_url}','${topping_id}')`, (error, data) => {
      const result = {};
      if (error) {
          throw error;
      } else {
          result ["status"] = "success";
          result ["product is addeed succesfully"] = data.rows;
      }
      res.send(result)
  });
});



router.post("/pizzadiscount", (req, res) => {
  console.log("hello");
  const {discount_category,start_date,start_time,end_date, end_time,discount_percent,status} = req.body;
  const connection = db;
  //const statement = `select * from users where email ='${email}' and password='${password}'`
  //res.json({message: 'Welcome to POST method from router'});
  connection.query(`insert into discount(discount_category,start_date,start_time,end_date, end_time,discount_percent,status) values ('${discount_category}','${start_date}','${start_time}','${end_date}','${end_time}','${discount_percent}','${status}')`, (error, data) => {
      const result = {};
      if (error) {
          throw error;
      } else {
          result ["status"] = "success";
          result ["Discount is addeed succesfully"] = data.rows;
      }
      res.send(result)
  });
});


router.delete("/pizzadelete", (req, res) => {
  console.log("hello");
  const {product_id} = req.body;
  const connection = db;
  //const statement = `select * from users where email ='${email}' and password='${password}'`
  //res.json({message: 'Welcome to POST method from router'});
  connection.query(`delete from product_table where product_id ='${product_id}'`, (error, data) => {
      const result = {};
      if (error) {
          throw error;
      } else {
          result ["status"] = "success";
          result ["product is deleted succesfully"] = data.rows;
      }
      res.send(result)
  });
});

router.put("/pizzaupdate", (req, res) => {
  console.log("hello");
  const {product_id,product_name, total_price} = req.body;
  const connection = db;
  //const statement = `select * from users where email ='${email}' and password='${password}'`
  //res.json({message: 'Welcome to POST method from router'});
  connection.query(`update product_table set product_name = '${product_name}',total_price = '${total_price}' where product_id ='${product_id}'`, (error, data) => {
      const result = {};
      if (error) {
          throw error;
      } else {
          result ["status"] = "success";
          result ["product is deleted succesfully"] = data.rows;
      }
      res.send(result)
  });
});




module.exports = router;
