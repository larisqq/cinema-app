const { Pool } = require("pg");

// Crează un pool de conexiuni
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "cinema",
  password: "password",
  port: 5432,
});

// Funcție pentru a obține filmele
const getMovies = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM movies");
    res.json(result.rows); // Răspunde cu filmele din baza de date
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Nu s-au putut încărca filmele." });
  }
};

// Funcție pentru adăugarea unui film
const addMovie = async (movieData) => {
  try {
    const query = `
      INSERT INTO movies (title, description, duration, showtime, image_url, genre, release_date, rating, language, cast, format)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *;
    `;

    const values = [
      movieData.title,
      movieData.description,
      movieData.duration,
      movieData.showtime,
      movieData.image_url,
      movieData.genre,
      movieData.release_date,
      movieData.rating,
      movieData.language,
      movieData.cast,
      movieData.format,
    ];

    const result = await pool.query(query, values);
    return result.rows[0]; // Returnează filmul adăugat
  } catch (error) {
    console.error(error);
    throw new Error("Eroare la adăugarea filmului: " + error.message);
  }
};

// Funcție pentru ștergerea unui film
const deleteMovie = async (movieId) => {
  try {
    const result = await pool.query(
      "DELETE FROM movies WHERE id = $1 RETURNING *",
      [movieId]
    );

    if (result.rowCount === 0) {
      throw new Error("Filmul nu a fost găsit sau nu a putut fi șters.");
    }

    return { message: "Filmul a fost șters cu succes." };
  } catch (error) {
    console.error(error);
    throw new Error("Eroare la ștergerea filmului: " + error.message);
  }
};

module.exports = {
  getMovies,
  addMovie,
  deleteMovie,
};
