const express = require("express");
const router = express.Router();
const { createBooking } = require("../controllers/bookingsController");

// Route pentru crearea unei rezervări
router.post("/", async (req, res) => {
  try {
    const { movieId, numberOfSeats } = req.body;

    // Creați rezervarea în baza de date
    const booking = await createBooking(movieId, numberOfSeats);
    res.status(201).json(booking);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
