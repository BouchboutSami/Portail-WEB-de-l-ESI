import React from "react";
import DescriptionText from "./DescriptionText";
const NewsAlumni = () => {
  return (
    <div className="w-full bg-[#F5F5F5] flex flex-col items-center gap-8">
      <h1 className="font-poppins font-bold mt-8 text-[28px] text-black hover:text-[#185B9C]">
        News
      </h1>
      <h2 className="mb-10 text-noir text-xl">
        Our news 
      </h2>
      <DescriptionText
        imageUrl="/assets/Pre-promotion_Training.png"
        title="Preparatory cycle training"
        description="Lorem ipsum dolor sit amet consectetur. Ipsum hendrerit tellus massa ac ut eget sed ullamcorper volutpat. Eget magna etiam sit sed. Non sed posuere eget faucibus aenean ipsum magna enim turpis. Dolor orci odio sed nec quis. Lorem ipsum dolor sit amet consectetur. Ipsum hendrerit tellus massa ac ut eget sed ullamcorper volutpat."
        link="studies"
        right={true}
      />
      <DescriptionText
        imageUrl="/assets/Custumized_Training.png"
        title="Preparatory cycle training"
        description="Lorem ipsum dolor sit amet consectetur. Ipsum hendrerit tellus massa ac ut eget sed ullamcorper volutpat. Eget magna etiam sit sed. Non sed posuere eget faucibus aenean ipsum magna enim turpis. Dolor orci odio sed nec quis. Lorem ipsum dolor sit amet consectetur. Ipsum hendrerit tellus massa ac ut eget sed ullamcorper volutpat."
        link="studies"
        right={false}
      />
      <DescriptionText
        imageUrl="/assets/Pre-promotion_Training.png"
        title="Preparatory cycle training"
        description="Lorem ipsum dolor sit amet consectetur. Ipsum hendrerit tellus massa ac ut eget sed ullamcorper volutpat. Eget magna etiam sit sed. Non sed posuere eget faucibus aenean ipsum magna enim turpis. Dolor orci odio sed nec quis. Lorem ipsum dolor sit amet consectetur. Ipsum hendrerit tellus massa ac ut eget sed ullamcorper volutpat."
        link="studies"
        right={true}
      />
     <DescriptionText
        imageUrl="/assets/Pre-promotion_Training.png"
        title="Preparatory cycle training"
        description="Lorem ipsum dolor sit amet consectetur. Ipsum hendrerit tellus massa ac ut eget sed ullamcorper volutpat. Eget magna etiam sit sed. Non sed posuere eget faucibus aenean ipsum magna enim turpis. Dolor orci odio sed nec quis. Lorem ipsum dolor sit amet consectetur. Ipsum hendrerit tellus massa ac ut eget sed ullamcorper volutpat."
        link="studies"
        right={false}
      />
    </div>
  );
};

export default NewsAlumni;