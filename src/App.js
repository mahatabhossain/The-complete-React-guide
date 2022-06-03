import React, { useState } from "react";
// import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";
import Filter from "./components/Filter";
import ExpenseItem from "./components/ExpenseItem";
import "./style/filter.css";
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

const App = () => {
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
      <h1>The Complete React Guide</h1>

      <NewExpense addExpense={addExpenseHandler} />
      <Filter />
      <div>
        {" "}
        {/*  Dynamic value passing into component */}
        {expenses?.map((expence) => (
          <ExpenseItem
            key={expence.id}
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
    </div>
  );
};

export default App;
