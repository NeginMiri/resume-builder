import React, { useState } from "react";
import Header from "../Component/Header";
import { Link } from "react-router";
import { MdCloudUpload } from "react-icons/md";

const CreatTemplate = () => {
  const [projectToggle, setProjectToggle] = useState(true);
  return (
    <>
      <Header />
      <section className="flex py-10">
        <div className="flex flex-col w-full gap-3">
          <h1 className="text-[20px] font-bold">Personal Details</h1>
          <div className="w-full h-[1px] bg-gray-300"></div>
          <div className="flex gap-3 justify-center items-center">
            <label className="flex gap-2 justify-center hover:border-black cursor-pointer items-center w-full px-10 py-5 rounded-[6px] border border-gray-300">
              <MdCloudUpload className="w-[30px] h-[30px] text-gray-600" />
              <p className="text-gray-600">Select a file</p>
            </label>
            <img
              src="./public/avatar.png"
              className="w-[60px] h-[60px] rounded-[6px]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 w-full py-2 px-2 font-medium focus:border-2 focus:border-blue-400 outline-none rounded-[6px] transition-all"
            />
            <input
              type="text"
              placeholder="Your Summary"
              className="border border-gray-300 w-full py-2 px-2 font-medium focus:border-2 focus:border-blue-400 outline-none rounded-[6px] transition-all"
            />
            <input
              type="text"
              placeholder="Work Profile"
              className="border border-gray-300 w-full py-2 px-2 font-medium focus:border-2 focus:border-blue-400 outline-none rounded-[6px] transition-all"
            />
            <input
              type="text"
              placeholder="Address"
              className="border border-gray-300 w-full py-2 px-2 font-medium focus:border-2 focus:border-blue-400 outline-none rounded-[6px] transition-all"
            />
            <input
              type="tel"
              placeholder="Phone number"
              className="border border-gray-300 w-full py-2 px-2 font-medium focus:border-2 focus:border-blue-400 outline-none rounded-[6px] transition-all"
            />
            <input
              type="email"
              placeholder="Email id"
              className="border border-gray-300 w-full py-2 px-2 font-medium focus:border-2 focus:border-blue-400 outline-none rounded-[6px] transition-all"
            />
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-[20px] font-bold">Education</h1>
            <div className="w-full h-[1px] bg-gray-300"></div>
            <button className="w-full bg-bg-200 hover:bg-bg-300 rounded-[6px] cursor-pointer py-2 text-white font-medium transition-all">
              Add Education
            </button>
            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Enter Title"
                className="border border-gray-300 w-full py-2 px-2 font-medium focus:border-2 focus:border-blue-400 outline-none rounded-[6px] transition-all"
              />
              <textarea
                className="w-full border border-gray-300 py-3 px-2 focus:border-2 focus:border-blue-400 outline-none rounded-[6px] transition-all"
                placeholder="Use comma to separate Description"
              ></textarea>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <h1 className="text-[20px] font-bold">Projects</h1>

              <div
                onClick={() => setProjectToggle(!projectToggle)}
                className={`w-[50px] h-[26px] rounded-full cursor-pointer transition-all duration-300 relative
      ${projectToggle ? "bg-bg-200" : "bg-gray-300"}`}
              >
                <div
                  className={`w-[20px] h-[20px] bg-white rounded-full absolute top-[3px] transition-all duration-300
        ${projectToggle ? "left-[27px]" : "left-[3px]"}`}
                ></div>
              </div>
            </div>

            <div className="w-full h-[1px] bg-gray-300"></div>

            <button className="w-full bg-bg-200 hover:bg-bg-300 rounded-[6px] cursor-pointer py-2 text-white font-medium transition-all">
              Add Projects
            </button>

            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Enter Project Title"
                className="border border-gray-300 w-full py-2 px-2 font-medium focus:border-2 focus:border-blue-400 outline-none rounded-[6px] transition-all"
              />

              <textarea
                className="w-full border border-gray-300 py-3 px-2 focus:border-2 focus:border-blue-400 outline-none rounded-[6px] transition-all"
                placeholder="Use comma to separate Description"
              ></textarea>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <h1 className="text-[20px] font-bold">Work Experience</h1>

              <div
                onClick={() => setProjectToggle(!projectToggle)}
                className={`w-[50px] h-[26px] rounded-full cursor-pointer transition-all duration-300 relative
      ${projectToggle ? "bg-bg-200" : "bg-gray-300"}`}
              >
                <div
                  className={`w-[20px] h-[20px] bg-white rounded-full absolute top-[3px] transition-all duration-300
        ${projectToggle ? "left-[27px]" : "left-[3px]"}`}
                ></div>
              </div>
            </div>

            <div className="w-full h-[1px] bg-gray-300"></div>

            <button className="w-full bg-bg-200 hover:bg-bg-300 rounded-[6px] cursor-pointer py-2 text-white font-medium transition-all">
              Add Experience
            </button>

            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Enter Job Title"
                className="border border-gray-300 w-full py-2 px-2 font-medium focus:border-2 focus:border-blue-400 outline-none rounded-[6px] transition-all"
              />

              <textarea
                className="w-full border border-gray-300 py-3 px-2 focus:border-2 focus:border-blue-400 outline-none rounded-[6px] transition-all"
                placeholder="Use comma to separate Description"
              ></textarea>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <h1 className="text-[20px] font-bold">Awards & Achievement</h1>

              <div
                onClick={() => setProjectToggle(!projectToggle)}
                className={`w-[50px] h-[26px] rounded-full cursor-pointer transition-all duration-300 relative
      ${projectToggle ? "bg-bg-200" : "bg-gray-300"}`}
              >
                <div
                  className={`w-[20px] h-[20px] bg-white rounded-full absolute top-[3px] transition-all duration-300
        ${projectToggle ? "left-[27px]" : "left-[3px]"}`}
                ></div>
              </div>
            </div>

            <div className="w-full h-[1px] bg-gray-300"></div>

            <textarea
              className="w-full border border-gray-300 py-3 px-2 focus:border-2 focus:border-blue-400 outline-none rounded-[6px] transition-all"
              placeholder="Use comma to separate Description"
            ></textarea>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreatTemplate;
