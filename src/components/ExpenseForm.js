import React, { useState } from "react";
import "../style/expenseForm.css";

const ExpenseForm = (props) => {
  //**********HANDLING MULTIPLE STATE VARIABLE AND FUNCTION SEPERATELY*******************
  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");

  const titleChangeHandler = (event) => setTitle(event.target.value);
  const amountChangeHandler = (event) => setAmount(event.target.value);
  const dateChangeHandler = (event) => setDate(event.target.value);

  // **************PASSING DATA INTO STATE AS OBJECT****************
  /*   const [intput, setInput] = useState({ title: "", amout: "", date: "" });

  const titleChangeHandler = (e) => {
    //First way to fetch state data

    // setInput({
    //   ...input,
    //   title: e.target.value,
    // });

    // Second way to fetch state data
    setInput((prevState) => {
      return { ...prevState, title: e.target.value };
    });
  }; */

  //GATHERING FORM DATA AS OBJECT
  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    // console.log(expenseData);
    props.submitExpenseData(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="expense_form">
        <div className="input_title">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="input_amount">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="input_date">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="form_action">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
