import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Import navigation styles
import Shirts from "../../assets/Shirts.png";

import Hat from "../../assets/Hat.png";

import Shades from "../../assets/Shades.png";

import Flop from "../../assets/Flop.png";
import Boxers from "../../assets/Boxers.png";

import { FreeMode, Pagination, Navigation } from "swiper/modules"; // Import Navigation

export default function Promotions() {
  return (
    <div className="lg:p-12 p-4 relative">
      <h1 className="font-serif font-extrabold text-2xl pb-4">
        Weekly Promotions
      </h1>
      <Swiper
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          // Adjust Swiper settings based on viewport width
          640: {
            slidesPerView: 1, // 1 slide per view on screens 640px and below
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2, // 2 slides per view on screens between 641px and 768px
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3, // 3 slides per view on screens 769px and above
            spaceBetween: 30,
          },
        }}
        navigation={true} // Add navigation
        modules={[FreeMode, Pagination, Navigation]} // Add Navigation module
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg-black p-6 rounded-lg text-white text-center space-y-2">
            <h1 className="text-2xl">Dope Shirts</h1>
            <p className="font-extralight font-serif">For the trendy ones</p>
            <img src={Shirts} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-blue-300 p-6 rounded-lg text-center space-y-2">
            <h1 className="text-2xl">Dope Shirts</h1>
            <p className="font-extralight font-serif">For the trendy ones</p>
            <img src={Flop} className="object-cover h-[160px] mx-auto" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-red-200 p-6 rounded-lg text-center space-y-2">
          <h1 className="text-2xl">Dope Shirts</h1>
          <p className="font-extralight font-serif">For the trendy ones</p>
          <img src={Hat} className="object-cover h-[160px] mx-auto" />
        </SwiperSlide>
        <SwiperSlide className="bg-cyan-200 p-6 rounded-lg text-center space-y-2">
          <h1 className="text-2xl">Dope Shirts</h1>
          <p className="font-extralight font-serif">For the trendy ones</p>
          <img src={Shades} className="object-cover h-[160px] mx-auto" />
        </SwiperSlide>
        <SwiperSlide className="bg-purple-200 p-6 rounded-lg text-center space-y-2">
          <h1 className="text-2xl">Dope Shirts</h1>
          <p className="font-extralight font-serif">For the trendy ones</p>
          <img src={Boxers} className="object-cover h-[160px] mx-auto" />
        </SwiperSlide>
      </Swiper>

      {/* Custom Navigation Buttons */}
    </div>
  );
}
