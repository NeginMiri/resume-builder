import React, { createContext, useEffect, useState } from "react";
import Header from "../Component/Header";
import { Link } from "react-router";
const Home = () => {


  return (
    <>
      <Header />
      <section className="flex justify-center items-center gap-30 py-20">
        <div className="flex flex-col">
          <h1 className="text-[60px] w-150 font-medium text-center">
            Your resume in three <span className="text-tx-100">easy</span> steps
          </h1>
          <p className="text-tx-200 w-123.25 pt-5">
            Resume builder tools that assemble well-formatted resume. Through a
            resume builder, you can create a professional-looking resume in a
            few easy steps. This resume builder offer different template
            options, so you can select the template that best fits your needs
            and style.
          </p>
          <div className="flex flex-col pt-8 gap-2">
            <div className="flex gap-2">
              <button className="py-1 px-3 rounded-[6px] bg-bg-100 font-medium hover:bg-gray-300 cursor-pointer transition-all">
                1
              </button>
              <h1 className="text-[20px]">
                Select a template from our collection.
              </h1>
            </div>

            <div className="flex gap-2 items-center">
              <button className="py-1 px-3 rounded-[6px] bg-bg-100 font-medium hover:bg-gray-300 cursor-pointer transition-all">
                2
              </button>
              <h1 className="text-[20px] w-[442px]">
                Build you resume using our easy to use resume builder.
              </h1>
            </div>

            <div className="flex gap-2 items-center">
              <button className="py-1 px-3 rounded-[6px] bg-bg-100 font-medium hover:bg-gray-300 cursor-pointer transition-all">
                3
              </button>
              <h1 className="text-[20px] w-[442px]">Download your resume.</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <img src="./public/home-logo.png" className="w-lg h-lg" />
          <Link to="/select">
            <button className="bg-bg-200 w-full text-white font-medium py-2 rounded-[20px] cursor-pointer hover:bg-bg-300 transition-all">
              Select Template
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
