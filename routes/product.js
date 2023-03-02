import express from "express";
const Router = express.Router();

Router.get("/product", (req, res) => {
  res.status(200).send("product");
  console.log("bla2");
});

Router.post("/products", (req, res) => {
  console.log(req.body);
  products.push(req.body);
  res.send(products);
});

Router.delete("/products", (req, res) => {
  console.log(req.body);
  products.push(req.body);
  res.send(products);
});
export default Router;

let products = [];
