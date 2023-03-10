import express from "express";
import { addProduct } from "../services/prod-service.js";
const Router = express.Router();

Router.get("/products", (req, res) => {
  res.status(200).json(products);
  console.log(products);
});
// app.get("/products", (request, response) => {
//   console.log("start");
//   response.status(200).json(products);
// });

Router.post("/products",async (req, res) => {
  console.log(req.body.product);
  const result = await addProduct(req.body.product);
  res.status(200).json(result);
});

// Router.delete("/products", (req, res) => {
//   console.log(req.body);
//   products.push(req.body);
//   res.send(products);
// });
export default Router;


