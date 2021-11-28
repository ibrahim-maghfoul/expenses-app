import Card from '../UI/Card';
import './ExpenseDate.css';
 
function ExpenseDate(props){
    const day = props.date.toLocaleString('en-Us',{month:'long'});
    const mounth = props.date.toLocaleString('en-Us',{day:'2-digit'});
    const year = props.date.getFullYear();
    return <Card className='expense-date'>
                <div className='expense-date__day'>
                    {day}
                </div>
                <div className='expense-date__mounth'>
                    {mounth}
                </div>
                <div className='expense-date__year'>
                    {year}
                </div>
            </Card>
}
export default ExpenseDate;