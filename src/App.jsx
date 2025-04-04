import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import image from "./assets/image.png";
import CurrencyCard from "./Components/CurrencyCard";

const BentoGrid = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center p-0 sm:pl-56 sm:pr-56"
    style={{
    background: `
      radial-gradient(circle farthest-side at 20% 29%, #ffffff33 50%, #ffffff00 50% 100%),
      radial-gradient(circle farthest-corner at 65% 61%, #ffffff80 50%, #ffffff00 50% 100%),
      radial-gradient(circle farthest-corner at 28% 90%, #ffffff40 50%, #ffffff00 50% 100%),
      linear-gradient(to top right, #ff7b00ff 0%, #ff00bfff 50%, #7b00ffff 100%)
    `,
    backgroundBlendMode: 'soft-light',
  }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-2 w-full h-auto sm:h-screen bg-black rounded-none sm:rounded-4xl p-4">
        <div className="bg-yellow-300 text-black p-6 rounded-4xl flex flex-col justify-between items-center text-lg font-bold">
          <div className="w-full flex justify-between items-center mb-4">
            <div className="text-xl font-bold">CurrEx</div>
            <nav className="flex space-x-6 text-sm">
              <a href="#" className="hover:underline">
                About
              </a>
              <a href="#" className="hover:underline">
                Reviews
              </a>
              <a href="#" className="hover:underline">
                News
              </a>
              <a href="#" className="hover:underline">
                Support
              </a>
            </nav>
          </div>
          <div className="text-left">
            <h1 className="text-4xl font-extrabold">
              Find out the exchange rates of the whole world
            </h1>
            <p className="mt-2 text-lg font-light">
              A convenient currency calculator allows you to view, compare and
              search for absolutely any currency
            </p>
            <button className="mt-4 bg-black text-white py-2 px-4 rounded-full text-lg font-semibold">
              Try for free
            </button>
          </div>
        </div>
        <div className="bg-black border-[.3px] border-gray-200 text-white p-8 rounded-4xl flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="max-w-md">
            <h2 className="text-2xl md:text-3xl font-bold">
              Your indispensable assistant during travel
            </h2>
            <p className="text-lg text-gray-300 mt-4">
              Automatic currency detection by geolocation will help you
              calculate finances correctly in any country of the world
            </p>
            <button className="mt-6 px-6 py-3 border border-yellow-500 text-white rounded-full hover:bg-yellow-500 hover:text-black transition">
              Learn more
            </button>
          </div>

          <DotLottieReact
            src="https://lottie.host/61de2e8c-5eea-41eb-990d-065ffc687e0b/QHjGALg0Tc.lottie"
            loop
            autoplay
            className="hidden sm:block w-full h-full"
          />
        </div>

        <div className="text-white gap-2 rounded-4xl flex flex-col md:flex-row sm:flex-row justify-between items-center md:space-y-0">
          {/* Left Column */}
          <div className="w-full sm:w-1/2 border-[.3px] border-gray-200 h-full flex flex-col justify-center bg-transparent p-4 pt-0 rounded-4xl">
            <CurrencyCard />
          </div>

          {/* Right Column */}
          <div className="relative w-full sm:w-1/2 h-full flex justify-center bg-gradient-to-b from-yellow-300 via-green-400 to-cyan-300 pr-4 rounded-4xl min-h-[200px] sm:min-h-[300px] overflow-hidden">
            {/* Text Content */}
            <p className="text-black p-4 text-[24px] font-bold">
              Convenient currency search: enter a couple of characters and the
              program will already tell you the currency.
            </p>

            {/* Image (Absolutely Positioned) */}
            <img
              src={image}
              alt="Currency Icon"
              className="absolute -bottom-6.5 -right-1 sm:bottom-0 sm:-right-2 w-32 h-32"
            />
          </div>
        </div>

        <div className="bg-white w-full border-[.6px] border-gray-800 text-white p-6 rounded-4xl flex justify-center items-center text-lg font-bold relative min-h-[200px] sm:min-h-[300px]">
          <p className="text-black text-2xl self-start absolute top-2 left-4">See the exchange rate in convenient way.</p>
          <div className="text-black justify-center text-2xl">
            Works In Progress.
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="w-full h-screen">
      <BentoGrid />
    </div>
  );
};

export default App;
