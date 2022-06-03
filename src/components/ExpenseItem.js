import React from "react";
import ExpenseDate from "./ExpenseDate";
import "../style/ExpenceStyle.css";
import Card from "./Card";

const ExpenseItem = ({ date, title, amount }) => {
  return (
    <Card className="expence_container">
      <ExpenseDate date={date} />

      <div className="expence_items">
        <div className="expence_name">{title}</div>
      </div>
      <div className="expence_amount">$ {amount}</div>
    </Card>
  );
};

export default ExpenseItem;
