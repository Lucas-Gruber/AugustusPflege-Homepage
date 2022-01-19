function TextLoading() {
  return (
    <>
      <div className="text-base font-normal leading-6 bg-gray-300 animate-pulse rounded w-2/5 h-3.5 mb-2"></div>
      <div className="text-base font-normal leading-6 bg-gray-300 animate-pulse rounded w-3/5 h-3.5 mb-1.5"></div>
      <div className="text-base font-normal leading-6 bg-gray-300 animate-pulse rounded w-4/5 h-3.5 mb-1.5"></div>
      <div className="text-base font-normal leading-6 bg-gray-300 animate-pulse rounded w-5/6 h-3.5 mb-1.5"></div>
      <div className="text-base font-normal leading-6 bg-gray-300 animate-pulse rounded w-5/6 h-3.5 mb-1.5"></div>
      <div className="text-base font-normal leading-6 bg-gray-300 animate-pulse rounded w-11/12 h-3.5 mb-1.5"></div>
      <div className="text-base font-normal leading-6 bg-gray-300 animate-pulse rounded w-full h-3.5 mb-1.5"></div>
      <div className="text-base font-normal leading-6 bg-gray-300 animate-pulse rounded w-full h-3.5 mb-1.5"></div>
      <div className="text-base font-normal leading-6 bg-gray-300 animate-pulse rounded w-full h-3.5 mb-1.5"></div>
      <div className="text-base font-normal leading-6 bg-gray-300 animate-pulse rounded w-full h-3.5 mb-1.5"></div>
      <div className="text-base font-normal leading-6 bg-gray-300 animate-pulse rounded w-full h-3.5 mb-1.5"></div>
      <div className="text-base font-normal leading-6 bg-gray-300 animate-pulse rounded w-full h-3.5"></div>
    </>
  );
}

function StaffCardLoading() {
  return (
    <div className="flex flex-col items-center p-4 text-center animate-pulse">
      <div className="bg-green-400 rounded-full h-28 w-28"></div>
      <div className="h-1.5"></div>
      <div className="w-5/6 h-3.5 bg-green-400 rounded"></div>
      <div className="h-2"></div>
      <div className="w-4/6 h-2.5 bg-green-400 rounded"></div>
    </div>
  );
}

function LeistungsCardLoading() {
  return (
    <div className="relative w-full h-full p-5 bg-white rounded-md shadow-lg">
      <span>
        <div className="w-10 h-10 bg-gray-300 rounded-full animate-pulse"></div>
      </span>
      <div className="w-11/12 h-6 my-5 mb-10 text-base font-normal leading-6 bg-gray-300 rounded animate-pulse"></div>
      <div className="my-5">
        <div className="w-8/12 h-4 my-6 text-base font-normal leading-6 bg-gray-300 rounded animate-pulse" />
        <div className="w-8/12 h-4 my-6 text-base font-normal leading-6 bg-gray-300 rounded animate-pulse" />
        <div className="w-8/12 h-4 my-6 text-base font-normal leading-6 bg-gray-300 rounded animate-pulse" />
        <div className="w-8/12 h-4 my-6 text-base font-normal leading-6 bg-gray-300 rounded animate-pulse" />
      </div>
    </div>
  );
}

export { StaffCardLoading, TextLoading, LeistungsCardLoading };
