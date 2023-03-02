import bodyParser from "body-parser";
import express from "express";
import product from "./routes/product.js";
import users from "./routes/users.js";

const app = express();
const port = 4000;
app.use(bodyParser.json());
app.use(product);
app.use(users);
app.listen(4000, () => {
  console.log(`start ${port}`);
});
