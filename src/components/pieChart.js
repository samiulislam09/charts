"use client";

import { ArrowDown, ArrowUp } from "lucide-react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

import { cn } from "@/lib/utils";

export default function SessionsByDeviceType({ data, title }) {
  // Colors defined outside the data array
  const deviceColors = {
    Mobile: "#00AAFF",
    Desktop: "#7B42F6",
    Tablet: "#4A7BF7",
  };

  const totalSessions = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="w-full max-w-md rounded-lg border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-lg font-semibold">{title}</h2>

      <div className="flex items-center justify-between">
        <div className="relative h-64 w-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={deviceColors[entry.name]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          {/* Center text */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="text-3xl font-bold">{totalSessions}</div>
          </div>
        </div>

        {/* Legend */}
        <div className="space-y-3">
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className="h-4 w-4 rounded-sm"
                style={{ backgroundColor: deviceColors[item.name] }}
              />
              <span className="min-w-16 text-sm">{item.name}</span>
              <span className="text-sm font-medium">{item.value}</span>
              {item.positive ? (
                <ArrowUp className="h-3 w-3 text-green-500" />
              ) : (
                <ArrowDown className="h-3 w-3 text-red-500" />
              )}
              <span
                className={cn(
                  "text-sm font-medium",
                  item.positive ? "text-green-500" : "text-red-500"
                )}
              >
                {item.change}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
