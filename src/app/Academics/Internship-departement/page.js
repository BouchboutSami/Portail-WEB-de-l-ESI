"use client";
import React from 'react';
import NavBar from "@/components/NavBar";
import { FaUserCircle, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock ,FaGlobe} from "react-icons/fa";
import PageImg from "@/components/PageImg";
import Footer from "@/components/Footer";
import ArticleCard from '@/components/ArticleCard';


export default function EntrepriseDiscovery() {
  return (
    <div className="font-poppins w-screen flex flex-col relative bg-gray-100">
      <NavBar />
      <PageImg
        img="/assets/Internship.jpg"
        titre="Enterprise Discovery"
        details="Explore our internship programs and the benefits they offer to both students and enterprises. Learn how you can partner with us for mutual growth and success."
      />

      <div className="p-8 flex flex-col gap-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-bleunuit mb-4">Enterprise Discovery</h1>
          <p className="text-lg text-gray-700">Learn about our internship programs and how they can benefit your enterprise.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 space-y-6">
            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="/assets/internship2.jpg" alt="Practical Internship" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-bleunuit mb-4">Practical Internship in an Enterprise (SPE)</h2>
                <p className="text-gray-700 mb-4">The Practical Internship in an Enterprise (SPE) is a discovery internship for first-year specialty students, lasting from one to three months. It provides students with practical experience in a professional environment, allowing them to apply their theoretical knowledge and gain valuable insights into their chosen field.</p>
              </div>
            </article>
            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="/assets/internship1.jpg" alt="End-of-Studies Project" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-bleunuit mb-4">End-of-Studies Project Internship (PFE)</h2>
                <p className="text-gray-700 mb-4">The End-of-Studies Project Internship (PFE) is a crucial component of the graduation process, where students undertake a significant project in collaboration with an enterprise. This internship allows students to demonstrate their skills and knowledge by addressing real-world challenges and providing innovative solutions.</p>
              </div>
            </article>
          </div>

          <div className="lg:w-1/3">
            <div className="bg-bleu rounded-lg shadow-lg p-6 text-[#FFFFFF] text-sm">
              <h2 className="text-xl font-semibold mb-4">Contact Internship Service</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaUserCircle className="w-5 h-5" />
                  <div className="capitalize flex-1">M. Amar BALLA</div>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhone className="w-5 h-5" />
                  <div className="flex-1">+1012 3456 789</div>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="w-5 h-5" />
                  <div className="flex-1">s_stages@esi.dz</div>
                </div>
                <div className="flex items-center gap-3">
                  <FaClock className="w-5 h-5" />
                  <div className="flex-1">8:00 AM - 4:00 PM, Sunday to Thursday</div>
                </div>
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="w-5 h-5" />
                  <div className="flex-1">Lorem ipsum dolor sit amet</div>
                </div>
                <div className="flex items-center gap-3">
                  <FaGlobe className="w-5 h-5" />
                  <a href="https://sites.google.com/esi.dz/de-servicestages" target="_blank" rel="noopener noreferrer" className="flex-1 underline">Visit our site</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mt-8">
          <h2 className="text-2xl font-semibold text-bleunuit mb-4">Enterprise Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ArticleCard
              title="Why Offer an Internship at ESI? Discover the Benefits for Your Enterprise"
              description="Offering internships at ESI comes with numerous benefits for your enterprise, including access to fresh talent and new perspectives."
              imageUrl="/assets/article1.jpg"
              link="/articles/why-offer-internships"
            />
            <ArticleCard
              title="How to Effectively Mentor an Intern? Best Practices"
              description="Learn the best practices for mentoring interns and maximizing their potential during their internship period."
              imageUrl="/assets/article2.jpg"
              link="/articles/mentoring-best-practices"
            />
            <ArticleCard
              title="Internships: A Stepping Stone to Employment for Students"
              description="Internships serve as a crucial stepping stone for students, bridging the gap between academia and the professional world."
              imageUrl="/assets/article3.jpg"
              link="/articles/internships-bridge-to-employment"
            />
            <ArticleCard
              title="Partner Testimonials: Success Stories and Collaborations"
              description="Read success stories from our partner enterprises and learn about the fruitful collaborations we've fostered over the years."
              imageUrl="/assets/article4.jpg"
              link="/articles/partner-testimonials"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
