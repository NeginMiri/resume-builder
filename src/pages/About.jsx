import React from 'react'
import Header from '../Component/Header'
import { FaHeart } from "react-icons/fa";

const About = () => {
  return (
    <>
      <Header />
      <section className="font-serif flex flex-col justify-center items-center py-10 gap-5">
        <div className="flex flex-col items-center gap-3">
          <h3 className="text-bg-200 text-[20px] font-bold uppercase">
            People love us
          </h3>
          <h1 className="text-[48px] ">Resume Builder</h1>
          <p className="text-tx-200 text-[16px]">
            Build the Resume That Gets You Hired!
          </p>
        </div>
        <div className="bg-white shadow-md w-[640px] h-[207px] px-10 rounded-[10px]">
          <img src="./public/download1.png" className="w-[41px] h-[47px]" />
          <div className="flex justify-center gap-5">
            <div className="flex flex-col gap-5">
              <p className="text-[15px] text-tx-200 w-[430px]">
                A resume builder website is a web-based tool that allows users
                to create and customize a professional resume to their desired
                specifications. These websites typically provide templates for
                creating a resume.
              </p>
              <p className="text-[14px] text-tx-200">
                <span className=" text-gray-700 font-medium">Negin Miri</span> -
                Fronted Web Developer
              </p>
            </div>
            <div>
              <img
                src="./public/Negin.jpeg"
                className="w-[100px] h-[100px] rounded-[50%]"
              />
            </div>
          </div>
        </div>
         <FaHeart className="w-[40px] h-[34px] text-bg-200 mt-10"/>
      </section>
     
    </>
  );
}

export default About;