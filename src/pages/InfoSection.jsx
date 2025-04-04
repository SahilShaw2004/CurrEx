const InfoSection = () => (
    <div className="bg-yellow-300 text-black p-6 rounded-4xl flex flex-col justify-between items-center text-lg font-bold">
      <div className="w-full flex justify-between items-center mb-4">
        <div className="text-xl font-bold">CurrEx</div>
        <nav className="flex space-x-6 text-sm">
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Reviews</a>
          <a href="#" className="hover:underline">News</a>
          <a href="#" className="hover:underline">Support</a>
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
  );
  export default InfoSection;
  