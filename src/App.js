import React, { useState } from 'react';

import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpense/newExpense';


   const dummy_expenses=[
  {
    id:'a1',
    title:"Zomato",
    amount:100,
    location:"Bangalore",
    date:new Date(2023,4,3)
  },
  {
    id:'a2',
    title:"Zomato",
    amount:200,
    location:"Bangalore",
    date:new Date(2023,4,4)
  },
  {
    id:'a3',
    title:"Zomato",
    amount:300,
    location:"Bangalore",
    date:new Date(2023,4,5)
  },
  {
    id:'a4',
    title:"Zomato",
    amount:400,
    location:"Bangalore",
    date:new Date(2023,4,6)
  }

] 
const App=()=>{
const [expenses,setExpenses]=useState(dummy_expenses);
const addExpenseHandler=(expense)=>{
  setExpenses((prevExpenses)=>{
     return  [expense,...prevExpenses]
  })
  
}
//old approach importing react

/* return React.createElement(
  'div',
  {},
  React.createElement('h2',{},"Let's get started!"),
  React.createElement(Expenses,{items:expenses})
  ) */

  //new modern jsx react one 

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
 }

export default App;
