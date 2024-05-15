<<<<<<< HEAD
import Button from "./components/Button";
import ButtonIcon from "./components/ButtonIcon";
import Stats from "./components/Stats";
import Breadcrumb from "./components/Breadcrumb";
import Academics from "./components/Academics";
import LifeCampus from "./components/LifeCampus";
export default function Home() {
  const table = [
    {
      title: 'Professors',
      stats: '4',
    },
    {
      title: 'Lecturers',
      stats: '20',  
    },
    {
      title: 'Doctoral candidates',
      stats: '60+',
    }
  ];

  const Buttontitle = 'Hello world!';
  const items = [
    { label: 'Home', url: '/' },
    { label: 'Products', url: '/products' },
    { label: 'Category', url: '/category' },
    { label: 'Current Page' },
  ];
  return (
    <div className="font-poppins text-blue">
      <Stats table={table} />
      <Button title={Buttontitle} />
      <ButtonIcon title={Buttontitle}/>
      <div className="container mx-auto py-4">
      <Breadcrumb/>
      </div>
      <Academics/>
      <LifeCampus/>
=======
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
>>>>>>> c5e1e7b7a28e77722a1a7c7bc9cfe22786387925
    </div>
  );
}
