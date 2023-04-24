import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  console.log(props.title);
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);
  console.log("react evaluted");
  //using state will change user interface dynamic
  const titleclickHandler = () => {
    setTitle("Updated!!");
    console.log(title);
  };
  const expenseclickHandler = () => {
    setAmount(100);
    console.log(amount);
  };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <ExpenseDetails
          amount={amount}
          location={props.location}
          title={title}
        />
        <button onClick={titleclickHandler}>Change Title</button>
        <button onClick={expenseclickHandler}>Change ExpenseAmount</button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
