import NextEvents from "../components/LandingPage/NextEvents";
import Partenaires from "../components/Partenaires/Partenaires";
import WhyUs from "../components/LandingPage/WhyUs";
import ServicesForCompanies from "../components/LandingPage/ServicesForCompanies";
import Signalbar from "../components/SignalBar";
import Footer from "../components/Footer";
import NavBar from "@/components/NavBar";
import CampusNews from "@/components/CampusNews";
import ContactCard from "@/components/Cards/ContactCard";
import LandingImage from "@/components/LandingImage";
import Academics from "@/components/Academics";
import LifeCampus from "@/components/LandingPage/LifeCampus";
import PostGradAndResearchSection from "@/components/PostGradAndResearchSection";
import UpcomingEvents from "@/components/UpcomingEvents";
export default function Home() {
  return (
    <div className="font-poppins text-bleu w-screen flex flex-col relative">
      <NavBar/>
      <LandingImage/>
      <WhyUs />
      <CampusNews/>
      <UpcomingEvents/>
      <Academics />
      <LifeCampus />
      <PostGradAndResearchSection/>
      <div className="w-full flex flex-col justify-center items-center min-h-max xl:px-[15%] lg:px-[15%] px-[10%]">
        <h1 className="text-noir font-bold text-3xl mb-4 pt-8">Upcoming Events</h1>
        <h2 className="mb-10 text-noir text-md">
          Discover our major upcoming events
        </h2>
        <NextEvents />
      </div>
      <ServicesForCompanies />
      <Partenaires />
      <Footer />
    </div>
  );
}