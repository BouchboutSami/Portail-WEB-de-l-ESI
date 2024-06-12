"use client";
import React from "react";
import NavBar from "@/components/NavBar";
import { BrowserRouter as Router } from 'react-router-dom';
import EtudeSideBar from "@/components/EtudeSideBar";
import Accordion from "@/components/Accordion";
import TrainingDurOrga from '@/components/TrainingDurOrga';
import AccessConditions from "@/components/AccessConditions";
import TrainingObjectives from "@/components/TrainingObjectives";
import TrainingProfiles from "@/components/TrainingProfiles";
import TrainingProgram from "@/components/TrainingProgram";
import PageImg from "@/components/PageImg";
import Footer from "@/components/Footer";

export default function Home() {
  const duration = '30 weeks';
  const semester1 = '15 weeks';
  const semester2 = '15 weeks';
  const imageS1 = '/images/Capture.png'; 
  const imageS2 = 'https://via.placeholder.com/600x500'; 
  const conditions="To pass the requirements of the common core in the second cycle, candidates must obtain an average mark equal to or greater than 10 and must not receive any eliminatory mark. In addition, admission is subject to taking into account the candidate's ranking within the promotion."
  const objectives = [
    "Gain proficiency in programming languages such as JavaScript and Python.",
    "Develop problem-solving skills through hands-on projects.",
    "Understand fundamental concepts of software development and engineering.",
  ];
  const profiles=[
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Software Engineer",
    "Data Scientist",
   ];
  return (
    <div className=" font-poppins w-screen flex flex-col relative">
      <NavBar />
      <PageImg
       img="/assets/Etude.jpg" 
       titre="Academics" 
       details="Explore academic excellence through the diverse training programs offered by ESI. 
       Our comprehensive curriculum is meticulously crafted to provide students with the knowledge, 
       skills, and hands-on experience necessary for success in their chosen fields."
       />
      
      <div className="flex">
      <Router>
       <EtudeSideBar />
       </Router>
       <div className="container mx-auto w-fit py-10 flex flex-col gap-4">
      <Accordion title="Training Duration and Organization:">
      <div>
      <TrainingDurOrga
        duree={duration}
        semestre1={semester1}
        semestre2={semester2}
        imageS1={imageS1}
        imageS2={imageS2}
      />
    </div>
      </Accordion>
      <Accordion title="Access conditions:">
        <div>
          <AccessConditions conditions={conditions}/>
        </div>
      </Accordion>
      <Accordion title="Training objectives:">
        <div>
          <TrainingObjectives objectives={objectives}/>
        </div>
      </Accordion>
      <Accordion title="Targeted job profiles and skills:">
        <div>
          <TrainingProfiles profiles={profiles}/>
        </div>
      </Accordion>
      <Accordion title="Training program:">
        <div>
          <TrainingProgram pdfPath='https://www.esi.dz/wp-content/uploads/2021/02/programmes/programme2cs-sil.pdf'/>
        </div>
      </Accordion>
      </div>
      </div>
      
      <Footer/>
    </div>
    
  );
}