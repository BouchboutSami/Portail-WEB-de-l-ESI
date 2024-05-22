import Footer from "@/components/Footer";
import NextEvents from "@/components/LandingPage/NextEvents";
import Partenaires from "@/components/Partenaires/Partenaires";
import WhyUs from "@/components/LandingPage/WhyUs";
import ServicesForCompanies from "@/components/LandingPage/ServicesForCompanies";
import Signalbar from "@/components/SignalBar";
import NavBar from "@/components/NavBar";
import CampusNews from "@/components/CampusNews";
import Academics from "@/components/Academics";
import LifeCampus from "@/components/LandingPage/LifeCampus";
import PostGradAndResearchSection from "@/components/PostGradAndResearchSection";
import UpcomingEvents from "@/components/UpcomingEvents";

export default function Home() {
  return (
    <div className="font-poppins text-bleu w-screen flex flex-col relative">
      <Signalbar />
      <NavBar />
      <WhyUs />
      <CampusNews/>
      <UpcomingEvents/>
      <Academics />
      <LifeCampus />
      <PostGradAndResearchSection/>
      <ServicesForCompanies />
      <Partenaires />
      <Footer />
    </div>
  );
}
