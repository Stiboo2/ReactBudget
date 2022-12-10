import ExpenseItem from "./ExpenseItem";
import './Expenses.css'; 
import Card from "../UI/Card"


const Expenses = props => {
  return (
    <Card className="expenses">
      <h2> Lets get started! </h2>
      {props.expenses.map(({ id, title, amount, date }) => (
        <ExpenseItem title={title} amount={amount} date={date} />
      ))}
    </Card>
  );
};



export default Expenses;
