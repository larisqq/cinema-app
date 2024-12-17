const express = require("express");
const router = express.Router();
const {
  getMovies,
  addMovie,
  deleteMovie,
} = require("../controllers/moviesController");

// Rute pentru filme
router.get("/", getMovies); // Obținerea tuturor filmelor

// Adăugarea unui film nou
router.post("/", async (req, res) => {
  try {
    const movie = await addMovie(req.body); // Apelează funcția de adăugare a filmului
    res.status(201).json(movie); // Returnează filmul adăugat
  } catch (error) {
    res.status(400).json({ error: error.message }); // Returnează eroare dacă ceva nu merge
  }
});

// Ștergerea unui film
router.delete("/:id", async (req, res) => {
  const { id } = req.params; // Obține ID-ul filmului de la parametrii URL-ului
  try {
    const response = await deleteMovie(id); // Apelează funcția de ștergere a filmului
    res.status(200).json(response); // Returnează succesul ștergerii
  } catch (error) {
    res.status(400).json({ error: error.message }); // Returnează eroare dacă ceva nu merge
  }
});

module.exports = router;
