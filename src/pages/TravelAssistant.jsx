import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const TravelAssistant = () => (
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
);
export default TravelAssistant;
