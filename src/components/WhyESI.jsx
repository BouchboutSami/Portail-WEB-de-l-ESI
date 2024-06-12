import React from 'react';
import WhyESICard from './WhyESICard';
import { FaGraduationCap, FaChalkboardTeacher, FaLaptopCode, FaBuilding } from 'react-icons/fa';

const WhyESI = () => {
  const benefits = [
    {
      icon: FaGraduationCap,
      title: "Pathway to Excellence: ESI's Enriched Learning Environment",
      description: 'Embark on a journey towards excellence at ESI. Our enriched learning environment combines academic rigor with practical experiences and extracurricular activities, empowering you to excel in your chosen field and become a leader in your industry.',
    },
    {
      icon: FaChalkboardTeacher,
      title: "Valuing Every Effort: ESI's Culture of Appreciation",
      description: "Experience the power of recognition at ESI. In our vibrant community, every effort is celebrated and valued. We foster a culture of appreciation where you'll feel supported and encouraged to reach your full potential.",
    },
    {
      icon: FaLaptopCode,
      title: "Collective Excellence: ESI's Collaborative Community",
      description: "Join a community driven by excellence at ESI. Our collaborative environment brings together diverse perspectives and talents to drive innovation and success. Through teamwork and mentorship, you'll thrive and benefit from the collective wisdom of our community.",
    },
    {
      icon: FaBuilding,
      title: "Innovate and Thrive: ESI's Dynamic and Progressive Atmosphere",
      description:"Thrive in an environment of innovation and progress at ESI. Our dynamic atmosphere encourages creativity and exploration, empowering you to push boundaries and pioneer new ideas. With access to cutting-edge resources and industry partnerships, you'll be prepared to succeed in today's fast-paced world.",
    },
  ];

  return (
    <section className="py-8 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <h2 className="font-poppins text-4xl font-bold text-center text-bleunuit  mb-8">Why ESI</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative">
          {benefits.map((benefit, index) => (
            <WhyESICard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyESI;
