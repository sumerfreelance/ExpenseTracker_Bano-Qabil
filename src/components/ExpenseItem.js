import React from 'react';

const ExpenseItem = ({ expense, deleteExpense, editExpense }) => {
    return (
        <div className="card mb-2">
            <div className="card-body">
                <h5 className="card-title">{expense.title}</h5>
                <p className="card-text">Amount: ${expense.amount}</p>
                <p className="card-text">Date: {expense.date}</p>
                <button onClick={() => editExpense(expense)} className="btn btn-warning mr-2">
                    Edit
                </button><span> </span>
                <button onClick={() => deleteExpense(expense.id)} className="btn btn-danger">
                    Delete
                </button>
            </div>
        </div>
    );
};

export default ExpenseItem;
