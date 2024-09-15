import React from 'react'
import { CiHeart } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";
import { IoMdFlame } from "react-icons/io";
import { MdOutlineStarPurple500 } from "react-icons/md";
export default function ProductCard(items, key=null) {
  return (
    <Link
    to="/ProductDetails"
    className="w-full mx-auto group sm:max-w-sm"
    key={key}
  >
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
        <div className="absolute p-2 w-full text-center text-white bg-red-500 bottom-0">
         Buy Now
        </div>
      </div>
      <div className="mt-3 space-y-2">
        <span className="block text-red-600 text-sm">{items.date}</span>
        <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
          {items.desc}
        </p>
        <h3 className="text-lg text-red-600 duration-150 group-hover:text-red-400 font-semibold">
          {items.Price}
        </h3>
       
        <div className="flex flex-row items-center gap-3">
       {/* <div className="flex flex-row items-center gap-2 rounded-full p-1.5 bg-gray-100 text-xs">
            <IoMdFlame className="text-red-500" /> Best Seller
          </div>*/}  
          <div className="flex flex-row items-center rounded-full p-1 bg-gray-100 text-xs">
          {new Array(Math.trunc(items.review)).fill(null).map(e => <MdOutlineStarPurple500 className="text-red-500 h-4 w-4" />)}
           <span className="mx-1 ">{items.review}</span>
          </div>
        </div>
      </div>
    </a>
  </Link>
  )
}
