"use client"; // This is a client component
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  //automac image slide
  const [current, setCurrent] = useState(0);
  const timeout = useRef(null);

  const resetTimeout = () => {
    if (timeout.current) clearTimeout(timeout.current);
  };

  useEffect(() => {
    resetTimeout();
    timeout.current = setTimeout(() => {
      setCurrent((current) => (current === 2 ? 0 : current + 1));
    }, 3000);

    return () => {
      resetTimeout();
    };
  }, [current]);

  const images = [
    "http://res.cloudinary.com/delvoxvyc/image/upload/v1694352338/test_upload/sroeb0tcvy75elog7h8z.jpg",
    "http://res.cloudinary.com/delvoxvyc/image/upload/v1694360377/test_upload/mjnehpkt3twr5kvbkrff.jpg",
    "http://res.cloudinary.com/delvoxvyc/image/upload/v1694360399/test_upload/jxd8gegisp3n4yxmmxz5.jpg",
  ];

  return (
    <div className="container flex flex-col px-6 mx-auto space-y-6 py-8 lg:h-[32rem] lg:py-12 lg:flex-row lg:items-center">
      <div className="w-full lg:w-1/2">
        <div className="lg:max-w-lg">
          {/* Hero catch phrase */}
          <h1 className="text-3xl font-bold text-blue-950 tracking-wide lg:text-5xl">
            Learn English with Rosie
          </h1>
          {/* Convincing paragraph */}
          <div className="mt-8 space-y-5">
            <p className="flex items-center text-gray-700">
              Experienced teacher helping people to learn English in a fun way,
              more than 15 years of teaching
            </p>
          </div>
          {/* bullet list */}
          <div className="mt-8 space-y-5">
            <p className="flex items-center -mx-2 text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-2 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="mx-2">Oxford material</span>
            </p>

            <p className="flex items-center -mx-2 text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-2 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <span className="mx-2">Experienced teacher</span>
            </p>

            <p className="flex items-center -mx-2 text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-2 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <span className="mx-2">Online lectures</span>
            </p>
          </div>
          {/* Get in touch */}
          <div className="flex flex-col lg:flex-row w-full mt-8">
            <button
              type="button"
              className="h-10 px-4 py-2 m-1 text-beige transition-colors duration-200 transform bg-red-700 rounded-md hover:bg-orange-400 focus:outline-none"
            >
              Get in touch
            </button>
            <button
              type="button"
              className="h-10 px-4 py-2 m-1 text-beige transition-colors duration-200 transform bg-red-700 rounded-md hover:bg-orange-400 focus:outline-none"
            >
              Schedule a call
            </button>
          </div>
        </div>
      </div>
      {/* Image block */}
      <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
        <img
          className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl"
          src={images[current]}
          alt="glasses photo"
        />
      </div>
    </div>
  );
};

export default Hero;
