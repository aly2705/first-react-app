import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = props => {
  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const [formState, setFormState] = useState('closed');
  const clearFormHandler = () => {
    setFormState('closed');
  };
  const openFormHandler = () => {
    setFormState('open');
  };

  return (
    <div className="new-expense">
      <ExpenseForm
        visibility={formState}
        onOpenForm={openFormHandler}
        onCancelForm={clearFormHandler}
        onSaveExpenseData={saveExpenseDataHandler}
      />
    </div>
  );
};

export default NewExpense;
