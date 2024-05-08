import { FaEye, FaLanguage } from "react-icons/fa";
import Link from "next/link";

const Signalbar = () => {
  return (
    <div className="mx-0 my-0  px-5  text-xs flex justify-between bg-[#185B9C] text-white h-7">
      <div className="flex items-center gap-3">
        <FaEye style={{ width: "15px", height: "15px" }} />
        <span>Anti-Plagiarism</span>
      </div>
      <div>
        <Link href="/translate">
          <FaLanguage style={{ width: "25px", height: "25px" }} />
        </Link>
      </div>
    </div>
  );
};

export default Signalbar;
