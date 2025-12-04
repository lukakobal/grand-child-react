import React from "react";
import SmallBox from "./SmallBox";

export default function Box({ shade }) {
  return (
    <div className="big-box">
      <p>Child received: {shade}</p>

      {/* Posredujemo naprej grandchild komponenti */}
      <SmallBox color={shade} />
    </div>
  );
}
