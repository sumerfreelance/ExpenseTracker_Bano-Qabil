import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [currentExpense, setCurrentExpense] = useState(null);

  const addExpense = (expense) => {
    if (currentExpense) {
      setExpenses(expenses.map((item) => (item.id === expense.id ? expense : item)));
      setCurrentExpense(null);
    } else {
      setExpenses([...expenses, { ...expense, id: Date.now() }]);
    }
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const editExpense = (expense) => {
    setCurrentExpense(expense);
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Expense Tracker</h1>
      <ExpenseForm addExpense={addExpense} currentExpense={currentExpense} />
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} editExpense={editExpense} />
    </div>
  );
};

export default App;
