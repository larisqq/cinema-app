const { Pool } = require("pg");

// Configurarea conexiunii la baza de date
const pool = new Pool({
  user: "username", // schimbă cu utilizatorul tău PostgreSQL
  host: "localhost",
  database: "cinema", // numele bazei de date
  password: "password", // schimbă cu parola ta
  port: 5432, // portul standard pentru PostgreSQL
});

module.exports = pool;
