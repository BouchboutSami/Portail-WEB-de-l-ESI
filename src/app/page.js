import Footer from "@/components/Footer";
import NextEvents from "@/components/LandingPage/NextEvents";
import Partenaires from "@/components/Partenaires/Partenaires";
import WhyUs from "@/components/LandingPage/WhyUs";
import ServicesForCompanies from "@/components/LandingPage/ServicesForCompanies";
import Signalbar from "@/components/SignalBar";
import CampusNews from "@/components/CampusNews";
import Academics from "@/components/Academics";
import LifeCampus from "@/components/LandingPage/LifeCampus";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="font-poppins text-bleu w-screen flex flex-col relative">
      <Signalbar />
      <NavBar />
      <WhyUs />
      <CampusNews />
      <div className="w-full flex flex-col justify-center items-center min-h-max xl:px-[15%] lg:px-[15%] px-[10%]">
        <h1 className="text-noir font-bold text-3xl mb-4">Upcoming Events</h1>
        <h2 className="mb-10 text-noir text-xl">
          Discover our major upcoming events
        </h2>
        <NextEvents />
      </div>
      <Academics />
      <LifeCampus />
      <ServicesForCompanies />
      <Partenaires />
      <Footer />
    </div>
  );
}
