import React from 'react';
import Image from 'next/image';

class Banner extends React.Component {
  render(){
    return(
      <div className="relative z-10 w-full bg-green-500 bg-center filter drop-shadow-xl">
        <Image src={process.env.NEXT_PUBLIC_IMG_BASEURL + "53525fb2-9ee6-41aa-9989-9d79ecb0b5b5"} width="1900" height="636" className="object-cover" alt="Banner Image" />
      </div>
    )
  }
}

export default Banner;
