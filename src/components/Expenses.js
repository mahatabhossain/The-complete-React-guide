import React, {useState} from 'react'
import ExpenseItem from './ExpenseItem';
import NewExpense from "./NewExpense";

//Initial Data
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
  ];

const Expenses = () => {
    const [expenses, setExpenses] = useState(INITIAL_DATA);

      const addExpenseHandler = (expense) => {
          setExpenses(previousExpense =>{
              return [expense, ...previousExpense];
          })
        console.log("In App.js");
        console.log(expense);
      };

  return (
    <div>
    <div>
        <NewExpense addExpense={addExpenseHandler} />
    </div>

    {/*  Dynamic value passing into component */}
    {expenses?.map((expense) => (
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))}
        {/* Hard coded value passing into component */}
    {/* <TestProps
        title="Hand wash"
        amount=300
        date="2022-02-03"
    /> */}
    
    </div>
  )
}

export default Expenses