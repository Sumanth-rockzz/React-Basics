import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
import "./ExpenseItem.css";


const ExpenseItem=(props)=>{
  const tiltleclickHandler=()=>{
    console.log("clicked");
  }
  const deleteclickHandler=()=>{
    console.log("deleted");
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <ExpenseDetails amount={props.amount}  location={props.location}  title={props.title} />
      <button onClick={tiltleclickHandler}>Change Title</button>
      <button onClick={deleteclickHandler}>Delete</button>
    </Card>
  );
}

export default ExpenseItem;
