import Transaction from "./Transaction";

function TransactionList({ transactions, removeTransaction, loading }) {
  return (
    <div className="transaction-container">
      <h2>Transactions</h2>

      <ul id="transaction-list">
        {loading ? (
          <li className="transaction">
            <span>Loading transactions...</span>
            <span>—</span>
          </li>
        ) : (
          [...transactions].reverse().map((t) => (
            <Transaction key={t.id} transaction={t} removeTransaction={removeTransaction} />
          ))
        )}
      </ul>
    </div>
  );
}
export default TransactionList;