import CurrencyCard from "../Components/CurrencyCard";
import image from "../assets/image.png";

const CurrencyFeature = () => (
  <div className="text-white gap-2 rounded-4xl flex flex-col md:flex-row sm:flex-row justify-between items-center md:space-y-0">
    <div className="w-full sm:w-1/2 border-[.3px] border-gray-200 h-full flex flex-col justify-center bg-transparent p-4 pt-0 rounded-4xl">
      <CurrencyCard />
    </div>
    <div className="relative w-full sm:w-1/2 h-full flex justify-center bg-gradient-to-b from-yellow-300 via-green-400 to-cyan-300 pr-4 rounded-4xl min-h-[200px] sm:min-h-[300px] overflow-hidden">
      <p className="text-black p-4 text-[24px] font-bold">
        Convenient currency search: enter a couple of characters and the program
        will already tell you the currency.
      </p>
      <img
        src={image}
        alt="Currency Icon"
        className="absolute -bottom-6.5 -right-1 sm:bottom-0 sm:-right-2 w-32 h-32"
      />
    </div>
  </div>
);
export default CurrencyFeature;
