import React, { Fragment } from 'react';
import logo from './logo.svg';
import ExpenseBalance from './components/balance/expense-balance';
import Expense from './components/Expenses/Expenses';
import './App.css';

function App() {
  return (
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[95%] px-3 py-3 w-[30rem] flex flex-col space-y-4">
        <ExpenseBalance/>
        <Expense/>
      </div>
  );
}

export default App;
