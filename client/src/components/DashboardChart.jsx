import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";

export default function DashboardChart() {
  const [setGraphData, isSetGraphData] = useState([
    {
      name: "January",
      "Total sales": 4000,
      "Total users": 2400,
      amt: 2400,
    },
    {
      name: "February",
      "Total sales": 3000,
      "Total users": 1398,
      amt: 2210,
    },
    {
      name: "March",
      "Total sales": 2000,
      "Total users": 9800,
      amt: 2290,
    },
    {
      name: "April",
      "Total sales": 2780,
      "Total users": 3908,
      amt: 2000,
    },
    {
      name: "May",
      "Total sales": 1890,
      "Total users": 4800,
      amt: 2181,
    },
    {
      name: "June",
      "Total sales": 2390,
      "Total users": 3800,
      amt: 2500,
    },
    {
      name: "July",
      "Total sales": 3490,
      "Total users": 4300,
      amt: 2100,
    },
    {
      name: "August",
      "Total sales": 3490,
      "Total users": 4300,
      amt: 2100,
    },
    {
      name: "September",
      "Total sales": 3490,
      "Total users": 4300,
      amt: 2100,
    },
    {
      name: "October",
      "Total sales": 3490,
      "Total users": 4300,
      amt: 2100,
    },
    {
      name: "November",
      "Total sales": 3490,
      "Total users": 4300,
      amt: 2100,
    },
    {
      name: "December",
      "Total sales": 3490,
      "Total users": 4300,
      amt: 2100,
    },
  ]);
  return (
    <ResponsiveContainer width={"100%"} height={300}>
      <LineChart data={setGraphData} margin={{ top: 20 }} accessibilityLayer>
        <CartesianGrid strokeDasharray="3 3" stroke="none" />
        <XAxis dataKey="name" padding={{ left: 30, right: 30 }} tick={{ fontSize: 12 }} />
        <YAxis tick={{ fontSize: 12 }} />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Total sales"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
          strokeWidth={3}
        ></Line>
        <Line type="monotone" dataKey="Total users" stroke="#82ca9d" strokeWidth={3}></Line>
      </LineChart>
    </ResponsiveContainer>
  );
}
