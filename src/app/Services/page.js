"use client";
import Footer from "@/components/Footer";
import ServicesImage from "@/components/ServicesImage";
import NavBar from "@/components/NavBar";
import ServicesSideBar from "@/components/ServicesSideBar";
import React from "react";

const data = [
  {
    Formation: "Information Systems",
    Skills_acquired: ["- System Analysis and Design", "- Database"],
  },
  {
    Formation: "Systems and Networks",
    Skills_acquired: ["- Operating Systems", "- Networking"],
  },
  {
    Formation: "Development",
    Skills_acquired: ["- Web development"],
  },
  {
    Formation: "Basic Skills",
    Skills_acquired: ["- Mathematical Tools"],
  },
  {
    Formation: "Cross-disciplinary Skills",
    Skills_acquired: ["- Written Expression and Communication", "- English"],
  },
];
const page = () => {
  return (
    <div className="w-screen">
      <NavBar />
      <ServicesImage />
      <div className="flex">
        <ServicesSideBar />
        <div className="w-full">
          <div className="px-[10px] w-full my-5 items-center">
            <div style={{ display: "inline-block" }}>
              <h1 className="font-poppins font-bold text-xl"> Our training </h1>
              <div
                className="mt-1"
                style={{
                  width: "100%",
                  height: "3px",
                  backgroundColor: "#185B9C",
                }}
              ></div>
            </div>
          </div>

          <div className="px-[10px] text-black font-light font-poppins text-[18px] mb-4">
            The National School of Computer Science is organizing the 4th
            training session before the  
            <span className="font-bold">&quot;March 2024&quot;</span> promotion
            for access to the rank of Assistant Engineer in Computer Science
            Level 1, for the benefit of senior computer technicians in public
            institutions. The training will provide access to the rank of
            Assistant in Computer Science and includes  
            <span className="font-bold">210 hours</span> of instruction spread
            over <span className="font-bold">7 months </span>, with  
            <span className="font-bold">one week per month</span>.
          </div>

          {/* Skills acquired */}
          <div className="px-[10px] w-full my-5 items-center">
            <div style={{ display: "inline-block" }}>
              <h1 className="font-poppins font-bold text-xl">
                {" "}
                Skills acquired{" "}
              </h1>
              <div
                className="mt-1"
                style={{
                  width: "100%",
                  height: "3px",
                  backgroundColor: "#185B9C",
                }}
              ></div>
            </div>
          </div>

          <div className="pl-[10px] pr-[20px] my-[5px]  w-full flex flex-col  ">
            <table className="px-[10px] border-collapse border border-[#185B9C] ">
              <thead>
                <tr className="bg-[#185B9C] border-[#185B9C]">
                  <th className="w-[400px] h-[50px] border border-white text-white font-bold text-[18px] p-2 ">
                    Formation
                  </th>
                  <th className="w-[400px] h-[50px] border border-white text-white font-bold text-[18px] p-2">
                    Skills acquired
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index} className="bg-[#F5F5F5] border-[#185B9C]">
                    <td className="w-[200px] h-[50px] border border-[#185B9C] font-bold px-2">
                      {row.Formation}
                    </td>
                    <td className="w-[200px] h-[50px] border border-[#185B9C] font-bold px-2">
                      {row.Skills_acquired.map((skill, skillIndex) => (
                        <div key={skillIndex}>
                          {skillIndex > 0 && <br />}
                          {skill}
                        </div>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Reglementation */}
          <div className="px-[10px] w-full my-5 items-center">
            <div style={{ display: "inline-block" }}>
              <h1 className="font-poppins font-bold text-xl"> Regulation </h1>
              <div
                className="mt-1"
                style={{
                  width: "100%",
                  height: "3px",
                  backgroundColor: "#185B9C",
                }}
              ></div>
            </div>
          </div>
          <div className="pl-[10px] pr-[20px]  my-5 items-center">
            <div class="border-2 border-blue-500 rounded-lg p-6 relative">
              <div class="absolute top-[-0.9rem] left-[100px] transform -translate-x-1/2 bg-white px-2 text-[#185B9C] font-bold">
                Decrees 220-08
              </div>
              <div class="font-poppins text-justify mt-2">
                The National School of Computer Science is organizing the 4th
                training session before the &quot;March 2024&quot; promotion for
                access to the rank of Assistant Engineer in Computer Science
                Level 1, for the benefit of senior computer technicians in
                public institutions. The training will provide access to the
                rank of Assistant in Computer Science and includes 210 hours of
                instruction spread over 7 months, with one week per month.
              </div>
            </div>
          </div>
          <div className="pl-[10px] pr-[20px] w-full my-5 items-center">
            <div class="border-2 border-blue-500 rounded-lg p-6 relative">
              <div class="absolute top-[-0.9rem] left-[100px] transform -translate-x-1/2 bg-white px-2 text-[#185B9C] font-bold">
                Decrees 220-08
              </div>
              <div class="font-poppins text-justify mt-2">
                The National School of Computer Science is organizing the 4th
                training session before the &quot;March 2024&quot; promotion for
                access to the rank of Assistant Engineer in Computer Science
                Level 1, for the benefit of senior computer technicians in
                public institutions. The training will provide access to the
                rank of Assistant in Computer Science and includes 210 hours of
                instruction spread over 7 months, with one week per month.
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="px-[10px] w-full my-5 items-center">
            <div style={{ display: "inline-block" }}>
              <h1 className="font-poppins font-bold text-xl"> Statistics </h1>
              <div
                className="mt-1"
                style={{
                  width: "100%",
                  height: "3px",
                  backgroundColor: "#185B9C",
                }}
              ></div>
            </div>
          </div>
          <div className="flex justify-center items-center my-5">
            <div style={{ display: "inline-block", marginLeft: "-2px" }}>
              <div className="w-52 h-52 border-8 border-[#185B9C] rounded-full bg-white flex justify-center items-center">
                <span className="text-black ">
                  {" "}
                  <span className="font-bold text-[#185B9C] text-2xl flex justify-center items-center">
                    {" "}
                    564{" "}
                  </span>{" "}
                  <span className="flex justify-center items-center">
                    Conventions
                  </span>{" "}
                  <span className="flex justify-center items-center">
                    for the conduct of{" "}
                  </span>{" "}
                  <span className="flex justify-center items-center">
                    competitive exams{" "}
                  </span>
                </span>
              </div>
            </div>
            <div style={{ display: "inline-block", marginLeft: "-2px" }}>
              <div className="w-52 h-52 border-8 border-[#185B9C] rounded-full bg-white flex justify-center items-center">
                <span className="text-black ">
                  {" "}
                  <span className="font-bold text-[#185B9C] text-2xl flex justify-center items-center">
                    {" "}
                    173{" "}
                  </span>{" "}
                  <span className="flex justify-center items-center">
                    Statutory training{" "}
                  </span>{" "}
                  <span className="flex justify-center items-center">
                    conventions
                  </span>{" "}
                </span>
              </div>
            </div>
            <div style={{ display: "inline-block", marginLeft: "-2px" }}>
              <div className="w-52 h-52 border-8 border-[#185B9C] rounded-full bg-white flex justify-center items-center">
                <span className="text-black ">
                  {" "}
                  <span className="font-bold text-[#185B9C] text-2xl flex justify-center items-center">
                    {" "}
                    49{" "}
                  </span>{" "}
                  <span className="flex justify-center items-center">
                    Development{" "}
                  </span>
                  <span className="flex justify-center items-center">
                    conventions
                  </span>
                </span>
              </div>
            </div>
            <div style={{ display: "inline-block", marginLeft: "-2px" }}>
              <div className="w-52 h-52 border-8 border-[#185B9C] rounded-full bg-white flex justify-center items-center">
                <span className="text-black ">
                  {" "}
                  <span className="font-bold text-[#185B9C] text-2xl flex justify-center items-center">
                    {" "}
                    3{" "}
                  </span>{" "}
                  <span className="flex justify-center items-center">
                    Expertise conventions
                  </span>{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
