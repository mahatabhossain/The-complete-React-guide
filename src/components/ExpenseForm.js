import React, { useState } from "react";
import "../styles/ExpenseForm.css";

const ExpenseForm = (props) => {
  // HANDLING MULTIPLE STATE
  // const [userInput, setUserInput] = useState({
  //   title: '',
  //   amount: '',
  //   date: '',
  // });

  // const titleChangeHandler =(e)=>{
  //   setUserInput({
  //     ...userInput,
  //     title: e.target.value,
  //   })
  // }
  //Handling form data
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const amountHandler = (e) => {
    setAmount(e.target.value);
  };

  const dateHandler = (e) => {
    setDate(e.target.value);
    // console.log(e);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    props.onSaveExpenseData(formData);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit" onClick={submitHandler}>
            Add Expense
          </button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
