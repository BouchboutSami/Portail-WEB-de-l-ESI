import ImageLanding from "@/components/ImageLanding";
import NavBar from "@/components/NavBar";
import Signalbar from "@/components/SignalBar";
import React from "react";
import UpcomingEvents from "@/components/UpcomingEvents";
import TrainingOffers from "@/components/TrainingOffers";
import Footer from "@/components/Footer";
import DiscoverSchool from "@/components/DiscoverSchool";

const page = () => {
  const links = {
    "University works": "UniversityWorks",
    "Health & Social insurance": "Health-SocialInsurance",
    "Entrepreneurship at school": "EntrepreneurshipAtSchool",
    "Numeric Spaces": "NumericSpaces",
  };
  return (
    <div>
      <Signalbar />
      <NavBar />
      <ImageLanding
        imageUrl="/assets/FuturStudentGatewayLanding.png"
        title="Futur Student Gateway"
        description="Shape your future. Discover ESI's innovative academics, endless resources, and vibrant community."
      />
      <div class="flex justify-center items-center">
        <h1 class="font-poppins font-bold mt-8 text-[28px] text-black hover:text-[#185B9C] text-center">
          Welcome, futur students!
        </h1>
      </div>
      <div className="py-10 pr-10 pl-20 relative w-full flex items-center">
        <div className="w-1/2 relative mr-0">
          <img
            className="h-auto w-full transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
            src="/assets/FuturStudentGateway.png"
            alt="ESI Student Gateway"
          />
        </div>
        <div className="bg-bleu w-5/12 p-6 text-white font-poppins absolute left-1/2 -translate-x-[10%]">
          <p className="text-wrap mb-2">
          ESI prioritizes fostering a welcoming and enriching academic environment specifically designed to support new students. Our dedicated faculty provides personalized guidance and mentorship, ensuring you have the resources needed to excel. The collaborative spirit at ESI is highly encouraged, promoting a network of peers where you can learn from and support one another. This nurturing environment empowers you to develop your critical thinking skills, build confidence, and cultivate a lifelong passion for learning within the field of computer science.
          </p>
        </div>
      </div>
      <TrainingOffers />
      <UpcomingEvents />
<DiscoverSchool/>
      <Footer/>
    </div>
  );
};

export default page;
