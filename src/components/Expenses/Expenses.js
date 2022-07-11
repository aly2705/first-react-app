import React, { useState } from 'react';
import './Expenses.css';
import ExpensesFilter from './ExpensesFIlter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';

const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const yearChangeHandler = year => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.items.filter(
    item => item.date.getFullYear() === +filteredYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear} //controlled component
        onYearChange={yearChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );

  //--------------------------------------STEPS IN LEARNING (LEGACY CODE FOR REFERENCE):THE OLD JSX------------------------

  /* return (    <Card className="expenses">
  <ExpensesFilter
    selected={filteredYear} //controlled component
    onYearChange={yearChangeHandler}
  />
  {expensesContent}

  

  /* --------------SHORT CIRCUITING FOR CONDITIONAL CONTENT 
  {filteredExpenses.length === 0 && <p>No expenses found</p>} */
  /* {filteredExpenses.length > 0 &&
    filteredExpenses.map(item => (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    ))} */

  /*  ---------------------------  RENDERING THE LIST (NOT FILTERED)
  {props.items.map(item => (
    <ExpenseItem
      key={item.id}
      title={item.title}
      amount={item.amount}
      date={item.date}
    />
  ))} */

  /* --------------------------------- FIRST LIST OF EXPENSES, NOT DYNAMICALLY RENDERED
  <ExpenseItem
    title={props.items[0].title}
    amount={props.items[0].amount}
    date={props.items[0].date}
  />
  <ExpenseItem
    title={props.items[1].title}
    amount={props.items[1].amount}
    date={props.items[1].date}
  />
  <ExpenseItem
    title={props.items[2].title}
    amount={props.items[2].amount}
    date={props.items[2].date}
  />
  <ExpenseItem
    title={props.items[3].title}
    amount={props.items[3].amount}
    date={props.items[3].date}
  /> }
  </Card>) */
};

export default Expenses;
