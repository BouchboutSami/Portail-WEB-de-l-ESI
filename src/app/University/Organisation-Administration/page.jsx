"use client";
import Button from "@/components/Buttons/Button";
import Footer from "@/components/Footer";
import HeadingUnderlined from "@/components/HeadingUnderlined";
import ImageLanding from "@/components/ImageLanding";
import ImgSlider from "@/components/Imgslider";
import ListComp from "@/components/ListComp";
import NavBar from "@/components/NavBar";
import UniSideBar from "@/components/UniSideBar";
import React from "react";
import { BrowserRouter } from "react-router-dom";
const page = () => {
    const AdminOrgapoints = [
        "Management",
        "General Secretariat",
        "Deputy Directorate of Education, Diplomas, and Continuing Education",
        "Deputy Directorate of Doctoral Training, Scientific Research, Technological Development, Innovation, and Entrepreneurship Promotion",
        "Deputy Directorate of Information Systems, Communication, and External Relations",
        "Library"
    ];
    const departments = [
        "Department of Preparatory Training",
        "Department of Information and Computer Systems Engineering",
        "School scientific council",
        "Departmental scientific committee",
        "Quality assurance unit",
        "TICE cell"
    ];

    const Structdepartments = [
        "CPI Department",
        "CS Department",
        "Internship service",
        "Cultural and scientific service",
        "Diploma Service",
        "Schooling service"
    ];
    const DREFCStruct = [
        "External Relations Department",
        "Continuing Training Department",
        "Statistics and External Communication Department",
    ]
    const imagesLib = [
        "/assets/Library1.png",
        "/assets/Library2.png",
        "/assets/Library3.png",
    ]
    return (
        <BrowserRouter>
            <div className="overflow-hidden">
                <NavBar />
                <ImageLanding
                    imageUrl="/assets/OrganisationAdministrationHeader.png"
                    title="Organisation & Administration"
                />
                <div className="flex">
                    <UniSideBar />
                    <div className="w-full">
                        {/* Code here ! */}
                        <div className="px-[100px] w-full my-12 items-center">
                            <div className="">
                                <h1 className="font-poppins font-bold text-[24px] text-[#185B9C]">
                                    ORGANIZATION & MANAGEMENT
                                </h1>
                                <div className="text-black font-light font-poppins text-[18px] mb-4">
                                    The ESI currently has 1,206 students in the graduation phase, accompanied by 134 doctoral students who are continuing their research. The teaching staff is made up of 120 permanent members dedicated to teaching and research. In addition, the establishment benefits from the contribution of 175 workers who support various administrative and logistical activities, thus contributing to the efficiency and vitality of the institution.
                                </div>
                                <ListComp heading={"Administrative organisation"} points={AdminOrgapoints} />
                                <ListComp heading={"Educational and scientific organization"} points={departments} />
                                <div>
                                <h1 className="font-poppins font-bold text-[24px] text-[#185B9C] mb-4">
                                    STRUCTURES
                                </h1>
                                <div className="flex flex-row items-center justify-center">
                                    <div className="flex-grow">
                                        <ListComp
                                            heading={"Directorate of teaching"}
                                            paragraph={"It is the structure which manages the educational and administrative aspects of graduate training, that is to say engineering training. It includes several structures :"}
                                            points={Structdepartments}
                                        />
                                    </div>
                                    <div className="flex-shrink-0">
                                        <img className="object-contain h-full" src="/assets/StrcutureOrganisationAdmin.png" />
                                    </div>
                                </div>
                                <ListComp heading={"Department of External Relations and Continuing Training (DREFC)"} paragraph={"Its mission is to develop the image of the School by increasing the number of framework partnership agreements with the socio-economic community, the creation of continuing education offers and other services, as well as the keeping of statistics and their communication internally, to the hierarchy, to the board of directors, management board, supervision, partners and finally the press organs. It is structured into three services and a secretariat:"} points={DREFCStruct} />
                                <Button title={"Learn more"}/>
                                </div>
                                <div className="mt-4">
                                <ListComp  heading={"The IT Resources Department"} paragraph={"Made up of two services: the “network management and maintenance” service and the “teaching room management” service to ensure the practical work of our students."} points={[]}/>
                                <ImgSlider images={imagesLib}/>
                                </div>
                                <h1 className="font-poppins font-bold text-[24px] text-[#185B9C] mb-4">
                                    CONTACT BOOK
                                </h1>
                                <p>Discover our complete directory bringing together our permanent teachers as well as our dedicated staff, each bringing unique expertise in their respective fields.</p>
                                <div className="flex flex-row justify-center gap-16 mt-4">
                                    <Button title={"Staff's directory"}/>
                                    <Button title={"Teachers' directory"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
};

export default page;
