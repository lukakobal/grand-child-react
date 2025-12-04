import React from "react";

export default function SmallBox({ color }) {
  return (
    <div className="small-box" style={{ backgroundColor: color }}>
      <p>Grandchild: {color}</p>
    </div>
  );
}
