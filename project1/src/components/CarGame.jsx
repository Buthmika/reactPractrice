import React, { useState } from "react";
import { motion } from "framer-motion";
import "./carGame.css";

const CarGame = () => {
  const [position, setPosition] = useState(0);

  const moveCar = () => {
    setPosition((prev) => (prev < 300 ? prev + 20 : 0));
  };

  return (
    <div className="game-container">
      <h1 className="game-title">Simple Car Game</h1>
      <div className="road">
        <motion.div
          className="car"
          animate={{ x: position }}
          transition={{ type: "spring", stiffness: 100 }}
        />
      </div>
      <button className="move-button" onClick={moveCar}>
        Move Car
      </button>
    </div>
  );
};

export default CarGame;
