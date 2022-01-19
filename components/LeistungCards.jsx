import { useEffect, useState } from "react";
import { ListArrowIcon } from "./Icons";
import { LeistungsCardLoading } from "./Loadings";

const LeistungCards = ({data}) => {
  return (
    <>
      {data.map((data) => (<LeistungsCard key={data.id} title={data.titel} leistungen={data.leistungen} />))}
    </>
  );
}

function LeistungsCard(props) {
  return (
    <div className="relative w-full h-full p-5 bg-white rounded-md shadow-lg">
      <span>
        <img
          className="p-2 mb-5 bg-gray-200 rounded-full"
          src="https://i.ibb.co/HFC1hqn/people-1.png"
          alt="home-1"
        />
      </span>
      <h1 className="pb-4 text-2xl font-semibold">
        { props.title }
      </h1>
      <div className="my-5">
        {props.leistungen.map((data) => (
          <div key={data.name} className="flex items-center w-full pb-4 space-x-3 cursor-pointer dark:border-gray-700">
            <div>
              <ListArrowIcon  />
            </div>
            <h4 className="text-gray-900 text-md dark:text-gray-100">
              {data.name}
            </h4>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LeistungCards;
