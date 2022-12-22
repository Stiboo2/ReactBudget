import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
 // const [filteredDYear, setFilteredDate] = useState(new Date().getFullYear());
  const changeDateHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  //props.onFilterSelect(selectedDate);
  
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value = {props.selected} onChange={changeDateHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
