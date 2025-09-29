import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/auth/SignUp";
import Login from "./pages/auth/Login";
import { MdArrowRight } from "react-icons/md";
// import Transactions from "./pages/Transaction"
import Pots from "./pages/Pots";
import Budget from "./pages/Budget";
import { UserProvider } from "./context/UserContext";
import MainLayout from "./layouts/MainLayout";

const details = [
  {
    potTitle: "Pots",
    potDescription: "See Details",
    potIcon: <MdArrowRight />,
  },
  {
    transactionTitle: "Transactions",
    transactionDescription: "View All",
    transactionIcon: <MdArrowRight />,
  },
  {
    budgetTitle: "Budgets",
    budgetDescription: "See Details",
    budgetIcon: <MdArrowRight />,
  },
  {
    billTitle: "Recurring Bills",
    billDescription: "See Details",
    billIcon: <MdArrowRight />,
  },
];

function App() {
  return (
    <>
      <UserProvider>
        <div className="flex flex-col-reverse lg:w-[1224px] mx-auto lg:flex-row relative bg-[#F8F4F0]">
          <div className="flex-1">
            <Routes>
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/login" element={<Login />} />

              <Route element={<MainLayout />}>
                <Route path="/" element={<Dashboard detail={details} />} />
                {/* <Route path="/transaction" element={<Transactions />} /> */}
                <Route path="/pots" element={<Pots />} />
                <Route path="/budget" element={<Budget />} />
              </Route>
            </Routes>
          </div>
        </div>
      </UserProvider>
    </>
  );
}

export default App;
