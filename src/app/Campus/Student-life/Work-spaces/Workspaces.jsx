import ButtonIcon from "@/components/Buttons/ButtonIcon";
import DescriptionText from "@/components/DescriptionText";
import React from "react";

const Workspaces = () => {
  return (
    <div className="w-full flex flex-col items-center py-10">
      <p className="text-center px-[10%] font-medium text-2xl mb-10">
        Whether you prefer quiet concentration or dynamic teamwork, our
        adaptable spaces cater to diverse learning styles. Find your flow and
        achieve your goals in a setting that fosters both productivity and
        connection.
      </p>
      <div className="bg-[#F5F5F5] flex flex-col items-start w-full p-10">
        <h2 className="font-bold text-3xl mb-10 self-center">ESI Fablab</h2>
        <h3 className="font-bold text-bleu text-xl mb-4">Presentation</h3>
        <p className="mb-6">
          ESI-FabLab, an open space dedicated to digital manufacturing; based on
          interdisciplinarity, learning by doing, intended mainly for ESI
          students of all categories whose objective is to create an environment
          with technological tools allowing different users to put innovative
          projects on the ground with utility palpable and concrete.
          <br />
          <br />
          Furthermore, Esi-FabLab aims to create an environment for
          collaboration, sharing of knowledge and new ideas. It aims to be a
          place of innovation and collaboration.
        </p>
        <div className="mb-10 self-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Rdw-yeaQM6o"
            title="ESI FabLab Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex flex-row justify-around w-full my-10">
          <div className="flex flex-col items-start w-1/2">
            <h4 className="font-bold text-lg text-bleu mb-4">Gallery</h4>
            <img
              src="/assets/carousel.png"
              alt="Gallery"
              className="w-80 h-auto mb-4 self-center"
            />
          </div>
          <div className="flex flex-col items-start w-1/2">
            <h4 className="font-bold text-bleu text-lg mb-4">Material</h4>
            <p className="mb-10">
              ESI-FabLab has EQUIPMENT made up of a set of equipment and
              components. This list is evolving, so it is advisable to consult
              it before choosing the equipment and components to use.
            </p>
            <ButtonIcon title={"Consult the catalog"} link={"/"} />
          </div>
        </div>
        <div className="w-full flex flex-col items-start">
          <h3 className="font-bold text-bleu text-xl mb-4">Registration</h3>
          <p className="mb-4">
            To register, you must first read the Charter, then complete the
            Registration Form where it is imperative to:
          </p>
          <ul className="list-disc list-inside text-left mb-4">
            <li>Check the box: charter read and approved</li>
            <li>Identify the user and user members of the project</li>
            <li>
              Describe the project, specifying the different stages of
              completion, the equipment and the schedule
            </li>
          </ul>
          <p className="mb-4">
            Once you have registered and the project has been submitted, you
            will receive a validation response at the latest one week later. In
            the event of a favorable response, you must contact ESI-FabLab to
            reserve a slot and otherwise you can reformulate your project by
            making comments and resubmit the project.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center w-full p-10">
        <h2 className="font-bold text-3xl mb-10">Library</h2>
        <DescriptionText
          imageUrl="/assets/library.png"
          title=""
          description="The library of ESI was created in 1969. It is a specialized library in the field of computer science. The library offers a wide range of services to users, including access to a large collection of documents."
          link="/University/ESI-Library"
          right={true}
          linktext="Learn More"
        />
      </div>
    </div>
  );
};

export default Workspaces;
