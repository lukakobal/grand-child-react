import React from "react";
import "./styles.css";
import Box from "./Box";

export default function App() {
  const color = "lightgreen"; // Parent podatek

  return (
    <div className="app">
      <h1>Parent → Child → Grandchild</h1>

      {/* Pošljemo child-u props */}
      <Box shade={color} />
    </div>
  );
}
