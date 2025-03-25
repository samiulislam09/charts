import SalesBreakdown from "@/components/salesBreakdown";
import React from "react";

function page() {
  const salesData = [
    {
      name: "Gross sales",
      value: 324200.0,
      change: 55,
      isNegative: false,
    },
    {
      name: "Discounts",
      value: -72980.0,
      change: 63,
      isNegative: true,
    },
    {
      name: "Returns",
      value: 0.0,
      change: null,
      isNegative: false,
    },
    {
      name: "Net sales",
      value: 251220.0,
      change: 52,
      isNegative: false,
    },
    {
      name: "Shipping charges",
      value: 16300.4,
      change: 68,
      isNegative: false,
    },
    {
      name: "Return fees",
      value: 0.0,
      change: null,
      isNegative: false,
    },
    {
      name: "Taxes",
      value: 0.0,
      change: null,
      isNegative: false,
    },
    {
      name: "Total sales",
      value: 267520.4,
      change: 53,
      isNegative: false,
    },
  ];
  return (
    <div>
      <SalesBreakdown data={salesData} title="Total sales breakdown" />
    </div>
  );
}

export default page;
