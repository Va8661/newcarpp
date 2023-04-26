// BookingPage.js

import React, { useState } from "react";
import "./BookingPage.css";

const BookingPage = ({ selectedCar }) => {
  // State to keep track of customer details
  const [customerDetails, setCustomerDetails] = useState({
    fullName: "",
    email: "",
    phone: "",
    date: "",
  });

  // Function to handle input changes in the form
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCustomerDetails({
      ...customerDetails,
      [name]: value,
    });
  };

  // Function to handle form submission
  // Function to handle form submission
const handleSubmit = async (event) => {
  event.preventDefault();

  // Send customer details to backend
  try {
    const response = await fetch("http://localhost:5000/api/booking_info", { // Corrected URL
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customerDetails),
    });

    if (response.ok) {
      console.log("Successfully booked the car!");
      // Success: Do something with the response (e.g., show success message)
    } else {
      // Error: Handle the error (e.g., show error message)
    }
  } catch (error) {
    console.error("Failed to book the car", error);
  }

  // Reset form after submission
  setCustomerDetails({
    fullName: "",
    email: "",
    phone: "",
    date: "",
  });
};

  return (
    <div className="container">
      <h2>Booking Page</h2>
      <p>Selected Car: {selectedCar.name}</p>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            name="fullName"
            value={customerDetails.fullName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={customerDetails.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={customerDetails.phone}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={customerDetails.date}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BookingPage;
