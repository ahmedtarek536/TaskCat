import CreateBudget from "../components/CreateBudget";
import Header from "../components/Header";
import styles from "./User.module.css";
import { useData } from "./Context";
import Footer from "../components/Footer";
import AddExpense from "../components/AddExpense";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
function User() {
  const { data, AllExpense } = useData();
  const { user } = useParams();
  return (
    <>
      <Header />
      <div className={styles.user}>
        <h4>
          Welcome back, <span>{user}</span>
        </h4>
        <div className={styles.addbudgets}>
          <CreateBudget />
          {data.length > 0 && <AddExpense />}
        </div>
        {data.length > 0 && <h4>Existing Budgets</h4>}
        <div className={styles.budgets} key={Date.now()}>
          {data.map((budget) => (
            <Budget budget={budget} key={Date.now()} />
          ))}
        </div>
      </div>
      {AllExpense.length > 0 && <Table key={Date.now()} />}
      <Footer />
    </>
  );
}

function Budget({ budget }) {
  const remain = budget.amount - budget.spent;
  // const range = budget.spent > budget.amount ? 100 : 100 - remain;
  return (
    <div className={styles.budget}>
      <div className={styles.info}>
        <h2>{budget.name}</h2>
        <h3>${budget.amount.toFixed(2)} Budgeted</h3>
      </div>
      <div className={styles.rate}>
        <span
          key={Date.now()}
          style={{ width: `${(budget.spent * 100) / budget.amount}%` }}
        ></span>
      </div>
      <div className={styles.remain}>
        <div>${budget.spent.toFixed(2)} spents</div>
        <div>${remain.toFixed(2)} remain</div>
      </div>
      <button>View Details</button>
    </div>
  );
}

function Table() {
  const { data, AllExpense } = useData();

  console.log(data);

  return (
    <div className="table">
      <h4>Recent Expenses</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Budget</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {AllExpense.map((expense, index) => (
            <tr key={index}>
              <td>{expense.name}</td>
              <td>{expense.amount}</td>
              <td>28/1/2024</td>
              <td>{expense.category}</td>
              <td>
                <FontAwesomeIcon icon={faTrash} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// function TableBudget(budget) {
//   if (budget.details.length < 1) return;
//   return (
//     <>
//       {budget.details.map((expense) => (
//         <tr key={expense.name}>
//           <td>{expense.name}</td>
//           <td>{expense.amount}</td>
//           <td>28/1/2024</td> {/* Adjust this to reflect the actual date */}
//           <td>{expense.category}</td>
//           <td>x</td>
//         </tr>
//       ))}
//     </>
//   );
// }

export default User;
