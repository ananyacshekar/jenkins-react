import React from "react";

function TransactionList({ transactions }) {
  return (
    <div className="transaction-list">
      <h3>Transaction History</h3>
      <ul>
        {transactions.map((tx) => (
          <li key={tx.id}>
            {tx.type === "income" ? "+" : "-"} ${tx.amount.toFixed(2)} - {tx.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
