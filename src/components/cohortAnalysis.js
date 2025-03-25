"use client";

import { useMemo } from "react";
import { cn } from "@/lib/utils";

export default function CohortAnalysis({ data, title }) {
  // Generate months for the date range using useMemo to avoid hydration mismatches
  const cohortMonths = useMemo(() => {
    const months = [];
    const startDate = new Date(2024, 2); // March 2024

    for (let i = 0; i < 12; i++) {
      const date = new Date(startDate);
      date.setMonth(startDate.getMonth() - i);
      months.unshift(date);
    }

    return months;
  }, []);

  // Function to get color based on value
  const getColor = (value) => {
    if (value === 0) return "bg-blue-50/20";
    if (value < 0.2) return "bg-blue-100/40";
    if (value < 0.4) return "bg-blue-200";
    if (value < 0.6) return "bg-blue-300";
    if (value < 0.8) return "bg-blue-400";
    return "bg-blue-600";
  };

  // Format date as Month YYYY
  const formatMonth = (date) => {
    return date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="w-full rounded-lg border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-lg font-semibold">{title}</h2>

      <div className="overflow-x-auto">
        <div className="min-w-max">
          {/* Month headers */}
          <div className="mb-2 grid grid-cols-13 gap-1">
            <div className="col-span-1"></div>
            {Array.from({ length: 12 }, (_, i) => (
              <div
                key={i}
                className="text-center text-xs text-muted-foreground"
              >
                {i}
              </div>
            ))}
          </div>

          {/* Cohort rows */}
          <div className="space-y-1">
            {data.map((row, rowIndex) => (
              <div key={rowIndex} className="grid grid-cols-13 gap-1">
                <div className="col-span-1 text-xs text-muted-foreground">
                  {rowIndex === 0 ? formatMonth(cohortMonths[0]) : ""}
                </div>
                {row.map((value, colIndex) => (
                  <div
                    key={colIndex}
                    className={cn("h-6 w-full rounded", getColor(value))}
                  ></div>
                ))}
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-4 flex justify-between text-xs text-muted-foreground">
            <div>Last 12 months</div>
            <div>
              {formatMonth(cohortMonths[0])} – {formatMonth(cohortMonths[11])}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
