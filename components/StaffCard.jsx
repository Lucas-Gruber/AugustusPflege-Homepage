import Image from "next/image";

function StaffCard(props) {
  return (
    <div className="flex flex-col items-center p-4 text-center">
      <Image
        src={process.env.IMG_BASEURL + props.potrait}
        alt={props.name + " Potrait"}
        width={112}
        height={112}
        className="rounded-full w-28 h-28 mb-1.5"
      />
      <p>{props.name}</p>
      <p className="text-sm text-green-500">{props.stelle}</p>
    </div>
  );
}

function StaffCardBig(props) {
  return (
    <div className="flex flex-col items-center justify-center p-4 pb-6">
      <div className="hidden md:block">
        <Image
          className="rounded"
          src={process.env.IMG_BASEURL + props.potrait}
          alt={props.name + "Bild1"}
          width={162}
          height={186}
        />
      </div>
      <div className="block md:hidden">
        <Image
          className="rounded"
          src={process.env.IMG_BASEURL + props.potrait2}
          alt={props.name + "Bild2"}
          width={311}
          height={186}
        />
      </div>

      <p className="mt-4 text-xl font-medium leading-5 text-center text-gray-800 md:text-lg">
        {props.name} <br />
        <span className="text-green-500 md:text-base">{props.stelle}</span>
      </p>
    </div>
  );
}

export { StaffCard, StaffCardBig };
