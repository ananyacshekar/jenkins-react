import React, { useState } from "react";

function IncomeForm({ addTransaction }) {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount && description) {
      addTransaction("income", parseFloat(amount), description);
      setAmount("");
      setDescription("");
    }
  };

  return (
    <div className="form-container">
      <h3>Add Income</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">Add Income</button>
      </form>
    </div>
  );
}

export default IncomeForm;
