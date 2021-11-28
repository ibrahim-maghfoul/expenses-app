import Card from '../UI/Card';
import  './ExpenceItem.css'
import ExpenseDate from './ExpenseDate.js'
// import React , {useState} from 'react';
function ExpenseItem(props){
    /*
    // const [title,setTitle] = useState(props.description);
    // const clickHanler=()=>{
    //     setTitle('New title');
    //     console.log(title);
    // }
    { <button onClick={clickHanler}>Click this button </button> }
    */
    return  <li>
                <Card className='expense-item'>
                    <ExpenseDate date = {props.date} ></ExpenseDate>
                    <div className='expense-item__description'>
                        <h2>{props.title}</h2>
                        <div className='expense-item__price'>{props.price}$</div>
                    </div>
                </Card>
            </li>
}
export default ExpenseItem;