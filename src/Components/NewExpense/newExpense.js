import {useState} from 'react';
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {

const[isEditing,setIsEditing]=useState(false)

 const startEditingHandler=()=>{
    setIsEditing(true);
 }
 const stopEditingHandler=()=>{
  setIsEditing(false);
}

  const saveExpenseHandler=(enteredExpenseData)=>{
      const expenseData={
        ...enteredExpenseData,
        id:Math.random().toString()
      }
      props.onAddExpense(expenseData);
  }
  return (
    <div className="new-expense">
       {!isEditing && <button onClick={startEditingHandler}>Add Expense</button>}
       {isEditing &&  <ExpenseForm onSaveExpenseData={saveExpenseHandler} onStopEditingHandler={stopEditingHandler}/>}
    </div>
  );
};
export default NewExpense;