import React, { useState } from 'react';

import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpense/newExpense';

const App=()=>{
/*    expenses=[
  {
    title:"Zomato",
    amount:100,
    location:"Bangalore",
    date:new Date(2023,4,3)
  },
  {
    title:"Zomato",
    amount:200,
    location:"Bangalore",
    date:new Date(2023,4,4)
  },
  {
    title:"Zomato",
    amount:300,
    location:"Bangalore",
    date:new Date(2023,4,5)
  },
  {
    title:"Zomato",
    amount:400,
    location:"Bangalore",
    date:new Date(2023,4,6)
  }

] */

const [expenses,setExpenses]=useState([]);
const addExpenseHandler=(expense)=>{
  setExpenses((prevExpenses)=>{
     return  [...prevExpenses,expense]
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
