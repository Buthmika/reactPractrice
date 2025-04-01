import React, { useState } from "react";
import { motion } from "framer-motion";
import "./carGame.css";
const CarGame = () => {
      const [position, setPosition] = useState(0);
    
      const moveCar = () => {
        setPosition((prev) => (prev < 300 ? prev + 20 : 0));
      };
    