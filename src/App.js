//import React from 'react';

import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpense/newExpense';

const App=()=>{
  const expenses=[
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

]
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
      <NewExpense/>
      <Expenses items={expenses}/>
    </div>
  );
 }

export default App;
