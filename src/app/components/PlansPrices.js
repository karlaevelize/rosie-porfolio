const PlansPrices = () => {
  return (
    <>
      <h2 className="text-2xl font-bold text-blue-950 tracking-wide text-center py-10 lg:text-4xl">
        Plans & Prices
      </h2>
      <div className="container flex flex-col items-center lg:flex-row px-6 mx-auto">
        <div class="container flex flex-col items-center py-16 px-6 bg-beige bg-opacity-50 md:flex-row">
          {/* Text block */}
          <div class="flex flex-col mb-16 lg:flex-grow md:mb-0">
            <h1 class="text-2xl text-gray-700 tracking-wide font-bold md:text-2xl">
              Plan 1
            </h1>
            <p class="mb-8 text-base leading-relaxed text-left text-blueGray-600 ">
              Deploy your mvp in minutes, not days. WT offers you a a wide
              selection swapable sections for your landing page
            </p>
            <div class="flex flex-col justify-center lg:flex-row">
              <button class="flex items-center px-6 py-2 mt-auto text-beige transition duration-500 ease-in-out transform bg-red-700 rounded-lg hover:bg-orange-600 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                Show me
              </button>
            </div>
          </div>
        </div>
        <div class="container flex flex-col items-center py-16 px-6 mx-4 my-4 bg-orange-200 bg-opacity-50 md:flex-row">
          {/* Text block */}
          <div class="flex flex-col mb-16 lg:flex-grow md:mb-0">
            <h1 class="text-2xl text-gray-700 tracking-wide font-bold md:text-2xl">
              Plan 1
            </h1>
            <p class="mb-8 text-base leading-relaxed text-left text-blueGray-600 ">
              Deploy your mvp in minutes, not days. WT offers you a a wide
              selection swapable sections for your landing page
            </p>
            <div class="flex flex-col justify-center lg:flex-row">
              <button class="flex items-center px-6 py-2 mt-auto text-beige transition duration-500 ease-in-out transform bg-red-700 rounded-lg hover:bg-orange-600 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                Show me
              </button>
            </div>
          </div>
        </div>
        <div class="container flex flex-col items-center py-16 px-6 bg-blue-300 bg-opacity-50 md:flex-row">
          {/* Text block */}
          <div class="flex flex-col mb-16 lg:flex-grow md:mb-0">
            <h1 class="text-2xl text-gray-700 tracking-wide font-bold md:text-2xl">
              Plan 1
            </h1>
            <p class="mb-8 text-base leading-relaxed text-left text-blueGray-600 ">
              Deploy your mvp in minutes, not days. WT offers you a a wide
              selection swapable sections for your landing page
            </p>
            <div class="flex flex-col justify-center lg:flex-row">
              <button class="flex items-center px-6 py-2 mt-auto text-beige transition duration-500 ease-in-out transform bg-red-700 rounded-lg hover:bg-orange-600 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                Show me
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlansPrices;
