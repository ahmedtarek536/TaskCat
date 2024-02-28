import { useState } from "react";
import { useData } from "../pages/Context";
import styles from "./AddExpense.module.css";
function AddExpense() {
  const { setData, data, setAllExpense } = useData();
  const [expense, setExpense] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState(data[0].name);
  function handleAddExpense(e) {
    e.preventDefault();
    setAllExpense((expenses) => [
      ...expenses,
      { name: expense, amount: amount, category: category, date: Date.now() },
    ]);

    setData((data) =>
      data.map((budget) =>
        budget.name == category
          ? {
              ...budget,
              spent: budget.spent + +amount,
              details: [
                ...budget.details,
                {
                  name: expense,
                  amount: amount,
                  category: category,
                  date: Date.now(),
                },
              ],
            }
          : budget
      )
    );
    setExpense("");
    setAmount("");
  }
  return (
    <div className={styles.expense}>
      <h2>Add New Expense</h2>
      <form onSubmit={handleAddExpense}>
        <div className={styles.expenseInputs}>
          <div>
            <label htmlFor="">Expense Name</label>
            <input
              type="text"
              placeholder="e.g., Coffe"
              value={expense}
              onChange={(e) => setExpense(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="">Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="e.g., 3.50"
              required
            />
          </div>
        </div>
        <label htmlFor="">Budget Category</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {data.map((el) => (
            <option key={el.name} value={el.name}>
              {el.name}
            </option>
          ))}
        </select>
        <button>Add Expense</button>
      </form>
    </div>
  );
}

export default AddExpense;
