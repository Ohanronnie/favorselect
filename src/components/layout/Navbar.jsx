import React, { useState } from "react";
import Logo from "../../assets/Logo2.jpeg";
import { FaBell } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa6";
import { CgBox } from "react-icons/cg";
import { FiUser } from "react-icons/fi";
import { GrCart } from "react-icons/gr";
import { AiOutlineWarning } from "react-icons/ai";
import Notification from "./Notification";
import { FaSearch } from "react-icons/fa";

import { Link } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";

const Navbar = () => {
  const [isPopoutVisible, setIsPopoutVisible] = useState(false);

  const [isProfileVisible, setIsProfileVisible] = useState(false);

  const togglePopout = () => {
    setIsPopoutVisible(!isPopoutVisible);
  };

  const toggleProfile = () => {
    setIsProfileVisible(!isProfileVisible);
  };

  return (
    <div>
      <div className="p-4  flex items-center justify-between">
        <Link to="/">
          <img src={Logo} className=" lg:h-24 h-12 lg:w-56 w-28 rounded-lg " />
        </Link>

        <div className="w-[50%] items-center rounded-2xl mx-4 bg-gray-100 flex">

          <input
            type="email"
            placeholder="Search products"
            className="w-full rounded-md bg-red-500 bg-opacity-25 placeholder:text-red-400  p-2.5 outline-none"
          />
         
       <button className="p-2.5 rounded-md text-white bg-red-500 outline-none shadow-md focus:shadow-none sm:px-5">
            Search
          </button>
        </div>

        <div className="flex flex-row items-center lg:gap-8 gap-4 text-gray-700">
          <div
            className="flex flex-col items-center justify-center gap-2 relative"
            onClick={togglePopout}
          >
            <div className="absolute bg-red-500 text-white lg:top-[-30%] top-[-80%] lg:left-9 left-3  w-6 h-6 text-center flex items-center justify-center rounded-full text-xs">
              1
            </div>
            <FaRegBell className="text-2xl" />
            <p className="text-xs lg:block hidden">Notification</p>
          </div>
          {isPopoutVisible && <Notification />}
          <div
            className=" flex flex-col items-center justify-center gap-2"
            onClick={toggleProfile}
          >
            <FiUser className="text-2xl" />
            <p className="text-xs lg:block hidden">Profile</p>
          </div>
          {isProfileVisible && <ProfileMenu />}{/*
          <Link
            to="/MyOrders"
            className=" flex flex-col items-center justify-center gap-2"
          >
            <CgBox className="text-2xl" />
            <p className="text-xs lg:block hidden">My orders</p>
          </Link>*/}
          <Link
            to="/ShoppingCart"
            className=" flex flex-col items-center justify-center gap-2"
          >
            <GrCart className="text-2xl" />
            <p className="text-xs lg:block hidden">Shopping Cart</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
