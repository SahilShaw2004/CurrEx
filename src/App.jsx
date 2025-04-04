// Components/BentoGrid.jsx
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
// import image from "../assets/image.png";
// import CurrencyCard from "./CurrencyCard";
import InfoSection from "./pages/InfoSection";
import TravelAssistant from "./pages/TravelAssistant";
import CurrencyFeature from "./pages/CurrencyFeature";
import FinalSection from "./pages/FinalSection";

const BentoGrid = () => {
  return (
    <div
      className="w-full h-auto flex justify-center items-center p-0 sm:pl-56 sm:pr-56"
      style={{
        background: `
          radial-gradient(circle farthest-side at 20% 29%, #ffffff33 50%, #ffffff00 50% 100%),
          radial-gradient(circle farthest-corner at 65% 61%, #ffffff80 50%, #ffffff00 50% 100%),
          radial-gradient(circle farthest-corner at 28% 90%, #ffffff40 50%, #ffffff00 50% 100%),
          linear-gradient(to top right, #ff7b00ff 0%, #ff00bfff 50%, #7b00ffff 100%)
        `,
        backgroundBlendMode: "soft-light",
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-2 w-full h-auto sm:h-screen bg-black rounded-none sm:rounded-4xl p-4">
        <InfoSection />
        <TravelAssistant />
        <CurrencyFeature />
        <FinalSection />
      </div>
    </div>
  );
};

export default BentoGrid;
