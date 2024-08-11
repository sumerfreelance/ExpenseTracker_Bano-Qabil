import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ expenses, deleteExpense, editExpense }) => {
  return (
    <div>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
          deleteExpense={deleteExpense}
          editExpense={editExpense}
        />
      ))}
    </div>
  );
};

export default ExpenseList;
