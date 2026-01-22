import { formatCurrency } from "../utils/format";

function Balance({ balance, income, expenses }) {
  return (
    <div className="balance-container">
      <h2>Your Balance</h2>
      <h1 id="balance" aria-live="polite">{formatCurrency(balance)}</h1>

      <div className="summary">
        <div className="income">
          <h3>Income</h3>
          <p id="income-amount" aria-live="polite">{formatCurrency(income)}</p>
        </div>
        <div className="expenses">
          <h3>Expenses</h3>
          <p id="expense-amount" aria-live="polite">{formatCurrency(expenses)}</p>
        </div>
      </div>
    </div>
  );
}
export default Balance;