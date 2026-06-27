import React from 'react'
import Header from '../Component/Header'
import { Link } from "react-router";
const SelectTemplate = () => {
  return (
    <>
      <Header />
      <section className="flex py-20 justify-center items-center gap-80">
        <div className="flex flex-col">
          <h1 className="text-[60px] font-medium">Select a</h1>
          <h1 className="text-[60px] font-medium">
            <span className="text-bg-200">Template</span> from
          </h1>
          <h1 className="text-[60px] font-medium">the list</h1>
        </div>
        <div className="grid grid-cols-2 gap-5 cursor-pointer">
          <Link to="/creat">
            <img
              src="./public/them1.png"
              className="w-[200px] h-[300px] border rounded-[15px]"
            />
          </Link>

          <img
            src="./public/them2.jpg"
            className="w-[200px] h-[300px] border rounded-[15px]"
          />
          <img
            src="./public/them3.jpg"
            className="w-[200px] h-[300px] border rounded-[15px]"
          />
          <img
            src="./public/them4.jpg"
            className="w-[200px] h-[300px] border rounded-[15px]"
          />
        </div>
      </section>
    </>
  );
}

export default SelectTemplate