function Transaction({ transaction, removeTransaction }) {
  const formatCurrency = (num) =>
    num.toLocaleString("en-US", { style: "currency", currency: "USD" });

  return (
    <li className={`transaction ${transaction.amount > 0 ? "income" : "expense"}`}>
      <span>{transaction.description}</span>
      <span>
        {formatCurrency(transaction.amount)}
        <button className="delete-btn" onClick={() => removeTransaction(transaction.id)}>x</button>
      </span>
    </li>
  );
}
export default Transaction;