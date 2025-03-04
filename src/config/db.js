const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
});

pool.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao PostgreSQL:", err);
  } else {
    console.log("PostgreSQL conectado");
  }
});

module.exports = pool;
