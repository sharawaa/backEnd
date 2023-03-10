import { pool } from "../config/mysql-config.js";

export async function addUsers(users){
    console.log(users)
    const [rows] = await users.map((user)=>pool.query(`INSERT INTO users(name, role, password, eMail, contact, adress_1, user_image, register_date) VALUES('${user.name}','${user.role}','${user.password}','${user.eMail}','${user.contact}','${user.adress_1}','${user.user_image}','${user.register_date}')`))
    return rows;
}