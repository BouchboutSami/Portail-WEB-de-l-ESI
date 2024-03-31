import Footer from "@/components/Footer";
import NextEvents from "@/components/NextEvents/NextEvents";

export default function Home() {
  return (
    <div className="font-poppins text-bleu w-screen min-h-screen flex flex-col relative gap-10">
      <div className="w-full flex justify-center items-center min-h-max px-[25%]">
        <NextEvents />
      </div>
      <Footer />
    </div>
  );
}
