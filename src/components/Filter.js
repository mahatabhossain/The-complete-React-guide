import React from "react";
import "../style/filter.css";

const Filter = () => {
  return (
    <div className="filter_by_date">
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

export default Filter;
