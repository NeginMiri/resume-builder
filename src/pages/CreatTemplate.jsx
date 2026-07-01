import React, { useState } from "react";
import Header from "../Component/Header";
import { Link } from "react-router";
import { MdCloudUpload } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaSnapchatSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const CreatTemplate = () => {
  const [fileName, setFileName] = useState("");

 const handleFileChange = (e) => {
   const file = e.target.files[0];

   if (file) {
     setFileName(file.name);
     setImage(URL.createObjectURL(file));
   }
 };

  const handlePrint = () => {
    window.print();
  };

  const [name, setName] = useState("");
  const [work, setWork] = useState("");
  const [address, setAddress] = useState("");
  const [Phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [skills, setSkills] = useState("");
  const [awards, setAwards] = useState("");
  const [educations, setEducations] = useState([]);
  const [projectEnabled, setProjectEnabled] = useState(false);
  const [projects, setProjects] = useState([]);
  const [experienceEnabled, setExperienceEnabled] = useState(false);
  const [experiences, setExperiences] = useState([]);
const [image, setImage] = useState(null);
  const addEducation = () => {
    setEducations([...educations, { title: "", description: "" }]);
  };

  const addProject = () => {
    setProjects([...projects, { title: "", description: "" }]);
  };


  const addExperience = () => {
    setExperiences([
      ...experiences,
      {
        title: "",
        description: "",
      },
    ]);
  };

  const handleEducationChange = (index, field, value) => {
    const newEducations = [...educations];
    newEducations[index][field] = value;
    setEducations(newEducations);
  };

  const handleProjectChange = (index, field, value) => {
    const newProjects = [...projects];
    newProjects[index][field] = value;
    setProjects(newProjects);
  };


  const handleExperienceChange = (index, field, value) => {
    const newExperiences = [...experiences];
    newExperiences[index][field] = value;
    setExperiences(newExperiences);
  };

  return (
    <>
      <div className="print:hidden">
        <Header />
      </div>

      <section className="flex pt-10 gap-[150px]  px-10 ">
        <div className="flex flex-col w-[500px] gap-3    print:hidden">
          <h1 className="text-[20px] font-bold">Personal Details</h1>
          <div className="w-full h-[1px] bg-gray-300"></div>
          <div className="flex gap-3 justify-center items-center">
            <input
              id="file-upload"
              type="file"
              onChange={handleFileChange}
              className="hidden"
            />

            <label
              htmlFor="file-upload"
              className="flex gap-2 justify-center items-center w-full px-10 py-5 rounded-[6px] border border-gray-300 hover:border-black cursor-pointer"
            >
              <MdCloudUpload className="w-[30px] h-[30px] text-gray-600" />
              <p className="text-gray-600">{fileName || "Select a file"}</p>
            </label>
            <img
              src={image || "./public/avatar.png"}
              alt="Profile"
              className="w-[60px] h-[60px] rounded-[6px] object-cover"
            />
          </div>
          <div className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={work}
              onChange={(i) => setWork(i.target.value)}
              className="border border-gray-300 w-full py-2 px-2 font-medium focus:border-2 focus:border-blue-400 outline-none rounded-[6px] transition-all"
            />
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(a) => setAddress(a.target.value)}
              className="border border-gray-300 w-full py-2 px-2 font-medium focus:border-2 focus:border-blue-400 outline-none rounded-[6px] transition-all"
            />
            <input
              type="tel"
              placeholder="Phone number"
              value={Phone}
              onChange={(p) => setPhone(p.target.value)}
              className="border border-gray-300 w-full py-2 px-2 font-medium focus:border-2 focus:border-blue-400 outline-none rounded-[6px] transition-all"
            />
            <input
              type="email"
              placeholder="Email id"
              value={email}
              onChange={(a) => setEmail(a.target.value)}
              className="border border-gray-300 w-full py-2 px-2 font-medium focus:border-2 focus:border-blue-400 outline-none rounded-[6px] transition-all"
            />
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-[20px] font-bold">Technical Skills</h1>
            <div className="w-full h-[1px] bg-gray-300"></div>
            <input
              type="text"
              placeholder="Separate skills by comma"
              value={skills}
              onChange={(a) => setSkills(a.target.value)}
              className="border border-gray-300 w-full py-2 px-2 font-medium focus:border-2 focus:border-blue-400 outline-none rounded-[6px] transition-all"
            />
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-[20px] font-bold">Education</h1>
            <div className="w-full h-[1px] bg-gray-300"></div>
            <button
              onClick={addEducation}
              className="w-full bg-bg-200 hover:bg-bg-300 rounded-[6px] cursor-pointer py-2 text-white font-medium transition-all"
            >
              Add Education
            </button>
            {educations.map((education, index) => (
              <div key={index} className="flex flex-col gap-3 mt-3">
                <input
                  type="text"
                  placeholder="Enter Education Title"
                  value={education.title}
                  onChange={(e) =>
                    handleEducationChange(index, "title", e.target.value)
                  }
                  className="border border-gray-300 w-full py-2 px-2 font-medium focus:border-2 focus:border-blue-400 outline-none rounded-[6px] transition-all"
                />

                <textarea
                  placeholder="Use comma to separate Description"
                  value={education.description}
                  onChange={(e) =>
                    handleEducationChange(index, "description", e.target.value)
                  }
                  className="w-full border border-gray-300 py-3 px-2 focus:border-2 focus:border-blue-400 outline-none rounded-[6px] transition-all"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <h1 className="text-[20px] font-bold">Projects</h1>

              <button
                onClick={() => setProjectEnabled(!projectEnabled)}
                className={`w-10 h-6 flex items-center rounded-full p-1 transition-all duration-300 ${
                  projectEnabled ? "bg-teal-500" : "bg-gray-300"
                }`}
              >
                <div
                  className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-all duration-300 ${
                    projectEnabled ? "translate-x-4" : "translate-x-0"
                  }`}
                ></div>
              </button>
            </div>
            <div className="w-full h-[1px] bg-gray-300"></div>
            <button
              onClick={addProject}
              disabled={!projectEnabled}
              className={`w-full rounded-[6px] py-2 text-white font-medium transition-all ${
                projectEnabled
                  ? "bg-bg-200 hover:bg-bg-300 cursor-pointer"
                  : "bg-bg-200 opacity-40 cursor-not-allowed"
              }`}
            >
              Add Projects
            </button>

            {projectEnabled &&
              projects.map((project, index) => (
                <div key={index} className="flex flex-col gap-3 mt-3">
                  <input
                    type="text"
                    placeholder="Enter Project Title"
                    value={project.title}
                    onChange={(e) =>
                      handleProjectChange(index, "title", e.target.value)
                    }
                    className="border border-gray-300 w-full py-2 px-2 font-medium focus:border-2 focus:border-blue-400 outline-none rounded-[6px] transition-all"
                  />

                  <textarea
                    placeholder="Use comma to separate Description"
                    value={project.description}
                    onChange={(e) =>
                      handleProjectChange(index, "description", e.target.value)
                    }
                    className="w-full border border-gray-300 py-3 px-2 focus:border-2 focus:border-blue-400 outline-none rounded-[6px] transition-all"
                  />
                </div>
              ))}
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <h1 className="text-[20px] font-bold">Work Experience</h1>

              <button
                onClick={() => setExperienceEnabled(!experienceEnabled)}
                className={`w-10 h-6 flex items-center rounded-full p-1 transition-all duration-300 ${
                  experienceEnabled ? "bg-teal-500" : "bg-gray-300"
                }`}
              >
                <div
                  className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-all duration-300 ${
                    experienceEnabled ? "translate-x-4" : "translate-x-0"
                  }`}
                ></div>
              </button>
            </div>

            <div className="w-full h-[1px] bg-gray-300"></div>

            <button
              onClick={addExperience}
              disabled={!experienceEnabled}
              className={`w-full rounded-[6px] py-2 text-white font-medium transition-all ${
                experienceEnabled
                  ? "bg-bg-200 hover:bg-bg-300 cursor-pointer"
                  : "bg-bg-200 opacity-40 cursor-not-allowed"
              }`}
            >
              Add Experience
            </button>

            {experienceEnabled &&
              experiences.map((experience, index) => (
                <div key={index} className="flex flex-col gap-3 mt-3">
                  <input
                    type="text"
                    placeholder="Enter Job Title"
                    value={experience.title}
                    onChange={(e) =>
                      handleExperienceChange(index, "title", e.target.value)
                    }
                    className="border border-gray-300 w-full py-2 px-2 font-medium focus:border-2 focus:border-blue-400 outline-none rounded-[6px] transition-all"
                  />

                  <textarea
                    placeholder="Use comma to separate Description"
                    value={experience.description}
                    onChange={(e) =>
                      handleExperienceChange(
                        index,
                        "description",
                        e.target.value,
                      )
                    }
                    className="w-full border border-gray-300 py-3 px-2 focus:border-2 focus:border-blue-400 outline-none rounded-[6px] transition-all"
                  />
                </div>
              ))}
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <h1 className="text-[20px] font-bold">Awards & Achievement</h1>
            </div>

            <div className="w-full h-[1px] bg-gray-300"></div>

            <textarea
              value={awards}
              onChange={(e) => setAwards(e.target.value)}
              className="w-full border border-gray-300 py-3 px-2 focus:border-2 focus:border-blue-400 outline-none rounded-[6px] transition-all"
              placeholder="Use comma to separate Description"
            ></textarea>
          </div>
        </div>

        <div
          id="resume"
          className="print:block w-[667px] h-fit flex flex-col py-3 shadow-md shadow-olive-950 "
        >
          <div className="flex flex-col justify-center items-center ">
            <h1 className="font-bold text-[50px]">{name || "Your Name"}</h1>
            <div className="flex gap-3">
              <div className="border-r gap-2 border-r-tx-200 flex justify-center items-center pr-3 text-[16px] text-tx-200">
                <MdOutlineLocationOn />
                <p> {address || "Address Line"}</p>
              </div>

              <div className="border-r gap-2 border-r-tx-200 flex justify-center items-center pr-3 text-[16px] text-tx-200">
                <MdEmail />
                <p>{email || "Email"}</p>
              </div>

              <div className=" gap-2  flex justify-center items-center pr-3 text-[16px] text-tx-200">
                <FaPhone />
                <p> {Phone || "Phone Number"}</p>
              </div>
            </div>
            <h1 className="font-bold text-[20px]"> {work || "Work Profile"}</h1>
          </div>
          <div className="font-bold text-[20px] bg-bg-400 px-20 py-2 mt-3">
            <h3>TECHNICAL SKILLS</h3>
          </div>
          <div className="flex gap-3 justify-center items-center gap-1 py-3">
            {skills ? (
              <p className="bg-bg-400 px-2 py-1 text-[12px] rounded-[3px] font-bold">
                {skills}
              </p>
            ) : (
              <>
                <p className="bg-bg-400 px-2 py-1 text-[12px] rounded-[3px] font-bold">
                  YOUR
                </p>
                <p className="bg-bg-400 px-2 py-1 text-[12px] rounded-[3px] font-bold">
                  SKILLS
                </p>
                <p className="bg-bg-400 px-2 py-1 text-[12px] rounded-[3px] font-bold">
                  ARE
                </p>
                <p className="bg-bg-400 px-2 py-1 text-[12px] rounded-[3px] font-bold">
                  SHOWN
                </p>
                <p className="bg-bg-400 px-2 py-1 text-[12px] rounded-[3px] font-bold">
                  HERE
                </p>
              </>
            )}
          </div>
          {projectEnabled && (
            <>
              <div className="font-bold text-[20px] bg-bg-400 px-20 py-2 mt-3">
                <h3>PROJECTS</h3>
              </div>

              {projects.length === 0 ? (
                <ul className="px-20 py-2 flex flex-col gap-1">
                  <li className="font-medium">Project Title</li>
                  <li className="list-disc">
                    Project Description are Shown here
                  </li>
                  <li className="list-disc">with Bullet Points</li>
                </ul>
              ) : (
                projects.map((project, index) => (
                  <ul key={index} className="px-20 py-2 flex flex-col gap-1">
                    {project.title && (
                      <li className="font-medium">{project.title}</li>
                    )}

                    {project.description && (
                      <li className="list-disc">{project.description}</li>
                    )}
                  </ul>
                ))
              )}
            </>
          )}

          <div className="font-bold text-[20px] bg-bg-400 px-20 py-2 mt-3">
            <h3>EDUCATION</h3>
          </div>

          {educations.length === 0 ? (
            <ul className="px-20 py-2 flex flex-col gap-1">
              <li className="font-medium">Education Title</li>
              <li className="list-disc">
                Education Description are Shown here
              </li>
              <li className="list-disc">with Bullet Points</li>
            </ul>
          ) : (
            educations.map((education, index) => (
              <ul key={index} className="px-20 py-2 flex flex-col gap-1">
                {education.title && (
                  <li className="font-medium">{education.title}</li>
                )}

                {education.description && (
                  <li className="list-disc">{education.description}</li>
                )}
              </ul>
            ))
          )}

          {experienceEnabled && (
            <>
              <div className="font-bold text-[20px] bg-bg-400 px-20 py-2 mt-3">
                <h3>WORK EXPERIENCE</h3>
              </div>

              {experiences.length === 0 ? (
                <ul className="px-20 py-2 flex flex-col gap-1">
                  <li className="font-medium">Work Title</li>
                  <li className="list-disc">Work Description are Shown here</li>
                  <li className="list-disc">with Bullet Points</li>
                </ul>
              ) : (
                experiences.map((experience, index) => (
                  <ul key={index} className="px-20 py-2 flex flex-col gap-1">
                    {experience.title && (
                      <li className="font-medium">{experience.title}</li>
                    )}

                    {experience.description && (
                      <li className="list-disc">{experience.description}</li>
                    )}
                  </ul>
                ))
              )}
            </>
          )}

          <div className="font-bold text-[20px] bg-bg-400 px-20 py-2 mt-3">
            <h3>AWARDS & ACHIEVEMENTS</h3>
          </div>
          <ul className="px-20 py-2 flex flex-col gap-1">
            <li className="list-disc">
              {awards || "Your Awards are shown here"}
            </li>
          </ul>
        </div>
      </section>
      <section className="flex justify-center items-center gap-4 mt-20 print:hidden">
        <button
          onClick={handlePrint}
          className="px-6 py-2 rounded-[10px] border border-tx-400 text-tx-400 font-medium hover:bg-bg-400 transition-all cursor-pointer"
        >
          Print
        </button>
        <Link to="/select">
          <button className="px-6 py-2 rounded-[10px] border border-tx-400 text-tx-400 font-medium hover:bg-bg-400 transition-all cursor-pointer">
            Select Another Template
          </button>
        </Link>
      </section>
      <footer className="bg-bg-600 px-30 py-5 flex justify-between items-center mt-20 print:hidden">
        <img src="./public/download.png" className="w-11 h-11 cursor-pointer" />
        <p className="text-gray-800">
          © 2023 Resume Builder, All rights reserved
        </p>
        <div className="flex gap-3">
          <a href="https://github.com/NeginMiri " target="_blank">
            <div className="w-[32px] h-[32px] flex justify-center items-center rounded-full cursor-pointer bg-gray-300">
              <FaGithub className="hover:text-blue-600 transition-all " />
            </div>
          </a>
          <div className="w-[32px] h-[32px] flex justify-center items-center rounded-full cursor-pointer bg-gray-300">
            <FaSnapchatSquare className="hover:text-blue-600 transition-all " />
          </div>
          <a href="https://github.com/neginmiw" target="_blank">
            <div className="w-[32px] h-[32px] flex justify-center items-center rounded-full cursor-pointer bg-gray-300">
              <FaInstagram className="hover:text-blue-600 transition-all " />
            </div>
          </a>
        </div>
      </footer>
    </>
  );
};

export default CreatTemplate;
