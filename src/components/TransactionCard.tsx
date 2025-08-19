import { Link } from "react-router-dom";
import type { details } from "./type";
import Woman from "../../public/images/woman.jpg";
import Man from "../../public/images/man.jpg";
import Chinese from "../../public/images/chinese.jpg";
import Card from "./Cards";

interface Props {
  detail: details[];
}

const imageStyling = "object-cover w-7 h-7 rounded-full";

const transactionsData = [
  {
    image: (
      <img src={Woman} alt="a smiling profile woman" className={imageStyling} />
    ),
    name: "Emma Richardson",
    amount: "+$75.50",
    date: "19 Aug 2024",
  },
  {
    image: (
      <img
        src={Chinese}
        alt="a smiling profile chinese man"
        className={imageStyling}
      />
    ),
    name: "Savory Bites Bistro",
    amount: "-55.50",
    date: "19 Aug 2024",
  },
  {
    image: (
      <img src={Man} alt="a smiling profile man" className={imageStyling} />
    ),
    name: "Daniel Carter",
    amount: "-$42.30",
    date: "18 Aug 2024",
  },
  {
    image: (
      <img
        src={Chinese}
        alt="a smiling profile chinese man"
        className={imageStyling}
      />
    ),
    name: "Sun park",
    amount: "+$120.00",
    date: "17 Aug 2024",
  },
  {
    image: (
      <img src={Woman} alt="a smiling profile woman" className={imageStyling} />
    ),
    name: "Urban Services Hub",
    amount: "+$65.00",
    date: "17 Aug 2024",
  },
];

const TransactionCard = ({ detail }: Props) => {
  const transactionDetail = detail.filter(
    (d) => d.transactionTitle && d.transactionDescription && d.transactionIcon
  );

  return (
    <>
      <Card size="lg" layout="screen">
        {transactionDetail.map((transaction, index) => (
          <div key={index}>
            <div className="flex justify-between" key={index}>
              <h3 className="font-bold text-xl">{transaction.transactionTitle}</h3>
              <Link
                to="/transaction"
                className="flex items-center justify-end gap-2 text-gray-500"
              >
                <p className="text-[12px]">
                  {transaction.transactionDescription}
                </p>
                <p className="w-3">{transaction.transactionIcon}</p>
              </Link>
            </div>
          </div>
        ))}

        <div>
          {transactionsData.map((data, index) => (
            <div
              key={index}
              className="flex justify-between border border-transparent border-b-gray-200 py-4 nth-last-of-type-[border-none]:"
            >
              <div className="flex items-center gap-3">
                <p>{data.image}</p>
                <p className="text-[12px] font-semibold">{data.name}</p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <p className="text-[12px] font-semibold">{data.amount}</p>
                <p className="text-[10px] text-gray-400">{data.date}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
};

export default TransactionCard;
