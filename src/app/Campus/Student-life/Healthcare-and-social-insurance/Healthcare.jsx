import DescriptionText from "@/components/DescriptionText";
import DropdownDoc from "@/components/DropdownDoc";
import Map from "@/components/Map";
import React from "react";

const loctable = {
  lat: 36.720257652315446,
  lng: 3.145609716792752,
  name: "Hasan Badi Center",
};
const dossier = [
  { text: "Insurance form", href: "#" },
  { text: "Copy of identity card", href: "#" },
  { text: "School certificate", href: "#" },
  { text: "Certificate of location", href: "#" },
];
const Healthcare = () => {
  return (
    <div className="w-full flex flex-col items-center py-10">
      <p className="text-center px-[10%] font-medium text-2xl mb-10">
        ESI prioritizes your well-being by offering comprehensive health
        insurance plans and fostering a health-conscious campus environment.
      </p>
      <div className="bg-[#F5F5F5] flex flex-col items-center w-full p-10">
        <h2 className="font-bold text-3xl mb-10">ESI's psychotherapist</h2>
        <DescriptionText
          imageUrl="/assets/psycho.png"
          title=""
          description="In line with its commitment to student well-being, ESI offers confidential psychological counseling services on campus through a partnership with a qualified psychotherapist.  ESI's psychotherapist can provide support for a variety of concerns, including academic stress, anxiety, depression, and other issues.  "
          link="/"
          right={true}
          linktext="Psychotherapist’s contact info"
        />
      </div>
      <div className="flex flex-col items-center w-full p-10">
        <h2 className="font-bold text-3xl mb-10">Infirmary</h2>
        <DescriptionText
          imageUrl="/assets/infirmary.png"
          title=""
          description="In line with ESI's commitment to your well-being, our infirmary is staffed by qualified medical professionals to provide professional medical attention for minor illnesses and injuries.  The infirmary is equipped to handle a variety of non-emergency situations and offers basic healthcare services to help you get back on your feet and feeling your best. "
          link="/"
          right={false}
          linktext="Infirmary’s contact info"
        />
      </div>
      <div className="bg-[#F5F5F5] flex flex-col items-start w-full p-10">
        <h2 className="font-bold text-3xl self-center">Social Insurance</h2>
        <DropdownDoc text={"Insurance file"} menuItems={dossier} />
        <h3 className="text-bleu text-xl font-bold">
          {" "}
          Geographical location of the CNAS
        </h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.102885673336!2d3.1407506817404935!3d36.72009020072922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e53e358976901%3A0xe3c5f594359fea89!2sCNAS%20Hassan%20BADI%20El%20Harrach!5e0!3m2!1sfr!2sdz!4v1719021146781!5m2!1sfr!2sdz"
          width="320"
          height="320"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Healthcare;
