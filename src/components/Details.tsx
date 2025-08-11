import { MdArrowRight } from "react-icons/md";
// import CardParent from "./BudgetsCard";

const details = [
  {
    potTitle: "Pots",
    potDescription: "See Details",
    potIcon: <MdArrowRight />,
  },
  {
    transactionTitle: "Transactions",
    transactionDescription: "See Details",
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

const Details = () => {
  return (
    <>
      <div>
        {details.map((detail) => (
          <p>{detail.potDescription}</p>
        ))}
      </div>
    </>
  );
};

export default Details;
