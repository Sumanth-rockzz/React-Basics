import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpenseFilter';
import './Expenses.css';
import Card from "../UI/Card";


const Expenses=(props)=>{
    const [filteredYear,setFilteredYear]=useState('2020');
    const filterChangeHandler=selectedYear=>{
        setFilteredYear(selectedYear);
    }
const filteredExpenses=props.items.filter(expense=>{
    return expense.date.getFullYear().toString()===filteredYear;
});
    return (
        <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
     {/*    <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        location={props.items[0].location}
        date={props.items[0].date}
        />
        <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        location={props.items[1].location}
        date={props.items[1].date}
        />
        <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        location={props.items[2].location}
        date={props.items[2].date}
        />
        <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        location={props.items[3].location}
        date={props.items[3].date}
       /> */}
        {filteredExpenses.map((expense)=>{
            return(
                 <ExpenseItem
                 key={expense.id}
                 title={expense.title}
                 amount={expense.amount}
                 location={expense.location}
                 date={expense.date}
                 />
            )
            })}
       </Card>

    );
}

export default Expenses;