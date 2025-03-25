"use client";
import { ArrowDown, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export default function BarChartHorizontal() {
  const data = [
    {
      location: "Dhaka",
      current: 28,
      previous: 19,
      change: 133,
      positive: false,
    },
    {
      location: "Chittagong",
      current: 46,
      previous: 58,
      change: 28,
      positive: true,
    },
    {
      location: "Rajshahi",
      current: 61,
      previous: 103,
      change: 18,
      positive: true,
    },
    {
      location: "Gazipur",
      current: 89,
      previous: 132,
      change: 4,
      positive: true,
    },
  ];
  const maxValue = Math.max(
    ...data.map((d) => Math.max(d.current, d.previous))
  );

  return (
    <div className="w-full max-w-3xl rounded-lg border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-lg font-semibold">Sessions by location</h2>
      <div className="space-y-8">
        {data.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="text-sm text-muted-foreground">{item.location}</div>

            {/* Current period row */}
            <div className="flex items-center text-gray-500">
              <div className="relative flex-1">
                <div
                  className="h-8 rounded bg-blue-400"
                  style={{ width: `${(item.current / maxValue) * 100}%` }}
                />
              </div>
              <div className="flex items-center gap-1 pl-2 text-sm">
                <span className="font-medium">{item.current}</span>
                {item.positive ? (
                  <ArrowUp className="h-4 w-4 text-green-500" />
                ) : (
                  <ArrowDown className="h-4 w-4 text-red-500" />
                )}
                <span
                  className={cn(
                    "font-medium",
                    item.positive ? "text-green-500" : "text-red-500"
                  )}
                >
                  {item.change}%
                </span>
              </div>
            </div>

            {/* Previous period row */}
            <div className="flex items-center text-gray-500">
              <div className="relative flex-1">
                <div
                  className="h-8 rounded bg-blue-200"
                  style={{ width: `${(item.previous / maxValue) * 100}%` }}
                />
              </div>
              <div className="pl-2 text-sm">{item.previous}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
