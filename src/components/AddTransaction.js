import React, { useState, useRef, useEffect } from "react";

function AddTransaction({ addTransaction }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const inputRef = useRef(null);

  // Auto-focus description field
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description.trim()) return;
    const parsed = parseFloat(amount);
    if (Number.isNaN(parsed)) return;

    addTransaction({ description: description.trim(), amount: parsed });
    setDescription("");
    setAmount("");
    inputRef.current?.focus();
  };

  return (
    <div className="form-container">
      <h2>Add Transaction</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            id="description"
            type="text"
            ref={inputRef}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description...."
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
            required
          />
          <small>Use negative (-) for expenses</small>
        </div>

        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
}
export default AddTransaction;