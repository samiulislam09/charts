"use client";
import React from "react";
import { ActivityGraph } from "../../components/activityGraph";

function SingleChart() {
  const data = [
    {
      displayDate: "2024-03-01",
      year: "2024",
      current: { sessions: { value: 1500, fullDate: "2024-03-01" } },
      previous: { sessions: { value: 2500, fullDate: "2024-02-29" } },
    },
    {
      displayDate: "2024-03-02",
      year: "2024",
      current: { sessions: { value: 1587, fullDate: "2024-03-02" } },
      previous: { sessions: { value: 6584, fullDate: "2024-03-01" } },
    },
    {
      displayDate: "2024-03-03",
      year: "2024",
      current: { sessions: { value: 7594, fullDate: "2024-03-03" } },
      previous: { sessions: { value: 3159, fullDate: "2024-03-02" } },
    },
    {
      displayDate: "2024-03-04",
      year: "2024",
      current: { sessions: { value: 4125, fullDate: "2024-03-04" } },
      previous: { sessions: { value: 3301, fullDate: "2024-03-03" } },
    },
    {
      displayDate: "2024-03-05",
      year: "2024",
      current: { sessions: { value: 4250, fullDate: "2024-03-05" } },
      previous: { sessions: { value: 3302, fullDate: "2024-03-04" } },
    },
    {
      displayDate: "2024-03-06",
      year: "2024",
      current: { sessions: { value: 4875, fullDate: "2024-03-06" } },
      previous: { sessions: { value: 3875, fullDate: "2024-03-05" } },
    },
    {
      displayDate: "2024-03-07",
      year: "2024",
      current: { sessions: { value: 5220, fullDate: "2024-03-07" } },
      previous: { sessions: { value: 4710, fullDate: "2024-03-06" } },
    },
    {
      displayDate: "2024-03-08",
      year: "2024",
      current: { sessions: { value: 5400, fullDate: "2024-03-08" } },
      previous: { sessions: { value: 5120, fullDate: "2024-03-07" } },
    },
    {
      displayDate: "2024-03-09",
      year: "2024",
      current: { sessions: { value: 6100, fullDate: "2024-03-09" } },
      previous: { sessions: { value: 5600, fullDate: "2024-03-08" } },
    },
    {
      displayDate: "2024-03-10",
      year: "2024",
      current: { sessions: { value: 6500, fullDate: "2024-03-10" } },
      previous: { sessions: { value: 5900, fullDate: "2024-03-09" } },
    },
    {
      displayDate: "2024-03-11",
      year: "2024",
      current: { sessions: { value: 7100, fullDate: "2024-03-11" } },
      previous: { sessions: { value: 6200, fullDate: "2024-03-10" } },
    },
    {
      displayDate: "2024-03-12",
      year: "2024",
      current: { sessions: { value: 7400, fullDate: "2024-03-12" } },
      previous: { sessions: { value: 7000, fullDate: "2024-03-11" } },
    },
    {
      displayDate: "2024-03-13",
      year: "2024",
      current: { sessions: { value: 8050, fullDate: "2024-03-13" } },
      previous: { sessions: { value: 7400, fullDate: "2024-03-12" } },
    },
    {
      displayDate: "2024-03-14",
      year: "2024",
      current: { sessions: { value: 8500, fullDate: "2024-03-14" } },
      previous: { sessions: { value: 7900, fullDate: "2024-03-13" } },
    },
    {
      displayDate: "2024-03-15",
      year: "2024",
      current: { sessions: { value: 9000, fullDate: "2024-03-15" } },
      previous: { sessions: { value: 8400, fullDate: "2024-03-14" } },
    },
    {
      displayDate: "2024-03-16",
      year: "2024",
      current: { sessions: { value: 9650, fullDate: "2024-03-16" } },
      previous: { sessions: { value: 9000, fullDate: "2024-03-15" } },
    },
    {
      displayDate: "2024-03-17",
      year: "2024",
      current: { sessions: { value: 1010, fullDate: "2024-03-17" } },
      previous: { sessions: { value: 9500, fullDate: "2024-03-16" } },
    },
    {
      displayDate: "2024-03-18",
      year: "2024",
      current: { sessions: { value: 10700, fullDate: "2024-03-18" } },
      previous: { sessions: { value: 10200, fullDate: "2024-03-17" } },
    },
    {
      displayDate: "2024-03-19",
      year: "2024",
      current: { sessions: { value: 1130, fullDate: "2024-03-19" } },
      previous: { sessions: { value: 10700, fullDate: "2024-03-18" } },
    },
    {
      displayDate: "2024-03-20",
      year: "2024",
      current: { sessions: { value: 1190, fullDate: "2024-03-20" } },
      previous: { sessions: { value: 1130, fullDate: "2024-03-19" } },
    },
  ];
  return (
    <div className="max-h-14">
      <ActivityGraph analyticsData={data} />
    </div>
  );
}

export default SingleChart;
