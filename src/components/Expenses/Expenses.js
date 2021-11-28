import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import React,{useState} from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpenseChart';

function Expenses(props){
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler  = (selectedYear)=>{
        setFilteredYear(selectedYear);
    }
    const filteredExpenses = props.expenses.filter(expense => {
        console.log(expense.expenseDate.getFullYear().toString() === filteredYear)
        return expense.expenseDate.getFullYear().toString() === filteredYear;
        
      });

    
    return (
        <Card className = 'expenses'>
            <ExpensesFilter  selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
            <ExpensesList expenses={filteredExpenses}/> 
        </Card>)
}
export default Expenses