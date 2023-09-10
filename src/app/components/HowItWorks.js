const HowItWorks = () => {
  return (
    <>
      {/* Hero catch phrase */}
      <h2 className="text-2xl font-bold text-blue-950 tracking-wide text-center pb-10 pt-6 lg:text-4xl">
        How does it work?
      </h2>
      <div className="container flex flex-col px-6 mx-auto">
        <div class="container flex flex-col items-center p-6 mx-auto md:flex-row bg-beige bg-opacity-50 rounded-lg">
          {/* Text block */}
          <div class="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
            <h2 class="mb-8 text-xs tracking-widest text-gray-700 uppercase">
              material
            </h2>
            <h1 class="mb-8 text-2xl text-gray-700 tracking-wide font-bold md:text-2xl">
              Course based on the Oxford material 5th edition
            </h1>
            <p class="mb-8 text-base leading-relaxed text-left text-blueGray-600 ">
              Deploy your mvp in minutes, not days. WT offers you a a wide
              selection swapable sections for your landing page
            </p>
            <div class="flex flex-col justify-center lg:flex-row">
              <button class="flex items-center px-6 py-2 mt-auto text-beige transition duration-500 ease-in-out transform bg-red-700 rounded-lg hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                Show me
              </button>
              <p class="mt-2 text-sm text-left text-blueGray-600 md:ml-6 md:mt-0">
                It will take you to candy shop. <br class="hidden lg:block" />
                <a
                  href="#"
                  class="inline-flex items-center font-semibold text-blue-600 md:mb-2 lg:mb-0 hover:text-black "
                  title="read more"
                >
                  Read more about it
                </a>
              </p>
            </div>
          </div>
          {/* Image block */}
          <div class="w-full lg:w-1/4 lg:max-w-lg md:w-1/2">
            <img
              class="object-cover object-center rounded-lg "
              alt="hero"
              src="https://dummyimage.com/720x600/F3F4F7/8693ac"
            />
          </div>
        </div>
        <div class="container flex flex-col items-center p-6 mx-auto md:flex-row my-4 bg-orange-200 bg-opacity-50 rounded-lg">
          {/* Text block */}
          <div class="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
            <h2 class="mb-8 text-xs tracking-widest text-gray-700 uppercase">
              Learning
            </h2>
            <h1 class="mb-8 text-2xl text-gray-700 tracking-wide font-bold md:text-2xl">
              Private and group lessons
            </h1>
            <p class="mb-8 text-base leading-relaxed text-left text-blueGray-600 ">
              Deploy your mvp in minutes, not days. WT offers you a a wide
              selection swapable sections for your landing page
            </p>
            <div class="flex flex-col justify-center lg:flex-row">
              <button class="flex items-center px-6 py-2 mt-auto text-beige transition duration-500 ease-in-out transform bg-red-700 rounded-lg hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                Show me
              </button>
              <p class="mt-2 text-sm text-left text-blueGray-600 md:ml-6 md:mt-0">
                It will take you to candy shop. <br class="hidden lg:block" />
                <a
                  href="#"
                  class="inline-flex items-center font-semibold text-blue-600 md:mb-2 lg:mb-0 hover:text-black "
                  title="read more"
                >
                  Read more about it
                </a>
              </p>
            </div>
          </div>
          {/* Image block */}
          <div class="w-full lg:w-1/4 lg:max-w-lg md:w-1/2">
            <img
              class="object-cover object-center rounded-lg "
              alt="hero"
              src="https://dummyimage.com/720x600/F3F4F7/8693ac"
            />
          </div>
        </div>
        <div class="container flex flex-col items-center p-6 mx-auto md:flex-row bg-blue-300 bg-opacity-50 rounded-lg">
          {/* Text block */}
          <div class="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
            <h2 class="mb-8 text-xs tracking-widest text-gray-700 uppercase">
              Learning
            </h2>
            <h1 class="mb-8 text-2xl text-gray-700 tracking-wide font-bold md:text-2xl">
              Course based on the Oxford material 5th edition
            </h1>
            <p class="mb-8 text-base leading-relaxed text-left text-blueGray-600 ">
              Deploy your mvp in minutes, not days. WT offers you a a wide
              selection swapable sections for your landing page
            </p>
            <div class="flex flex-col justify-center lg:flex-row">
              <button class="flex items-center px-6 py-2 mt-auto text-beige transition duration-500 ease-in-out transform bg-red-700 rounded-lg hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                Show me
              </button>
              <p class="mt-2 text-sm text-left text-blueGray-600 md:ml-6 md:mt-0">
                It will take you to candy shop. <br class="hidden lg:block" />
                <a
                  href="#"
                  class="inline-flex items-center font-semibold text-blue-600 md:mb-2 lg:mb-0 hover:text-black "
                  title="read more"
                >
                  Read more about it
                </a>
              </p>
            </div>
          </div>
          {/* Image block */}
          <div class="w-full lg:w-1/4 lg:max-w-lg md:w-1/2">
            <img
              class="object-cover object-center rounded-lg "
              alt="hero"
              src="https://dummyimage.com/720x600/F3F4F7/8693ac"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
