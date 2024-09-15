import React from 'react'
import { CiHeart, CiShoppingCart } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import { FaHeart} from "react-icons/fa";
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
          className="w-full h-48 rounded-lg"
        />
        <div className="absolute p-2 rounded-full bg-gray-100 top-1 right-1">
          <CiHeart />
        </div>
        <div className="absolute m-1 p-1 text-sm px-2 bg-red-500 text-white top-1  left-1">
          <span className=''>-10</span>
        </div>
        <div className="absolute p-2 w-full flex justify-center items-center bg-opacity-70 bg-gray-500 text-center text-white bottom-0">
          <CiShoppingCart className="h-6 w-6 mx-2" /> Buy Now
        </div>
      </div>
      <div className="mt-3 space-y-2">
        <div className='flex justify-between'>
          <div className="flex gap-2 items-center">
         <h3 className="text-lg text-red-600 duration-150 group-hover:text-red-400 font-semibold">
            {items.Price}
          </h3>
          <h3 className=" text-xs line-through text-gray-500 duration-150 group-hover:text-red-400 font-semibold">
            ${40*10}
          </h3>
          </div>
          <div className="flex items-center text-xs">
           <MdOutlineStarPurple500 className="text-red-500 h-4 w-4" />
           <span className="mx-1 ">{items.review}{' '}<span className='text-gray-500'>/1000+</span></span>
          </div>
        </div>
        <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
          {items.desc}
        </p>
       
        <div className="flex flex- gap-2">
          <span className='bg-red-500 bg-opacity-40 rounded-full text-xs text-gray-500 px-[0.45rem] py-1 font-medium'><span className='text-red-500'>Sale</span>{' '}11 days</span>
          <span className='bg-red-500 bg-opacity-40 rounded-full text-xs  text-black px-[0.45rem] py-1 font-normal'>🔥Best Seller</span>

        </div>
      </div>
    </a>
  </Link>
  )
}
