import { Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import SignUp from "./pages/auth/SignUp"
import Login from "./pages/auth/Login"
import { MdArrowRight } from "react-icons/md"
import Transactions from "./pages/Transaction"
import Pots from "./pages/Pots"

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
  return (
    <>
        <Routes>
          <Route path="/" element={<Dashboard detail={details} />} />
          <Route path="/transaction" element={<Transactions />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pots" element={<Pots />} />
        </Routes>
    </>
  )
}

export default App
