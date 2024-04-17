import Footer from "@/components/Footer";
import NextEvents from "@/components/NextEvents/NextEvents";
import Partenaires from "@/components/Partenaires/Partenaires";

export default function Home() {
  return (
    <div className="font-poppins text-bleu w-screen flex flex-col relative">
      <div className="w-full flex justify-center items-center min-h-max xl:px-[15%] lg:px-[15%] px-[10%]">
        <NextEvents />
      </div>
      <Partenaires />
      <Footer />
    </div>
  );
}

