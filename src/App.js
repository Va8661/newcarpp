// App.js

import React, { useState } from "react";
import "./App.css";
import CarPage from "./CarPage";
import BookingPage from "./BookingPage";

const App = () => {
  // State to keep track of selected car for booking
  const [selectedCar, setSelectedCar] = useState(null);

  // Function to handle car selection
  const handleCarSelect = (car) => {
    setSelectedCar(car);
  };

  return (
    <div className="App">
      {!selectedCar ? (
        <CarPage handleCarSelect={handleCarSelect} />
      ) : (
        <BookingPage selectedCar={selectedCar} />
      )}
    </div>
  );
};

export default App;
