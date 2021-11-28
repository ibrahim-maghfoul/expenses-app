import React, {useState} from "react";
import './ExpenseForm.css';

const ExpenseForm = (props)=>{
    const [entredTitle,setEntredTitle]=useState('');
    const [entredAmount,setEntredAmount]=useState('');
    const [entredDate,setEntredDate]=useState('');

    // const [userInput,setUserInput]=useState({
    //     entredTitle : '',
    //     entredAmount : '',
    //     entredDate : '',
    // });


    const titleHandler =(event)=>{
        /* M1*/
        setEntredTitle(event.target.value);

        /* M2*/
        // setUserInput({
        //     ...userInput,
        //     entredTitle:event.target.value
        // });
        
        /* M3*/
        // setUserInput((prevState)=>{
        //     return {
        //         ...prevState,
        //         entredTitle:event.target.value
        //     }
        // })

        // console.log(event.target.value);
    }
    const amountHandler =(event)=>{
        setEntredAmount(event.target.value);
        /* M2 */ 
        // setUserInput({
        //     ...userInput,
        //     entredAmount:event.target.value
        // });
        // console.log(event.target.value);
    }
    const dateHandler =(event)=>{
        setEntredDate(event.target.value);
        /* M2 */
        // setUserInput({
        //     ...userInput,
        //     entredDate:event.target.value
        // });
        // console.log(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();
    
        const expenseData = {
            expenseTitle  :  entredTitle,
          expensePrice :  entredAmount,
          expenseDate : new Date(entredDate),
        };
        console.log (expenseData.date)
    
        // console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        setEntredTitle('');
        setEntredAmount('');
        setEntredDate('');
      };

    return <div>
        <div className= 'new-expense__controls'>
            <div className = 'new-expense__control'>
                <label>Title</label>
                <input type='text' onChange={titleHandler} value={entredTitle} />
            </div>
            <div className = 'new-expense__control'>
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' onChange={amountHandler} value={entredAmount}/>
            </div>
            <div className = 'new-expense__control'>
                <label>Date</label>
                <input type='date' min='2017-11-07' max='2025-01-01' onChange={dateHandler} value={entredDate}/>
            </div>
            <div className='new-expense__actions'>
                <button type='submit' onClick={submitHandler} >Add Expense</button>
            </div>
        </div>
    </div>
}





export default ExpenseForm;