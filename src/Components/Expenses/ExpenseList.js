import ExpenseItem from './ExpenseItem'
import './ExpenseList.css'
const ExpensesList=(props)=>{
    if(props.items.length===0){
            return(
                 <h2 className='expenses-list__fallback'>No Expenses Found.</h2>
            )
    }
    if(props.items.length===1){
        return (<ul className="expenses-list">
        {props.items.map((expense)=>(
            <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            location={expense.location}
            date={expense.date}
            />
        ))
        }
        <h2 className='expenses-list__fallback'>Please add More Expenses.</h2> 
</ul>
);
}
return (<ul className="expenses-list">
            {props.items.map((expense)=>(
                <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                location={expense.location}
                date={expense.date}
                />
            ))
            }
            
    </ul>
    );
    
}

export default ExpensesList