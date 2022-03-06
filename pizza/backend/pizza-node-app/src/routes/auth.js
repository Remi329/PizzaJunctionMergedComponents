const express = require('express');
//const { request } = require('http');
const db = require('../db/connection')
const router = express.Router();
console.log("auth route");
router.use(express.json());


// endpoint = https://localhost:300?api/v1/auth/
router.get('/', (req, res) => {
    res.send('Welcome to GET method from router');
});

// endpoint = https://localhost:300?api/v1/auth/
router.get('/pizza', (req, res) => {
    const {name, total_price, image_url} = req.body;
    const connection = db;
    console.log(name);
    res.send({name,  total_price, image_url});
    connection.query("SELECT * from product_table where name=$1 and total_price=$2 and image_url=$3", [name, total_price, image_url], (error, data) => {
        console.log(db);
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