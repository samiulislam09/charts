import Piechart from "@/components/pieChart";
import React from "react";

function page() {
  const data = [
    { name: "Mobile", value: 882, change: 0.4, positive: true },
    { name: "Desktop", value: 51, change: 2, positive: true },
    { name: "Tablet", value: 3, change: 67, positive: true },
  ];
  return (
    <div>
      <Piechart data={data} title="Sessions by device type" />
    </div>
  );
}

export default page;
