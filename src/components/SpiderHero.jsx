const SpiderHero = () => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center bg-neutral-800 overflow-visible">
      <div className="absolute w-[2px] h-[600px] bg-[#b9bdc2] left-1/2 -ml-[1px] top-[-250px] z-0"></div>

      <img
        src="/images/spidr-logo.png"
        alt="Spider"
        className="w-[6.85rem] z-10 relative"
      />

      <img
        src="/images/spidr-title.png"
        alt="Spidr Title"
        className=" -mt-[0.8rem] w-[6.5rem] z-10 relative"
      />

      <div className="absolute bottom-6 inset-x-0 mx-auto text-center animate-bounce z-10 w-fit">
        <svg
          className="w-6 h-6 text-white mb-1 mx-auto"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
        <p className="text-sm text-white opacity-80">
          Built to crisp. Scroll to discover.
        </p>
      </div>
    </div>
  );
};

export default SpiderHero;
