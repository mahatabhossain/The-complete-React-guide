import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "../styles/Expenses.css";
import Card from "./Card";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYeaer) => {
    setFilteredYear(selectedYeaer);
  };

  return (
    <Card className="expenses">
      {props.item.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
