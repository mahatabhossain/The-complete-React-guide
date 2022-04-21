import React from 'react'
import '../style/expenseForm.css'
const ExpenseForm = () => {
const titleChangeHandler = (event)=>{
    console.log(event.target.value);
}
  return (
    <form>
      <div className='expense_form'>
          <div className='input_title'>
              <label>Title</label>
              <input type= 'text' onChange={titleChangeHandler}/>
          </div>
          <div className='input_amount'>
              <label>Amount</label>
              <input type= 'number' min='0.01' step='0.01'/>
          </div>
          <div className='input_date'>
              <label>Date</label>
              <input type= 'date' min='2019-01-01' max='2022-12-31'/>
          </div>
          <div className='form_action'>
              <button type='submit'>Add Expense</button>
          </div>
      </div>
    </form>
  )
}

export default ExpenseForm