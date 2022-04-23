import React from "react";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  //CHILD PARENT COMPONENT COMMUNICATION(chile -> parent)
  const expenseDataHandler = (dataFromExpeneForm) => {
    const newExpenseData = {
      ...dataFromExpeneForm,
      id: Math.random().toString(),
    };
    // console.log(newExpenseData);
    props.addExpense(newExpenseData);
  };

  return (
    <div>
      <ExpenseForm submitExpenseData={expenseDataHandler} />
    </div>
  );
};

export default NewExpense;
