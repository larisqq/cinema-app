const pool = require("../db");

// Funcție pentru obținerea filmelor
const getMovies = async () => {
  const result = await pool.query("SELECT * FROM movies");
  return result.rows;
};

module.exports = { getMovies };
