"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useNavigation } from "react-router-dom";

const Page = () => {
  const router = useRouter();
  router.push(
    "http://localhost:3000/Campus/Student-life/Performances-and-success"
  );

  return <div></div>;
};

export default Page;
