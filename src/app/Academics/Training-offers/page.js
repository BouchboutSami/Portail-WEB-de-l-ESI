"use client";
import React from "react";
import NavBar from "@/components/NavBar";

import PageImg from "@/components/PageImg";
import TrainingSchema from "@/components/TrainingSchema";
import Footer from "@/components/Footer"; 
import ContactCard from "@/components/ContactCard";
import WhyESI from "@/components/WhyESI";
import FAQSection from "@/components/FAQSection";
import Overview from "@/components/overview";
export default function Home() {
   const contacts = [
    {
      username: 'DIRECTRICE ADJOINTE DES ETUDES: Mme Nassira CHERID',
      phone: '+213 23 93 91 43 Poste 3006',
      email: 'n_cherid@esi.dz',
    },
    {
      username: 'Service Scolarité: Mme Naima LOUNES',
      phone: ' Poste 3084',
      email: 'n_lounes@esi.dz',
    },
    {
      username: 'Chef de département des classes préparatoires: M. Rachid AIT AMRANE',
      phone: ' +213 23 93 91 46 Poste 3081',
      email: 'r_ait_amrane@esi.dz',
    },
    {
      username: 'Chef de département du second cycle: Mr ANNANE Mohamed',
      phone: 'Poste 3089',
      email: 'm_anane@esi.dz',
    },
   ];
   const Faqs = [
    {
      question: "How can I get the transport card?",
      answer: "Each student can get the transport card if they pay 1510 in the progres website at the beginning of the year.",
    },
    {
      question: "What does this card cover?",
      answer: "It covers the bus, the tramway and the metro",
    },
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
      
      <Overview/>
      <div>
      <h2 className="font-poppins text-4xl font-bold text-center text-bleunuit mb-8">Training Schema</h2>
     <div className="flex gap-[5rem]  items-center justify-center">
     <div className="flex flex-col justify-center">
     <ContactCard contact={contacts}/>
     </div>
     <TrainingSchema/>
     </div>
      </div>
      <WhyESI/>
      <FAQSection 
      faqs={Faqs}
      sectionTitle={"Lorem"}
      sectionDescription={"Ipsum"}/>
      <Footer/>
    </div>
    
  );
}