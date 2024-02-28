import { createContext, useContext, useState } from "react";

const DataContext = createContext();
function Context({ children }) {
  const [user, setUser] = useState("");
  const product = [
    // {
    //   name: "sport",
    //   amount: 100,
    //   range: 0,
    //   spent: 0,
    //   details: [],
    // },
  ];
  const [data, setData] = useState([]);
  const [AllExpense, setAllExpense] = useState([]);
  return (
    <DataContext.Provider
      value={{ data, AllExpense, setAllExpense, setData, user, setUser }}
    >
      {children}
    </DataContext.Provider>
  );
}

function useData() {
  return useContext(DataContext);
}

export { useData, Context };
