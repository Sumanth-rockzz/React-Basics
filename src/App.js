import ExpenseItem from './Components/ExpenseItem';

function App() {
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
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
       title={expenses[0].title}
       amount={expenses[0].amount}
       location={expenses[0].location}
       date={expenses[0].date}
       />
       <ExpenseItem
       title={expenses[1].title}
       amount={expenses[1].amount}
       location={expenses[1].location}
       date={expenses[1].date}
       />
       <ExpenseItem
       title={expenses[2].title}
       amount={expenses[2].amount}
       location={expenses[2].location}
       date={expenses[2].date}
       />
       <ExpenseItem
       title={expenses[3].title}
       amount={expenses[3].amount}
       location={expenses[3].location}
       date={expenses[3].date}
      />
    </div>
  );
}

export default App;
