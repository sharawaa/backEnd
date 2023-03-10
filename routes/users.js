import express from "express";
import { addUsers } from "../services/user-service.js";
const Router = express.Router();

 Router.post("/users", async (req, res) => {
   const result = await addUsers(req.body.user);
   res.status(200).json(result);
});

// Router.delete("/users", async (req ,res)=>{

// })
export default Router;
