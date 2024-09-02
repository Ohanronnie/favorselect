import React from "react";
import { CiHeart } from "react-icons/ci";
import { IoMdFlame } from "react-icons/io";
import { MdOutlineStarPurple500 } from "react-icons/md";
import Suit from "../../assets/Suit.png";

const Popular = () => {
  const posts = [
    {
      Price: "$42",
      desc: "Plus Size 2022 Women Linen Pants Summer Elastic Wide Leg Pants",
      img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

      href: "javascript:void(0)",
      review: "4.5",
    },
    {
      Price: "$42",
      desc: "Plus Size 2022 Women Linen Pants Summer Elastic Wide Leg Pants",
      img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

      href: "javascript:void(0)",
      review: "4.5",
    },
    {
      Price: "$42",
      desc: "Plus Size 2022 Women Linen Pants Summer Elastic Wide Leg Pants",
      img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

      href: "javascript:void(0)",
      review: "4.5",
    },
    {
      Price: "$42",
      desc: "Plus Size 2022 Women Linen Pants Summer Elastic Wide Leg Pants",
      img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

      href: "javascript:void(0)",
      review: "4.5",
    },
    {
      Price: "$42",
      desc: "Plus Size 2022 Women Linen Pants Summer Elastic Wide Leg Pants",
      img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

      href: "javascript:void(0)",
      review: "4.5",
    },
    {
      Price: "$42",
      desc: "Plus Size 2022 Women Linen Pants Summer Elastic Wide Leg Pants",
      img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

      href: "javascript:void(0)",
      review: "4.5",
    },
    {
      Price: "$42",
      desc: "Plus Size 2022 Women Linen Pants Summer Elastic Wide Leg Pants",
      img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

      href: "javascript:void(0)",
      review: "4.5",
    },
    {
      Price: "$42",
      desc: "Plus Size 2022 Women Linen Pants Summer Elastic Wide Leg Pants",
      img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

      href: "javascript:void(0)",
      review: "4.5",
    },
  ];
  return (
    <div className="grid lg:grid-cols-6 grid-cols-1 gap-6 lg:p-12 px-4">
      <div className="lg:col-span-2 col-span-1  bg-black rounded-lg p-12 ">
        <h1 className="text-white text-5xl text-center">Trending on X</h1>
        <img src={Suit} className="w-full" />
      </div>
      <div className="lg:col-span-4 ">
        <h1 className="font-serif font-extrabold text-2xl pb-4">
          Popular Demand
        </h1>
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
          {posts.map((items, key) => (
            <div className="w-full mx-auto group sm:max-w-sm" key={key}>
              <a href={items.href} className="cursor-pointer">
                <div className="relative">
                  <img
                    src={items.img}
                    loading="lazy"
                    alt={items.Price}
                    className="w-full rounded-lg"
                  />
                  <div className="absolute p-2 rounded-full bg-gray-100 top-1 right-1">
                    <CiHeart />
                  </div>
                </div>
                <div className="mt-3 space-y-2">
                  <span className="block text-red-600 text-sm">
                    {items.date}
                  </span>
                  <h3 className="text-lg text-red-600 duration-150 group-hover:text-red-400 font-semibold">
                    {items.Price}
                  </h3>
                  <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
                    {items.desc}
                  </p>
                  <div className="flex flex-row items-center gap-3">
                    <div className="flex flex-row items-center gap-2 rounded-full p-1.5 bg-gray-100 text-xs">
                      <IoMdFlame className="text-red-500" /> Best Seller
                    </div>
                    <div className="flex flex-row items-center gap-2 rounded-full p-1.5 bg-gray-100 text-xs">
                      <MdOutlineStarPurple500 className="text-red-500" />{" "}
                      {items.review}
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular;
