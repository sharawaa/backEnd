import { pool } from "../config/mysql-config.js";

export async function addProduct(products){
console.log(products);
  const [rows] = await products.map((product)=>pool.query(`INSERT INTO products(name, created_date, description, sale, price, stock, image) VALUES('${product.name}','2000-05-11', '${product.description}' ,${product.sale}, ${product.price}, ${product.stock}, '${product.image}')`))
  return rows;
}

