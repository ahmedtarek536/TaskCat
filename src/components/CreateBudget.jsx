import { useState } from "react";
import { useData } from "../pages/Context";
import styles from "./CreateBudget.module.css";
function CreateBudget() {
  const { setData } = useData();
  const [budgetInput, setBudgetInput] = useState("");
  const [amountInput, setAmountInput] = useState("");
  function handleAddBudget(e) {
    const newBudget = {
      name: budgetInput,
      amount: +amountInput,
      spent: 0,
      remain: 0,
      details: [],
    };
    e.preventDefault();
    setData((data) => [...data, newBudget]);
    setBudgetInput("");
    setAmountInput("");
  }
  return (
    <div className={styles.budget}>
      <h2>Create Budget</h2>
      <form onSubmit={handleAddBudget}>
        <label htmlFor="">Budget Name</label>
        <input
          type="text"
          placeholder="e.g., Groceries"
          value={budgetInput}
          onChange={(e) => setBudgetInput(e.target.value)}
          required
        />
        <label htmlFor="">Amount</label>
        <input
          type="number"
          value={amountInput}
          onChange={(e) => setAmountInput(e.target.value)}
          placeholder="e.g., 3.50"
          required
        />
        <button>Create Budget</button>
      </form>
    </div>
  );
}

export default CreateBudget;
