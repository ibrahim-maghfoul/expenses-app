import React from "react";
import ExpenseItem from "./ExpenselItem";
import "./ExpensesList.css";

const ExpensesList = props =>{
    if(props.expenses.length===0){
        return <p className="expenses-list__fallback">No expeses were founded!</p>;
    }
    return <ul className='expenses-list'>
        {props.expenses.map((expense) => (
            <ExpenseItem
                key= {expense.id}
                title=   {expense.expenseTitle}
                price=   {expense.expensePrice}
                date=  {expense.expenseDate}
            />
            )
        )}
    </ul>

}
export default ExpensesList;