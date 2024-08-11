import { hover } from '@testing-library/user-event/dist/hover';
import React, { useState, useEffect } from 'react';

const ExpenseForm = ({ addExpense, currentExpense }) => {
  const [expense, setExpense] = useState({ title: '', amount: '', date: '' });

  useEffect(() => {
    if (currentExpense) {
      setExpense(currentExpense);
    }
  }, [currentExpense]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense({ ...expense, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense(expense);
    setExpense({ title: '', amount: '', date: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="form-group">
        <input
          type="text"
          name="title"
          value={expense.title}
          onChange={handleChange}
          placeholder="Expense Title"
          className="form-control mb-2" required
        />
        <input
          type="number"
          name="amount"
          value={expense.amount}
          onChange={handleChange}
          placeholder="Amount"
          className="form-control mb-2" required
        />
        <input
          type="date"
          name="date"
          value={expense.date}
          onChange={handleChange}
          className="form-control mb-2" required
        />
        <button type="submit" className="btn btn-primary btn-block">
          {expense.id ? 'Update Expense' : 'Add Expense'}
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
