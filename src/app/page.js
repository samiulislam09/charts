import HeaderCard from "../components/headerCard";
import TotalSales from "../components/totalSales";
export default function Home() {
  const titleValue = [
    {
      title: "Gross Sales",
      amount: 32400,
      loss: 55,
    },
    {
      title: "Returning Customer Care",
      amount: 32400,
      loss: 50,
    },
    {
      title: "Order Fulfilled",
      amount: 32400,
      profit: 13,
    },
    {
      title: "Orders",
      amount: 32400,
      profit: 13,
    },
  ];
  return (
    <div className="flex mx-auto bg-gray-100">
      <div className="basis-2/12 bg-amber-200 h-screen">
        <p>analytics</p>
      </div>
      <div className="basis-10/12  h-screen flex flex-col p-2 md:p-10 text-gray-600">
        <h2 className="font-bold text-2xl">Overview</h2>
        <div className="flex gap-4 mt-3 flex-col lg:flex-row">
          {titleValue.map((item, index) => {
            return <HeaderCard value={item} key={index} />;
          })}
        </div>
        <TotalSales />
      </div>
    </div>
  );
}
