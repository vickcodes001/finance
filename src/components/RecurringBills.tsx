import { Link } from "react-router-dom";
import Card from "./Cards";
import type { details } from "./type";

interface Props {
  detail: details[];
}

const RecurringBill = [
  {
    title: "Paid Bills",
    amount: "$190.00",
  },
  {
    title: "Total Upcoming",
    amount: "$194.98",
  },
  {
    title: "Due Soon",
    amount: "$59.98",
  },
];

const RecurringBills = ({ detail }: Props) => {
  const RecurringBillDetail = detail.filter(
    (d) => d.billTitle && d.billDescription && d.billIcon
  );
  return (
    <>
      <Card size="md" layout="screen">
        <div>
          {RecurringBillDetail.map((billDetail, index) => (
            <div key={index}>
              <div className="flex justify-between" key={index}>
                <h3 className="font-bold text-xl">{billDetail.billTitle}</h3>
                <Link
                  to="/bills"
                  className="flex items-center justify-end gap-2 text-gray-500"
                >
                  <p className="text-[12px]">{billDetail.billDescription}</p>
                  <p className="w-3">{billDetail.billIcon}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {RecurringBill.map((bill, index) => (
            <div
              key={index}
              className={`flex justify-between bg-[#f2e8dd] p-2 rounded-md ${
                bill.title === "Paid Bills"
                  ? "border-3 border-transparent border-l-green-700"
                  : bill.title === "Total Upcoming"
                  ? "border-3 border-transparent border-l-green-300"
                  : "border-3 border-transparent border-l-amber-300"
              }`}
            >
              <p className="text-[10px] text-gray-500">{bill.title}</p>
              <p className="font-semibold text-[14px]">{bill.amount}</p>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
};

export default RecurringBills;
