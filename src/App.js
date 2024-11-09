import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import IncomeForm from "./IncomeForm";
import ExpenseForm from "./ExpenseForm";
import Balance from "./Balance";
import TransactionList from "./TransactionList";
import './App.css';

function App() {
  const [transactions, setTransactions] = useState([]);

  // Add income or expense transaction
  const addTransaction = (type, amount, description) => {
    setTransactions([
      ...transactions,
      { id: uuidv4(), type, amount, description },
    ]);
  };

  return (
    <div className="App">
      <h1>Personal Finance Tracker</h1>
      <Balance transactions={transactions} />
      <IncomeForm addTransaction={addTransaction} />
      <ExpenseForm addTransaction={addTransaction} />
      <TransactionList transactions={transactions} />
    </div>
  );
}

export default App;

