import React, { useRef, useState } from "react";
import Bag from "../../assets/Bag.png";

import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import Shoe from "../../assets/Shoe.png";

const Hero = () => {
  return (
    <div className="lg:px-12 space-y-6 mx-4 mt-4">
      <div className="bg-indigo-600 hidden rounded-xl mx-4">
        <div className="mx-auto px-4 py-3 items-center justify-between text-white sm:flex md:px-8">
          <div className="flex gap-x-4">
            <div className="w-10 h-10 flex-none rounded-lg bg-indigo-800 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                />
              </svg>
            </div>
            <p className="py-2 font-medium">Top deals are back again</p>
          </div>
         {/* <a
            href="javascript:void(0)"
            className="inline-block w-full mt-3 py-2 px-3 text-center text-indigo-600 font-medium bg-white duration-150 hover:bg-gray-100 active:bg-gray-200 rounded-lg sm:w-auto sm:mt-0 sm:text-sm"
          >
            Learn more
          </a>*/}
        </div>
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className="bg-blue-300 relative w-full p-8 rounded-lg flex flex-row justify-between items-center">
            <div className="space-y-4">
              <h1 className="text-5xl  font-extrabold w-[70%]">
                The best Deals from across the globe
              </h1>
              <p>Flash Sales</p>
            </div>
            <img src={Bag} className="h-[450px] w-[700px]" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-black relative w-full p-8 rounded-lg flex flex-row justify-between items-center">
            <div className="space-y-4 text-white">
              <h1 className="text-5xl font-extrabold w-[70%] ">
                The best Deals from across the glob
              </h1>
              <p>Flash Sales</p>
            </div>
            <img src={Shoe} className="h-[450px] w-[700px]" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
