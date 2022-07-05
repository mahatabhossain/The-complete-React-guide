import React from "react";
import "../styles/NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (expenseFormData) => {
    const formExpenseData = {
      ...expenseFormData,
      id: Math.random().toString(),
    };
    props.onAddExpense(formExpenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
