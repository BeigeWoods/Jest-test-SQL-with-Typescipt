import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

export const pool = mysql.createPool({
  host: "DB_HOST",
  user: "DB_USER",
  password: "DB_PASSWORD",
  database: "DB_DATABASE",
});

export const db = pool.promise();
