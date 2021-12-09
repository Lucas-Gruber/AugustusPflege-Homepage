import Head from 'next/head';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Content from '../components/indexContent';
import Image from 'next/image';
import { Directus, ID } from '@directus/sdk';
import { useEffect, useState } from 'react';
import { StaffCard, StaffCardBig } from '../components/StaffCard';
import { StaffCardLoading, TextLoading } from '../components/Loadings';

const sdk = new Directus<Collections>(process.env.API_BASEURL);

type Mitarbeiter = {
  id: ID;
  name: string;
  stelle: string;
  potrait: string;
}
type About = {
  id: ID;
  uber_uns: string;
  unser_ziel: string;
}
type Collections = {
  Member: Mitarbeiter;
  About: About;
}

const fuehrung = [
  { name: 'Baier Herbert', stelle: 'Geschäftsführer', potrait: 'e841e03d-1879-4c7b-a851-b152895de92d', potrait2: '1fc24048-f49c-4ad1-bc0b-ec3e73ccbd8e' },
  { name: 'Gruber Christian', stelle: 'Gschf. u. PDL', potrait: '5811593b-e634-4dab-af9e-57e99c4c4c01', potrait2: '2f3abb2b-21b4-471a-8f90-bed3ec12fb06' },
  { name: 'Dreier Theresa', stelle: 'Stellv. PDL', potrait: 'bf6b363b-67b2-4c52-bc45-25d793c13d6b', potrait2: 'f4bd3d1b-c733-4d1f-8d21-56eadead95c8' },
  { name: 'Pepper', stelle: 'Seniorenbegleithund', potrait: '73aa053d-ee67-4848-8598-a654328d66ee', potrait2: '9c7a83b4-8193-4a80-bb52-04e46c4f7da0' },
]

export default function Home() {
  const [mitarbeiterData, setMitarbeiterData] = useState([]);
  const [textData, setTextData] = useState({});
  const [isMitarbeiterLoading, setIsMitarbeiterLoading] = useState(false);
  const [isTextLoading, setIsTextLoading] = useState(false);

  useEffect(() => {
    setIsTextLoading(true);
    setIsMitarbeiterLoading(true);
    async function fetch() {
      await sdk.auth.login({
        email: process.env.API_LOGIN_EMAIL,
        password: process.env.API_LOGIN_PASS,
      });
      const rest = (await sdk.singleton("about").read());
      const res = (await sdk.items("mitarbeiter").readMany()).data;

      setTimeout(() => {
        setIsTextLoading(false);
        setTextData(rest);
      }, 2000)

      setTimeout(() => {
        setIsMitarbeiterLoading(false);
        setMitarbeiterData(res);
      }, 2000)
    }
    
    fetch();
  }, []);

  return (
    <div className="">
      <Head>
        <title>AugustusPflege - Über Uns</title>
      </Head>

      <div className="px-4 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9">
            <div className="flex flex-col justify-between gap-8 lg:flex-row">
                <div className="flex flex-col justify-center w-full lg:w-5/12">
                    <h1 className="pb-4 text-3xl font-bold leading-9 text-gray-800 lg:text-4xl">Über Uns</h1>
                    {/* @ts-ignore */}
                    { isTextLoading ? (<TextLoading />) : (<div className="text-base font-normal leading-6 text-gray-600" dangerouslySetInnerHTML={ {__html: textData.uber_uns} }></div>) }
                </div>
                <div className="w-full lg:w-8/12 ">
                    <img className="object-scale-down w-full h-full" src={ process.env.IMG_BASEURL + "53525fb2-9ee6-41aa-9989-9d79ecb0b5b5" } alt="A group of People" />
                </div>
            </div>

            <div className="flex flex-col justify-between gap-8 pt-12 lg:flex-row">
                <div className="flex flex-col justify-center w-full lg:w-5/12">
                    <h1 className="pb-4 text-3xl font-bold leading-9 text-gray-800 lg:text-4xl">Unser Ziel</h1>
                    {/* @ts-ignore */}
                    { isTextLoading ? (<TextLoading />) : (<div className="text-base font-normal leading-6 text-gray-600" dangerouslySetInnerHTML={ {__html: textData.unser_ziel} }></div>) }
                </div>
                <div className="w-full lg:w-8/12 lg:pt-8">
                    <h1 className="pb-4 text-3xl font-bold leading-9 text-center text-gray-800 lg:text-4xl">Unser Team</h1>
                    <div className="grid grid-cols-1 rounded-md shadow-lg md:grid-cols-4 sm:grid-cols-2 lg:gap-4">
                        {fuehrung.map((data) => (
                          <StaffCardBig key={ data.name } potrait={ data.potrait } potrait2={ data.potrait2 } name={ data.name } stelle={ data.stelle } />
                        ))}

                        { isMitarbeiterLoading ? ( <StaffCardLoading /> ) : ''}
                        {mitarbeiterData.map((data) => (
                          <StaffCard key={ data.id } potrait={ data.potrait } name={ data.name } stelle={ data.stelle } />
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </div>
  ); 
}
