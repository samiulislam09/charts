"use client";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { useEffect, useState } from "react";

const chartConfig = {
  now: {
    label: "Now",
    color: "#e76e50",
  },
  old: {
    label: "Previous",
    color: "#ddd",
  },
};

export function ActivityGraph({ analyticsData }) {
  const firstEntry = analyticsData[0];
  const lastEntry = analyticsData[analyticsData.length - 1];

  const firstPrevEntry = firstEntry?.previous?.sessions?.fullDate;
  const lastPrevEntry = lastEntry?.previous?.sessions?.fullDate;

  const [data, setData] = useState([]);

  useEffect(() => {
    if (analyticsData) setData(analyticsData);
  }, [analyticsData]);

  if (!data.length) return <p>Loading...</p>;
  return (
    <div className="max-h-[400px]">
      <Card>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <AreaChart
              accessibilityLayer
              data={analyticsData.map((x) => ({
                date: x.displayDate,
                now: x.current.sessions.value,
                old: x.previous.sessions.value,
                ...x,
              }))}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`}
              />
              <ChartTooltip
                cursor={{ stroke: "gray", strokeWidth: 1 }}
                content={({ active, payload }) => {
                  if (!active || !payload || payload.length === 0) return null;
                  const data = payload[0]?.payload;
                  const currentSessions = data?.current?.sessions?.value || 0;
                  const previousSessions = data?.previous?.sessions?.value || 0;
                  const percentageChange =
                    previousSessions > 0
                      ? ((currentSessions - previousSessions) /
                          previousSessions) *
                        100
                      : 0;
                  return (
                    <div className="p-2 bg-gray-900 text-white text-xs rounded-md shadow-md">
                      <p className="font-semibold">Sessions</p>
                      <div className="flex gap-2">
                        <div>
                          <div className="flex gap-2 justify-between">
                            <div className="flex">
                              <span className="h-1 w-4 bg-red-600 my-auto m-1"></span>
                              <p>{data?.displayDate}</p>
                            </div>
                            <p>{data?.current?.sessions?.value}</p>
                          </div>
                          <div className="flex gap-2 justify-between">
                            <div className="flex">
                              <span className="h-1 w-4 bg-blue-600 my-auto m-1"></span>
                              <p>{data?.previous?.sessions?.fullDate}</p>
                            </div>
                            <p>{data?.previous?.sessions?.value}</p>
                          </div>
                        </div>
                        <div>
                          <span
                            className={
                              percentageChange >= 0
                                ? "text-green-400"
                                : "text-red-400"
                            }
                          >
                            {percentageChange.toFixed(2)}%
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                }}
              />
              <Area
                dataKey="now"
                type="natural"
                fill="white"
                fillOpacity={0.4}
                stroke="blue"
                stackId="a"
              />
              <Area
                dataKey="old"
                type="natural"
                fill="white"
                fillOpacity={0.4}
                stroke="red"
                stackId="a"
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
        <CardFooter>
          <div className="flex w-full items-center justify-center gap-6 text-sm text-gray-500">
            {/* Current period */}
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-6 bg-red-600 rounded-full"></span>
              <span>
                {firstEntry.displayDate} to {lastEntry.displayDate}
              </span>
            </div>

            {/* Previous period */}
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-6 bg-blue-600 rounded-full"></span>
              <span>
                {firstPrevEntry} to {lastPrevEntry}
              </span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
