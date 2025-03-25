import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SalesBreakdown({ data, title }) {
  // Format currency
  const formatCurrency = (value) => {
    const absValue = Math.abs(value);
    const formatted = new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(absValue);

    return value < 0 ? `-TAKA ${formatted}` : `TAKA ${formatted}`;
  };

  return (
    <div className="w-full max-w-2xl rounded-lg border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-lg font-semibold border-b border-dotted border-gray-400 inline-block">
        {title}
      </h2>

      <div className="space-y-1 text-gray-600">
        {data.map((item, index) => (
          <div
            key={index}
            className={cn(
              "flex items-center justify-between rounded-md px-4 py-2 bg-gray-50",
              item.name === "Total sales" ? "font-medium" : ""
            )}
          >
            <div className="text-blue-500">{item.name}</div>
            <div className="flex items-center gap-2">
              <div className="text-right ">{formatCurrency(item.value)}</div>
              {item.change !== null ? (
                <div className="flex min-w-14 items-center justify-end text-green-500">
                  <ArrowUp className="mr-0.5 h-3 w-3" />
                  <span>{item.change}%</span>
                </div>
              ) : (
                <div className="min-w-14 text-right text-gray-500">—</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
