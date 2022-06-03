import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";

const INITIAL_DATA = [
  {
    id: "e1",
    title: "Toilet paper",
    amount: "94.12",
    date: new Date(2021, 3, 15),
  },
  {
    id: "e2",
    title: "Bedsheet",
    amount: "80.12",
    date: new Date(2021, 5, 15),
  },
  {
    id: "e3",
    title: "Brush",
    amount: "44.12",
    date: new Date(2021, 7, 15),
  },
  {
    id: "e4",
    title: "Pillow",
    amount: "4.12",
    date: new Date(2021, 9, 15),
  },
];

const Expenses = () => {
  const [expenses, setExpenses] = useState(INITIAL_DATA);

  const addExpenseHandler = (expense) => {
    setExpenses((previousExpense) => {
      return [expense, ...previousExpense];
    });
    console.log("In App.js");
    console.log(expense);
  };
  return (
    <div>
      {" "}
      {/*  Dynamic value passing into component */}
      {expenses?.map((expence) => (
        <ExpenseItem
          title={expence.title}
          amount={expence.amount}
          date={expence.date}
        />
      ))}
      {/* Hard coded value passing into component */}
      {/* <TestProps
    title="Hand wash"
    amount=300
    date="2022-02-03"
  /> */}
    </div>
  );
};

export default Expenses;
