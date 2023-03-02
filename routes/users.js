import express from "express";
const Router = express.Router();

Router.get("/users", (req, res) => {
  res.status(200).send("users");
  console.log("bla2");
});
export default Router;
