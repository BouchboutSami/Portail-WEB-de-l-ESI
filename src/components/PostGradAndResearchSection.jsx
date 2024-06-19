import React from "react";
import CardPostGrad from "@/components/CardPostGrad";

const PostGradAndResearchSection = () => {
  return (
    <div className="w-full bg-[#F5F5F5] flex flex-col items-center gap-4 pb-16">
      <a href="/Postgraduation-Research">
        <h1 className="font-poppins font-bold mt-8 text-[36px] text-black hover:text-[#185B9C]">
          Post graduation & Research
        </h1>
      </a>
      <div className="text-black font-medium font-poppins text-md text-center mb-4">
        Take a look at our research facilities
      </div>
      <div class="flex justify-between mx-4 space-x-16">
        <CardPostGrad
          imageSrc="/assets/LMCS.png"
          title={"Systems Design Methods Laboratory (LMCS)"}
          buttonLink={"/Postgraduation-Research/Research/LMCS"}
        />
        <CardPostGrad
          imageSrc="/assets/LCSI.png"
          title={"Laboratory of Communication in Computer Systems (LCSI)"}
          buttonLink={"/Postgraduation-Research/Research/LCSI"}
        />
      </div>
    </div>
  );
};
export default PostGradAndResearchSection;
