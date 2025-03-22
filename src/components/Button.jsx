import React from "react";
import { forwardRef } from "react";
import * as motion from "motion/react-client";
import { useState } from "react";
import { NavLink } from "react-router";

const containerStyle = {
  width: 140,
  height: 50,
  borderRadius: 50,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  padding: "0 10px",
  justifyContent: "space-between",
  overflow: "hidden",
  transition: "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
};

const handleStyle = {
  width: 35,
  height: 35,
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default function Button() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a href="#ContactForm">
      <button
        className="toggle-container"
        style={{
          ...containerStyle,
          backgroundColor: isHovered ? "#e8571e" : "white",
          color: isHovered ? "white" : "black",
          flexDirection: isHovered ? "row-reverse" : "row",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.span
          style={{ fontSize: "15px", fontWeight: "bold" }}
          layout
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="px-1"
        >
          LET'S TALK
        </motion.span>

        <motion.div
          className="toggle-handle"
          style={{
            ...handleStyle,
            backgroundColor: isHovered ? "white" : "#e8571e",
            color: isHovered ? "#e8571e" : "white",
          }}
          layout
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {isHovered ? (
            <span className="material-symbols-rounded">arrow_outward</span>
          ) : (
            <span className="material-symbols-outlined">arrow_right_alt</span>
          )}
        </motion.div>
      </button>
    </a>
  );
}
