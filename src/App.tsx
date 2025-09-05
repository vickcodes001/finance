import { Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import SignUp from "./pages/auth/SignUp"
import Login from "./pages/auth/Login"
import { MdArrowRight } from "react-icons/md"
import Transactions from "./pages/Transaction"
import Pots from "./pages/Pots"
import Budget from "./pages/Budget"
import { useState } from "react"

const details = [
  {
    potTitle: "Pots",
    potDescription: "See Details",
    potIcon: <MdArrowRight />
  },
  {
    transactionTitle: "Transactions",
    transactionDescription: "View All",
    transactionIcon: <MdArrowRight />
  },
  {
    budgetTitle: "Budgets",
    budgetDescription: "See Details",
    budgetIcon: <MdArrowRight />
  },
  {
    billTitle: "Recurring Bills",
    billDescription: "See Details",
    billIcon: <MdArrowRight />
  },
];

function App() {
  // to display the user's name after sign in
  const [user, setUser] = useState<string | null>(() => {
    try {
      const savedUser = localStorage.getItem("username");
      return savedUser ? JSON.parse(savedUser) : null;
    } catch (error) {
      console.error("Error parsing user data from localStorage:", error);
      return null;
    }
  });
  return (
    <>
        <Routes>
          <Route path="/" element={<Dashboard detail={details} user={user} setUser={setUser} />} />
          <Route path="/transaction" element={<Transactions />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pots" element={<Pots />} />
          <Route path="/budget" element={<Budget />} />
        </Routes>
    </>
  )
}

export default App
