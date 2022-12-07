import Expenses from "./components/Expenses";
import expensesData from "./components/expensesData";

function App() {
  
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expensesData} />
    </div>
  );
}

export default App;
