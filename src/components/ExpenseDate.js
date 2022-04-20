import React from "react";

const ExpenseDate = ({ date }) => {
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    <div className="date_container">
      <div className="months">{month}</div>
      <div>{day}</div>
      <div>{year}</div>
    </div>
  );
};

export default ExpenseDate;