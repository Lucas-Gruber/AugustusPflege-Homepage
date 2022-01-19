function StaffCard(props) {
  return (
    <div className="flex flex-col items-center p-4 text-center">
      <img src={ process.env.IMG_BASEURL + props.potrait } alt="" className="rounded-full w-28 h-28 mb-1.5" />
      <p>{ props.name }</p>
      <p className="text-sm text-green-500">{ props.stelle }</p>
    </div>
  )
}

function StaffCardBig(props) {
  return (
    <div className="flex flex-col items-center justify-center p-4 pb-6">
        <img className="hidden md:block" src={ process.env.IMG_BASEURL + props.potrait } alt={ props.name + "Bild1" } />
        <img className="block md:hidden" src={ process.env.IMG_BASEURL + props.potrait2 } alt={ props.name + "Bild2" } />
        <p className="mt-4 text-xl font-medium leading-5 text-center text-gray-800 md:text-lg">{ props.name } <br/><span className="text-green-500 md:text-base">{ props.stelle }</span></p>
    </div>
  )
}

export { StaffCard, StaffCardBig};