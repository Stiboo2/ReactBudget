import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import expensesData from "./components/Expenses/expensesData";

const App = () => {
  const addExpenseHandler = expense => {
    console.log("In App.js");
    console.log(expense);

  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expensesData} />
    </div>
  );
}

export default App;
