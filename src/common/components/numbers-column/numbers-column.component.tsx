import "./numbers-column.style.scss";
import React from "react";

export const NumbersColumnComponent = () => {
  const numbers = Array.from({ length: 19 }, (_, i) => i + 1);

  return (
    <div className="numbers-column-bar">
      {numbers.map((number) => (
        <span
          key={number}
          className={number === 7 ? "actual-number" : "number"}
        >
          {number}
        </span>
      ))}
      <span className="last-number">20</span>
    </div>
  );
};
