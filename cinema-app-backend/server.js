const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const moviesRoutes = require("./routes/movies");
const bookingsRoutes = require("./routes/bookings");

const app = express();
const PORT = 5000;

// Configurare CORS pentru frontend-ul React pe localhost:3000
const corsOptions = {
  origin: "http://localhost:3000", // Permite cererile din React
  methods: ["GET", "POST", "PUT", "DELETE"], // Permite metodele utilizate
  allowedHeaders: ["Content-Type"], // Permite Content-Type în header
};

app.use(cors(corsOptions)); // Adaugă middleware-ul CORS

app.use(bodyParser.json());

// Rute
app.use("/movies", moviesRoutes);
app.use("/bookings", bookingsRoutes);

// Pornește serverul pe portul 5000
app.listen(PORT, () => {
  console.log(`Serverul rulează pe portul ${PORT}`);
});
