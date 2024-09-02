import React from "react";
import ProductSlider from "../components/productdetails/ProductSlider";
import { CiHeart } from "react-icons/ci";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoMdFlame } from "react-icons/io";

const ProductDetails = () => {
  return (
    <div className="p-12 grid lg:grid-cols-2 grid-cols-1 lg:gap-12 gap-2">
      <div className=" rounded-[50px]">
        <ProductSlider />
      </div>
      <div className="">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-3xl w-[80%]">
            Johnature Womens Cjinese Style Shirt with Long Sleeve.
          </h1>
          <div className="flex  h-12 w-12 items-center justify-center rounded-full border-gray-400 border top-1 right-1">
            <CiHeart className="text-2xl" />
          </div>
        </div>
        <div className="flex flex-row items-center gap-3 pt-6">
          <div className="flex flex-row items-center gap-2 rounded-full p-1.5 bg-gray-100 text-xs">
            <IoMdFlame className="text-red-500" /> Best Seller
          </div>
          <div className="flex flex-row items-center gap-2 rounded-full p-1.5 bg-gray-100 text-xs">
            <MdOutlineStarPurple500 className="text-red-500" /> 5
          </div>
        </div>
        <hr className="my-6" />
        <div className="flex lg:flex-row flex-col lg:items-center items-start space-y-4 justify-between">
          <h1 className="font font-extrabold text-5xl">$24</h1>
          <div className="flex flex-row items-center gap-6">
            <button className="px-5 py-2.5  text-white bg-black rounded-lg shadow-md focus:shadow-none duration-100 ring-offset-2  focus:ring-2">
              Add to Cart
            </button>
            <button className="px-5 py-2.5  text-white bg-red-600 rounded-lg shadow-md focus:shadow-none duration-100 ring-offset-2  focus:ring-2">
              Buy Now
            </button>
          </div>
        </div>
        <div>
          <h1 className="text-2xl text-gray-400 pt-4">Description</h1>
          <p>
            Weaving method:plain weave pattern:geometry brand:other Product
            Category:Knitted hat colour:Black 2 Processing methods:printing Top
            style:Flat top Print LOGO:Can Applicable gender:Unisex / both men
            and women Occasions for gifts:Birthday Material:Wool Hat
            style:Without eaves
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
