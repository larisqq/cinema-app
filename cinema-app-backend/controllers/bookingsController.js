const { createBooking, deleteBooking } = require("../models/bookingModel");

const addBooking = async (req, res) => {
  const { movieId, userName, seats } = req.body;
  try {
    const newBooking = await createBooking(movieId, userName, seats);
    res.status(201).json(newBooking);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Eroare la adăugarea rezervării." });
  }
};

const removeBooking = async (req, res) => {
  const { id } = req.params;
  try {
    await deleteBooking(id);
    res.status(200).json({ message: "Rezervare anulată cu succes." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Eroare la anularea rezervării." });
  }
};

module.exports = { addBooking, removeBooking };
