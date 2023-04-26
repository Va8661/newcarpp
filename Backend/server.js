const express = require("express");
const mysql = require("mysql2");
const app = express();
const cors = require('cors');

// Create MySQL connection pool
const pool = mysql.createPool({
  connectionLimit: 10, // Update with your desired connection limit
  host: "127.0.0.1",
  user: "root",
  password: 'vaishnav86', // Update with your MySQL password
  database: "booking_info",
});

// Middleware to parse JSON request body
app.use(express.json());
app.use(cors()); // Add CORS middleware

// POST endpoint to handle booking
app.post("/api/booking_info", (req, res) => {
  const { fullName, email, phone, date } = req.body;

  // Validate input data
  if (!fullName || !email || !phone || !date) {
    res.status(400).json({ error: "Invalid input data" });
    return;
  }

  // Insert customer details into MySQL database
  const query = `INSERT INTO customers (full_name, email, phone, booking_date) VALUES (?, ?, ?, ?)`;
  pool.query(query, [fullName, email, phone, date], (err, result) => {
    if (err) {
      console.error("Error inserting customer details into MySQL:", err);
      res.status(500).json({ error: "Failed to book the car" });
      return;
    }
    console.log("Successfully booked the car!");
    res.sendStatus(200);
  });
});

// Handle MySQL connection errors
pool.on("error", (err) => {
  console.error("MySQL connection error:", err);
});

const port = 5000; // Use any port of your choice
app.listen(port, () => {
  console.log(`Server running on http://localhost:5000`);
});
