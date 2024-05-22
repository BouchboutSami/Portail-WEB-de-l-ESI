import React from "react";
import DescriptionText from "../DescriptionText";
const CompanyTrainingOffers = () => {
  return (
    <div className="w-full bg-[#F5F5F5] flex flex-col items-center gap-8">
      <h1 className="font-poppins font-bold mt-8 text-[28px] text-black hover:text-[#185B9C]">
        Training Offers for companies
      </h1>
      <h2 className="mb-10 text-noir text-xl">
        We offer two types of training programs for companies
      </h2>
      <DescriptionText
        imageUrl="/assets/CompanyTraining1.png"
        title="Customized training"
        description="Lorem ipsum dolor sit amet consectetur. Ipsum hendrerit tellus massa ac ut eget sed ullamcorper volutpat. Eget magna etiam sit sed. Non sed posuere eget faucibus aenean ipsum magna enim turpis. Dolor orci odio sed nec quis. Lorem ipsum dolor sit amet consectetur. Ipsum hendrerit tellus massa ac ut eget sed ullamcorper volutpat."
        link="company"
        right={true}
      />
      <DescriptionText
        imageUrl="/assets/CompanyTraining2.png"
        title="Pre-promotion training"
        description="Lorem ipsum dolor sit amet consectetur. Ipsum hendrerit tellus massa ac ut eget sed ullamcorper volutpat. Eget magna etiam sit sed. Non sed posuere eget faucibus aenean ipsum magna enim turpis. Dolor orci odio sed nec quis. Lorem ipsum dolor sit amet consectetur. Ipsum hendrerit tellus massa ac ut eget sed ullamcorper volutpat."
        link="company"
        right={false}
      />
    </div>
  );
};

export default CompanyTrainingOffers;
