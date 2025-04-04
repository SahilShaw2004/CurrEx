import { useState, useEffect } from "react";

const currencies = [
  { code: "USD", name: "US Dollar", flag: "/assets/us-flag.png" },
  { code: "EUR", name: "Euro", flag: "/assets/eu-flag.png" },
  { code: "GBP", name: "British Pound", flag: "/assets/gb-flag.png" },
  { code: "INR", name: "Indian Rupee", flag: "/assets/in-flag.png" },
];

const API_KEY = "8e1510e4b4f3f4651d3c1cb2";

const CurrencyCard = () => {
  const [fromCurrency, setFromCurrency] = useState(currencies[0]);
  const [toCurrency, setToCurrency] = useState(currencies[1]);
  const [amount, setAmount] = useState();
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [exchangeRate, setExchangeRate] = useState(1);
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${fromCurrency.code}`
        );
        const data = await response.json();
        const rate = data.conversion_rates[toCurrency.code];
        setExchangeRate(rate);
      } catch (error) {
        console.error("Error fetching exchange rate:", error);
        setExchangeRate(1); // Default rate in case of an error
      }
    };

    fetchExchangeRate();
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    setConvertedAmount((amount * exchangeRate).toFixed(2));
  }, [amount, exchangeRate]);

  // 🔄 Swap Function
  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  // 🗓️ Format and Set Current Date
  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-GB").replace(/\//g, "."); // Format as DD.MM.YYYY
    setCurrentDate(formattedDate);
  }, []);

  return (
    <>
      {/* 🗓️ Date Container */}

      {/* From Currency */}
      <div>
      <div className="flex items-center justify-between mt-4">
        <span className="flex items-center space-x-2">
          <img
            src={fromCurrency.flag}
            alt={fromCurrency.code}
            className="w-6 h-6"
          />
          <span>{fromCurrency.name}</span>
        </span>
        <select
          className="border-[.3px] border-yellow-400 text-white bg-black px-2 py-1 rounded-4xl text-sm"
          value={fromCurrency.code}
          onChange={(e) =>
            setFromCurrency(currencies.find((c) => c.code === e.target.value))
          }
        >
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.code}
            </option>
          ))}
        </select>
      </div>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="mt-3 text-xl font-bold bg-gray-800 p-1 pl-2 rounded-4xl w-full text-white"
      />

      {/* 🔄 Swap Button */}
      <div className="flex justify-center my-2">
        <button
          onClick={swapCurrencies}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-yellow-500 text-yellow-500 text-xl hover:bg-yellow-500 hover:text-black transition"
        >
          ⇅
        </button>
      </div>

      {/* To Currency */}
      <div className="flex items-center justify-between">
        <span className="flex items-center space-x-2">
          <img
            src={toCurrency.flag}
            alt={toCurrency.code}
            className="w-6 h-6"
          />
          <span>{toCurrency.name}</span>
        </span>
        <select
          className="border-[.3px] border-yellow-400 text-white bg-black px-2 py-1 rounded-4xl text-sm"
          value={toCurrency.code}
          onChange={(e) =>
            setToCurrency(currencies.find((c) => c.code === e.target.value))
          }
        >
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.code}
            </option>
          ))}
        </select>
      </div>
      <input
        type="number"
        value={convertedAmount}
        readOnly
        className="mt-3 text-xl font-bold bg-gray-800 p-1 pl-2 rounded-4xl w-full text-white"
      />
      <p className="text-gray-400 text-sm">
        1 {fromCurrency.code} = {exchangeRate} {toCurrency.code}
      </p>
      <div className="flex items-center space-x-2 bg-yellow-400 text-black px-1 py-0.5 mt-2 pr-[2px] rounded-full w-fit ml-auto">
        <span className="font-normal text-sm">{currentDate}</span>
        <span className="bg-black text-white p-0.5 rounded-full">📅</span>
      </div>
      </div>
    </>
  );
};

export default CurrencyCard;
