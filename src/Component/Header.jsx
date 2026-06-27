import React from "react";
import { Link } from "react-router";
import { IoMoon } from "react-icons/io5";
const Header = () => {
  
  return (
    <>
      <section className="bg-bg-100 flex justify-between w-full px-5 py-2">
        <img src="./public/download.png" className="w-11 h-11 cursor-pointer" />
        <div className="flex items-center gap-6">
          <ul className="flex text-[16px] gap-3 cursor-pointer ">
            <Link to="/"><li className="hover:text-blue-500">Home</li></Link>
            
            <Link to = "/About"> <li className="hover:text-blue-500"> About</li></Link>
            
          </ul>
          <button className="hover:bg-gray-300 cursor-pointer px-4 py-3 rounded-[8px] transition-all">
            <IoMoon className="w-4 h-4" />
          </button>
        </div>
      </section>
    </>
  );
};

export default Header;
