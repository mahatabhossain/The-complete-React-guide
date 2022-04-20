import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "../style/ExpenceStyle.css";
import Card from "./Card";

const ExpenseItem = ({ date, title, amount }) => {
  // let titles = title;
  const [titles, setTitle] = useState(title);

  const clickHanler = () => {
    setTitle("Updated State");
    console.log("Button clicked and state change!!");
  };
  return (
    <Card className="expence_container">
      <ExpenseDate date={date} />

      <div className="expence_items">
        <div className="expence_name">{titles}</div>
      </div>
      {/* <h2>{titles}</h2> */}
      <div className="expence_amount">$ {amount}</div>
      <button onClick={clickHanler}>Cnage title</button>
    </Card>
  );
};

export default ExpenseItem;
