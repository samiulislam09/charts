import React from "react";
import { LuArrowDownRight, LuArrowUpRight } from "react-icons/lu";

function HeaderCard({ value }) {
  const { title, amount, loss = 0, profit = 0 } = value; // Default 0 if no profit or loss provided

  return (
    <div className="flex-1 bg-white p-4 rounded-2xl">
      <p className="font-semibold underline decoration-dotted">{title}</p>
      <div className="flex gap-2 font-semibold">
        BDT {amount}
        <span className="flex justify-center items-center">
          {profit > 0 ? (
            <span className="text-green-500 flex justify-center items-center">
              <LuArrowUpRight /> {profit}%
            </span>
          ) : loss > 0 ? (
            <span className="flex justify-center items-center text-red-500">
              <LuArrowDownRight /> {loss}%
            </span>
          ) : null}
        </span>
      </div>
    </div>
  );
}

export default HeaderCard;
