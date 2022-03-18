import Image from "next/image";
import { ListArrowIcon } from "./Icons";
import Modal from "./Modal";

const JobCards = ({ data }) => {
  return (
    <>
      {data.map((data) => (
        <JobsCard
          key={data.id}
          title={data.titel}
          aufgaben={data.aufgaben}
          beschreibung={data.beschreibung}
        />
      ))}
    </>
  );
};

function JobsCard(props) {
  return (
    <div className="relative w-full h-full p-5 bg-white rounded-md shadow-lg">
      <span>
        <div className="p-2 mb-5 bg-gray-200 rounded-full w-9 h-9">
          <Image
            src="https://icon-library.com/images/jobs-icon-png/jobs-icon-png-17.jpg"
            alt="Services-Icon"
            width={24}
            height={24}
          />
        </div>
      </span>
      <h1 className="pb-4 text-2xl font-semibold">{props.title}</h1>
      <h2 className="font-bold">Aufgaben:</h2>
      <div className="my-5">
        {props.aufgaben.map((data) => (
          <div
            key={data.Aufgabe}
            className="flex items-center w-full pb-4 space-x-3 cursor-pointer dark:border-gray-700"
          >
            <div>
              <ListArrowIcon />
            </div>
            <h4 className="text-gray-900 text-md dark:text-gray-100">
              {data.Aufgabe}
            </h4>
          </div>
        ))}
      </div>
      <div className="absolute left-0 right-0 bottom-5">
        <div className="m-auto">
          <Modal
            buttontext="Weitere Details"
            modalcontent={props.beschreibung}
            modalclose="Schließen"
          />
        </div>
      </div>
    </div>
  );
}

export default JobCards;
