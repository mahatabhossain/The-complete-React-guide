import React from "react";
import "../styles/FilterExpense.css";

const FilterExpense = () => {
  return (
    <div className="filter_container">
      <p>Filter</p>
      <select>
        <option>Select year</option>
        <option>2019</option>
        <option>2020</option>
        <option>2021</option>
      </select>
    </div>
  );
};

export default FilterExpense;
