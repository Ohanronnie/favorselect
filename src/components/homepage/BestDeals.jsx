import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { IoMdFlame } from "react-icons/io";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { Link } from "react-router-dom";
import ProductCard from "../layout/ProductCard";

const BestDeals = () => {
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
    }
  ];
  return (
    <div className="px-12 py-12">
      <h1 className="font-medium text-2xl pb-4">For cosy evenings</h1>
      <ul className="grid gap-x-4 gap-y-10 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4">
        {posts.map((items, key) => (
        <ProductCard Price={items.Price} href={items.img} img={items.img} desc={items.desc} review={ items.review}/>
        ))}
      </ul>
    </div>
  );
};

export default BestDeals;
