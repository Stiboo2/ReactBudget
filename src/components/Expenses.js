import ExpenseItem from "./ExpenseItem";
import './Expenses.css'; 



const Expenses = props => {
  return (
    <div className="expenses">
      <h2> Lets get started! </h2>
      {props.expenses.map(({ id, title, amount, date }) => (
        <ExpenseItem title={title} amount={amount} date={date} />
      ))}
    </div>
  );
};



export default Expenses;
