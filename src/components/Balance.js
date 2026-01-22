function Balance({ balance, income, expenses }) {
  const formatCurrency = (num) =>
    num.toLocaleString("en-US", { style: "currency", currency: "USD" });

  return (
    <div className="balance-container">
      <h2>Your Balance</h2>
      <h1 id="balance">{formatCurrency(balance)}</h1>

      <div className="summary">
        <div className="income">
          <h3>Income</h3>
          <p id="income-amount">{formatCurrency(income)}</p>
        </div>
        <div className="expenses">
          <h3>Expenses</h3>
          <p id="expense-amount">{formatCurrency(expenses)}</p>
        </div>
      </div>
    </div>
  );
}
export default Balance;