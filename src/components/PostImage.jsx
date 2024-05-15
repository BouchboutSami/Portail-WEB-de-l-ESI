import React from "react";
import Breadcrumb from "./Breadcrumb";

const PostImage = (props) => {
  return (
    <div className="w-full h-[500px] relative pl-[5%]">
      <img
        src={props.img}
        className="object-cover w-full h-full absolute inset-0"
      />
      <div className="absolute bottom-0 left-0 w-full opacity-90 h-[300px] bg-gradient-to-t from-black " />
      <div className="absolute bottom-8 w-full font-poppins text-white ">
        <div className="flex flex-col">
          <h1 className="text-[48px] font-extrabold text-white">
            {props.titre}
          </h1>
          <p className="text-[16px] font-extralight text-white w-[600px]">
            {props.details}
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 translate-y-[50%]">
        <Breadcrumb />
      </div>
    </div>
  );
};

export default PostImage;
