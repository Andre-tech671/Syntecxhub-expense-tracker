import { formatCurrency } from "../utils/format";

function Transaction({ transaction, removeTransaction }) {
  return (
    <li className={`transaction ${transaction.type || (transaction.amount > 0 ? "income" : "expense")}`}>
      <span>{transaction.description}</span>
      <span>
        {formatCurrency(transaction.amount)}
        <button className="delete-btn" onClick={() => removeTransaction(transaction.id)}>x</button>
      </span>
    </li>
  );
}
export default Transaction;