import { pool } from "../config/mysql-config.js";

export async function getUsers(limit) {
  const [rows] = await pool.query(`se`);
}
