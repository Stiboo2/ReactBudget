import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import expensesData from "./components/Expenses/expensesData";

const App = () => {
  
  return (
    <div>
      <NewExpense />
      <Expenses expenses={expensesData} />
    </div>
  );
}

export default App;
