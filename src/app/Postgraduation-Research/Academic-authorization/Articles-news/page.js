"use client";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import ArticleCard from "@/components/ArticleCard";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import PostImage from "@/components/PostImage";
import PostSideBar from "@/components/PostSideBar";

const page = () => {
  return (
    <BrowserRouter>
      <div className=" w-screen">
        <NavBar />
        <PostImage
          image="/assets/postGraduationResearch.jpg"
          titre="Articles News"
          details="Explore academic authorization at ESI. Join us to keep up to date with all the latest accreditations and news."
        />
        <div className="flex ">
          <PostSideBar />
          <div className=" w-full items-center text-center">
            Articles news
            <ArticleCard
              imageUrl={"/assets/ArticlecardPG.png"}
              title={"FAQ: Journée mondiale de l’alimentation"}
              description={
                "Organized by the Food and Agriculture Organization of the United Nations  "
              }
              link={
                "https://www.esi.dz/wp-content/uploads/2022/09/La-JourneeMondialeDelAlimentation.pdf"
              }
              linkText={"World Food Day 2022 Concept Note Fr"}
            />
            <ArticleCard
              imageUrl={"/assets/ArticlecardPG.png"}
              title={"FAQ: Journée mondiale de l’alimentation"}
              description={
                "Organized by the Food and Agriculture Organization of the United Nations  "
              }
              link={
                "https://www.esi.dz/wp-content/uploads/2022/09/La-JourneeMondialeDelAlimentation.pdf"
              }
              linkText={"World Food Day 2022 Concept Note Fr"}
            />
            <ArticleCard
              imageUrl={"/assets/ArticlecardPG.png"}
              title={"FAQ: Journée mondiale de l’alimentation"}
              description={
                "Organized by the Food and Agriculture Organization of the United Nations  "
              }
              link={
                "https://www.esi.dz/wp-content/uploads/2022/09/La-JourneeMondialeDelAlimentation.pdf"
              }
              linkText={"World Food Day 2022 Concept Note Fr"}
            />
            <ArticleCard
              imageUrl={"/assets/ArticlecardPG.png"}
              title={"FAQ: Journée mondiale de l’alimentation"}
              description={
                "Organized by the Food and Agriculture Organization of the United Nations  "
              }
              link={
                "https://www.esi.dz/wp-content/uploads/2022/09/La-JourneeMondialeDelAlimentation.pdf"
              }
              linkText={"World Food Day 2022 Concept Note Fr"}
            />
            <ArticleCard
              imageUrl={"/images/Event2.png"}
              title={"FAQ: Journée mondiale de l’alimentation"}
              description={
                "Organized by the Food and Agriculture Organization of the United Nations  "
              }
              link={
                "https://www.esi.dz/wp-content/uploads/2022/09/La-JourneeMondialeDelAlimentation.pdf"
              }
              linkText={"World Food Day 2022 Concept Note Fr"}
            />
            <ArticleCard
              imageUrl={"/images/Event2.png"}
              title={"FAQ: Journée mondiale de l’alimentation"}
              description={
                "Organized by the Food and Agriculture Organization of the United Nations  "
              }
              link={
                "https://www.esi.dz/wp-content/uploads/2022/09/La-JourneeMondialeDelAlimentation.pdf"
              }
              linkText={"World Food Day 2022 Concept Note Fr"}
            />
            <p className="mb-4"></p>
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default page;
