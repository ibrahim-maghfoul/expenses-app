import './App.css';
import Expenses from './components/Expenses/Expenses.js';
import NewExpense from './components/NewExpense/NewExpense';
import React,{useState} from 'react';

const DUMMY_EXPENSES = [
  {
    id:"e1",
    expenseDate : new Date(2019,5,15),
    expensePrice: 350.22,
    expenseTitle : 'Car insurance',
  },
  {
    id:"e2",
    expenseDate : new Date(2019,6,30),
    expensePrice: 120.22,
    expenseTitle : 'bus insurance',
  },
  {
    id:"e3",
    expenseDate : new Date(2020,2,12),
    expensePrice: 50.22,
    expenseTitle : 'Bike insurance',
  },
  {
    id:"e4",
    expenseDate : new Date(2020,12,4),
    expensePrice: 978.22,
    expenseTitle : 'test insurance',
  },
  {
    id:"e5",
    expenseDate : new Date(2021,4,5),
    expensePrice: 200.92,
    expenseTitle : 'train insurance',
  },
  {
    id:"e6",
    expenseDate : new Date(2021,5,15),
    expensePrice: 350.22,
    expenseTitle : 'Car insurance',
  },
];

function App() {
  const [expenses,setExpenses]= useState(DUMMY_EXPENSES);
  
  const addExpenseHandler = (expense)=>{
    setExpenses(prevExpense=>{
      return [expense,...prevExpense]
    });
  }

  return (
    <div className="App">
      <NewExpense onAddExpense= {addExpenseHandler}/>
      <Expenses expenses= {expenses}/>
    </div>
  );
}

export default App;
