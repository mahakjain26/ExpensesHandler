import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseLists from "./ExpenseLists";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses=props.items.filter(expense=>{
    return expense.date.getFullYear().toString() === filteredYear;
  })

  return (
    
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onhandleFilter={filterChangeHandler}
      />
      <ExpenseLists items={filteredExpenses}/>
    </Card>
  );
};

export default Expenses;

