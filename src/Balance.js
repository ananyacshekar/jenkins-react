import React from "react";

function Balance({ transactions }) {
  const income = transactions
    .filter((tx) => tx.type === "income")
    .reduce((acc, tx) => acc + tx.amount, 0);
  const expenses = transactions
    .filter((tx) => tx.type === "expense")
    .reduce((acc, tx) => acc + tx.amount, 0);

  const balance = income - expenses;

  return (
    <div className="balance-container">
      <h2>Balance: ${balance.toFixed(2)}</h2>
    </div>
  );
}

export default Balance;
