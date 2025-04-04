import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

// Function to fetch exchange rates
const fetchExchangeRates = async (setData, selectedRange) => {
  try {
    const apiKey = "YOUR_API_KEY"; // Replace with your ExchangeRate-API key
    const baseUrl = "https://v6.exchangerate-api.com/v6";
    const baseCurrency = "USD";
    const targetCurrency = "INR";

    const endDate = new Date();
    let startDate = new Date();
    switch (selectedRange) {
      case "week":
        startDate.setDate(endDate.getDate() - 7);
        break;
      case "month":
        startDate.setMonth(endDate.getMonth() - 1);
        break;
      case "year":
        startDate.setFullYear(endDate.getFullYear() - 1);
        break;
      case "fiveYears":
        startDate.setFullYear(endDate.getFullYear() - 5);
        break;
      default:
        startDate.setDate(endDate.getDate() - 1);
    }

    const formatDate = (date) => date.toISOString().split("T")[0];
    const start = formatDate(startDate);
    const end = formatDate(endDate);

    // Note: This is a placeholder. Replace with actual API that supports historical ranges
    const response = await axios.get(
      `${baseUrl}/${apiKey}/history/${baseCurrency}/${targetCurrency}`
    );

    const result = response.data;
    if (!result || !result.conversion_rates) return;

    const newData = Object.entries(result.conversion_rates).map(
      ([date, rate]) => ({
        date,
        rate,
      })
    );

    setData(newData);
  } catch (error) {
    console.error("Error fetching exchange rates:", error);
  }
};

export default function RealTimeStrengthMeter() {
  const [selectedRange, setSelectedRange] = useState("day");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchExchangeRates(setData, selectedRange);

    const interval = setInterval(
      () => fetchExchangeRates(setData, selectedRange),
      10000
    );

    return () => clearInterval(interval);
  }, [selectedRange]);

  return (
    <div className="bg-white w-full border border-gray-300 p-6 rounded-2xl flex flex-col items-center text-lg font-bold shadow-md">
      <h2 className="text-black text-xl text-center font-bold mb-2">
        Real-Time USD to INR Exchange Rate
      </h2>

      <div className="flex space-x-2 my-2">
        {["day", "week", "month", "year", "fiveYears"].map((range) => (
          <button
            key={range}
            onClick={() => setSelectedRange(range)}
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              selectedRange === range
                ? "bg-black text-white"
                : "border border-gray-500 text-gray-700"
            }`}
          >
            {range === "day"
              ? "1 Day"
              : range === "week"
              ? "1 Week"
              : range === "month"
              ? "1 Month"
              : range === "year"
              ? "1 Year"
              : "5 Years"}
          </button>
        ))}
      </div>

      <div className="w-full h-60">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} strokeOpacity={0.2} />
            <XAxis dataKey="date" tick={{ fontSize: 12 }} />
            <YAxis domain={['auto', 'auto']} />
            <Tooltip />
            <defs>
              <linearGradient id="colorRate" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#50C878" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#50C878" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              type="step"
              dataKey="rate"
              stroke="#50C878"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorRate)"
              dot={{ stroke: "#50C878", strokeWidth: 2, r: 3 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-between w-full mt-2 items-center">
        <span className="text-gray-800 font-bold text-md">USD/INR</span>
        <span className="bg-green-400 text-black px-3 py-1 rounded-full text-md font-bold">
          {data.length > 0 ? data[data.length - 1].rate.toFixed(2) : "Fetching..."}
        </span>
        <span className="text-gray-600 text-md">
          {data.length > 1 ? data[Math.floor(data.length / 2)].rate.toFixed(2) : "Loading..."}
        </span>
        <span className="text-red-500 text-md">
          {data.length > 0 ? data[0].rate.toFixed(2) : "Waiting..."}
        </span>
      </div>
    </div>
  );
}