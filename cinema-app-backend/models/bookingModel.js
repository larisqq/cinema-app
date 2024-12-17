const pool = require("../db");

// Creează o rezervare
const createBooking = async (movieId, userName, seats) => {
  const result = await pool.query(
    "INSERT INTO bookings (movie_id, user_name, seats) VALUES ($1, $2, $3) RETURNING *",
    [movieId, userName, seats]
  );
  return result.rows[0];
};

// Șterge o rezervare
const deleteBooking = async (id) => {
  await pool.query("DELETE FROM bookings WHERE id = $1", [id]);
};

module.exports = { createBooking, deleteBooking };
