import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import EtudeSideBar from "@/components/EtudeSideBar";
import PageImg from "@/components/PageImg";

export default function Schedule() {
  return (
    <div className="font-poppins w-screen flex flex-col relative bg-gray-100">
      <NavBar />
      <PageImg
        img="/assets/Internship.jpg"
        titre="Schedule"
        details="Our meticulously crafted schedules ensure that every student has access to the 
        resources they need, fostering a conducive learning environment for academic success."
      />

      <div className="flex">
        <EtudeSideBar />
        <div className="flex-1 p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-bleunuit mb-4">Schedule</h1>
            <p className="text-lg text-gray-700">
              View the timetable and classroom planning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Timetable Card */}
            <div className="relative rounded-lg overflow-hidden shadow-lg transform transition duration-300 ">
              <img
                src="/assets/timetable.jpg"
                alt="Timetable"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bleunuit to-transparent opacity-90"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h2 className="text-2xl font-semibold text-white mb-2">
                  Timetable
                </h2>
                <p className="text-gray-200 mb-4">
                  View the schedule for classes, exams, and other events.
                </p>
                <a
                  href="https://www.esi.dz/edt.html"
                  className="text-white hover:text-gray-300 font-semibold"
                >
                  View Timetable
                </a>
              </div>
            </div>

            {/* Classrooms Planning Card */}
            <div className="relative rounded-lg overflow-hidden shadow-lg transform transition duration-300">
              <img
                src="/assets/classrooms.jpeg"
                alt="Classrooms"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bleunuit to-transparent opacity-90"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h2 className="text-2xl font-semibold text-white mb-2">
                  Classrooms Planning
                </h2>
                <p className="text-gray-200 mb-4">
                  Check the availability and schedule of classrooms.
                </p>
                <a
                  href="https://www.esi.dz/PlanningSalles.html"
                  className="text-white hover:text-gray-300 font-semibold"
                >
                  View Classrooms Planning
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
