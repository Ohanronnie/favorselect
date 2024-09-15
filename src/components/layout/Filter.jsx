import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { BiLogoShopify } from "react-icons/bi";
import Shop from "../../assets/shop.png";
import { Link } from "react-router-dom";

const Filter = () => {
  const categories = [
    { name: "Outlet", logo: Shop },
    { name: "Kids", logo: Shop },
    { name: "Home and Kitchen", logo: Shop },
    { name: "Electronics", logo: Shop },
    { name: "Smartphone Cases", logo: Shop },
    { name: "Home Appliances", logo: Shop },
    { name: "Outdoors & Garden", logo: Shop },/*
    {
      name: "Cars and Motorcycles",
      logo: Shop,
    },
    { name: "Beauty", logo: Shop },
    { name: "Health", logo: Shop },
    { name: "Shoes", logo: Shop },
    { name: "Mens Fashion", logo: Shop },
    { name: "Bags & Suitcase", logo: Shop },
    {
      name: "Hobbies & Creativity",
      logo: Shop,
    },*/
  ];

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div className="p-4">
      <div className="flex flex-wrap gap-4 justify-center">
      {/*}  <div
          className="flex flex-row items-center text-indigo-600 gap-2 cursor-pointer"
          onClick={toggleMenu}
        >
          <CiMenuBurger /> All Categories
        </div>*/}
        <Link to="/Categories">Outlet</Link>
        <Link to="/Categories">Kids</Link>
        <Link to="/Categories">Home and Kitchen</Link>
        <Link to="/Categories">Electronics</Link> <Link>Smartphone Cases</Link>{" "}
        <Link>Home Appliances</Link>
        
        {/*
        <Link to="/Categories">Outdoors & Garden</Link>
        <Link to="/Categories">Cars and Motorcycles</Link>
        <Link to="/Categories">Home and Kitchen</Link>
        <Link to="/Categories">Beauty</Link>
        <Link to="/Categories">Health</Link>
        <Link to="/Categories">Shoes</Link>
        <Link to="/Categories">Mens Fashion</Link>
        <Link to="/Categories">Bags & Suitcase</Link>
        <Link to="/Categories">Hobbies & Creativity </Link>*/}
      </div>
      
       
      {isMenuOpen && (
        <div className="mt-4 p-4 bg-white shadow-lg rounded-lg">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((category) => (
              <div
                key={category.name}
                className="flex items-center gap-2 p-2  rounded-lg hover:bg-gray-100"
              >
                <img
                  src={category.logo}
                  alt={category.name}
                  className="w-8 h-8"
                />

                <p>{category.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
