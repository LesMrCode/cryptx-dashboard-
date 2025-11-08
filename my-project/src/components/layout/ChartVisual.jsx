import React from 'react';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const btcData = [
  { date: "Jan", price: 245 },
  { date: "Feb", price: 278 },
  { date: "Mar", price: 230 },
  { date: "Apr", price: 340 },
  { date: "May", price: 310 },
  { date: "Jun", price: 295 },
  { date: "Jul", price: 325 },
  { date: "Aug", price: 360 },
  { date: "Sep", price: 315 },
  { date: "Oct", price: 375 },
  { date: "Nov", price: 355 },
]

function ChartVisual() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">BTC Price Chart</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Last 11 months</span>
        </div>
      </div>

      {/* ensure the container can shrink in flex layouts and provide an explicit pixel height for Recharts */}
      <div className="w-full h-[300px] min-w-0">
        {/* give ResponsiveContainer an explicit height (number) so it can compute sizes reliably */}
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={btcData} margin={{ top: 10, right: 10, bottom: 0, left: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
            <XAxis
              dataKey="date"
              stroke="#94a3b8"
              tick={{ fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              stroke="#94a3b8"
              tick={{ fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e293b",
                border: "none",
                borderRadius: "8px",
                color: "#fff",
                fontSize: "12px",
                padding: "8px 12px",
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)"
              }}
              cursor={{ stroke: "#3b82f6", strokeWidth: 1 }}
              formatter={(value) => [`$${value}`, "Price"]}
            />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#3b82f6"
              strokeWidth={2.5}
              dot={false}
              activeDot={{ r: 6, fill: "#3b82f6", stroke: "#fff", strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default ChartVisual;