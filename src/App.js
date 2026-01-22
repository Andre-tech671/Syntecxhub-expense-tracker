import React, { useState, useEffect, useMemo, useCallback } from "react";
import Balance from "./components/Balance";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load from localStorage first
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("transactions")) || [];
    if (saved.length > 0) {
      setTransactions(saved);
      setLoading(false);
    } else {
      // Fetch from mock API if no local data
      (async () => {
        try {
          const res = await fetch("/transactions.json");
          const seed = await res.json();
          setTransactions(seed);
        } catch {
          setTransactions([]); // fallback
        } finally {
          setLoading(false);
        }
      })();
    }
  }, []);

  // Persist to localStorage whenever transactions change
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  // useCallback for stable handlers
  const addTransaction = useCallback((transaction) => {
    setTransactions((prev) => [...prev, { id: Date.now(), ...transaction }]);
  }, []);

  const removeTransaction = useCallback((id) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  }, []);

  // useMemo for derived values
  const balance = useMemo(
    () => transactions.reduce((acc, t) => acc + t.amount, 0),
    [transactions]
  );
  const income = useMemo(
    () => transactions.filter((t) => t.amount > 0).reduce((acc, t) => acc + t.amount, 0),
    [transactions]
  );
  const expenses = useMemo(
    () => transactions.filter((t) => t.amount < 0).reduce((acc, t) => acc + t.amount, 0),
    [transactions]
  );

  return (
    <div className="container">
      <h1>Expense Tracker</h1>

      <Balance balance={balance} income={income} expenses={expenses} />

      <div className="main-content">
        <TransactionList
          transactions={transactions}
          removeTransaction={removeTransaction}
          loading={loading}
        />
        <AddTransaction addTransaction={addTransaction} />
      </div>
    </div>
  );
}

export default App;