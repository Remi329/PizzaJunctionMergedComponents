// import route in app.js
const express = require("express");
const bodyParser = require("body-parser");


const authRoute = require("./routes/auth");
const productRoute = require("./routes/pizza");
const orderRoute = require("./routes/order");
const filterRoute = require("./routes/filter");
const discountRoute = require("./routes/product");

// creating Web server
const app = express();


// middleaware - to enable cors at server-side
app.use((req, res, next) => {
  console.log("within cors configuration middleware");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
  "Access-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  next();
});

// for every incoming request, bodyParser will parse data from bytes into JSON object &
// vice-versa for every reponse JSON into bytes. Works with POST and PUT/PATCH
app.use(express.json());

// custom middleware
/*app.use((req, res, next) => {
  console.log("Incoming Request Middleware" + req.body);
  next();
});*/

// middleware - use()
app.use("/api/v1/auth/", authRoute);
app.use("/api/v1/pizzas", productRoute);
app.use("/api/v1/orders", orderRoute);
app.use("/api/v1/filter", filterRoute);
app.use("/api/v1/product", discountRoute);

app.listen(3000, () => {
  console.log("server started...");
});