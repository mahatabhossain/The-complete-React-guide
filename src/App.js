import React from "react";
import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./components/NewExpense";

const App = () => {
  const expences = [
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

  return (
    <div>
      <h1>Hello React</h1>
      <NewExpense/>
      <div>
        {/*  Dynamic value passing into component */}
        {expences?.map((expence) => (
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
    </div>
  );
};

export default App;
