"use client";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./Components/NavBar";
import CampusNews from "./Components/CampusNews";

export default function Home() {
  return (
    <BrowserRouter>
      <div className=" w-screen">
        <NavBar />
        <CampusNews/>
      </div>
    </BrowserRouter>
  );
}
