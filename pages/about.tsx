import Head from 'next/head';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Content from '../components/indexContent';
import Image from 'next/image';


export default function Home() {
    
  return (
    <div className="">
      <Head>
        <title>AugustusPflege - Über Uns</title>
      </Head>

      <div className="px-4 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9">
            <div className="flex flex-col justify-between gap-8 lg:flex-row">
                <div className="flex flex-col justify-center w-full lg:w-5/12">
                    <h1 className="pb-4 text-3xl font-bold leading-9 text-gray-800 lg:text-4xl">Über Uns</h1>
                    <p className="text-base font-normal leading-6 text-gray-600 ">Wir begannen mit einer einfachen Idee: Einen ambulanten Pflegedienst zu gründen, der eine positive Wirkung auf das Leben Anderer hat. Fragen die uns beschäftigten: Muss denn Pflege immer gleich ablaufen? Wo bleiben die Individualität, Menschenwürde und der respektvolle Umgang mit den Bedürftigen? Ist Menschlichkeit und Wirtschaftlichkeit nicht miteinander zu vereinen? Natürlich ist uns bewusst, dass man nicht alle Wünsche erfüllen kann aber Freude in den Alltag eines betagten Menschen zu bringen erfordert oft nicht viel. Ein Spruch begleitet uns seitdem in unserer Planung und Gestaltung unseres Pflegedienstes <br/><strong><em>„ Worte, leer wie der Wind, bleiben besser ungesagt “</em></strong><br/> Homer 7 od. 8 Jh. V. Chr.</p>
                </div>
                <div className="w-full lg:w-8/12 ">
                    <img className="w-full h-full" src={ process.env.IMG_BASEURL + "53525fb2-9ee6-41aa-9989-9d79ecb0b5b5" } alt="A group of People" />
                </div>
            </div>

            <div className="flex flex-col justify-between gap-8 pt-12 lg:flex-row">
                <div className="flex flex-col justify-center w-full lg:w-5/12">
                    <h1 className="pb-4 text-3xl font-bold leading-9 text-gray-800 lg:text-4xl">Unser Ziel</h1>
                    <p className="text-base font-normal leading-6 text-gray-600 ">Viele ältere Menschen brauchen im Alltag Unterstützung, weil sie sich nicht mehr so gut bewegen können, weil sie vergesslicher werden oder nicht mehr so kräftig sind wie früher. Das ist ziemlich normal, aber viele Leute haben trotzdem Angst, dass sie deswegen in ein Pflegeheim müssen. Nicht immer haben Angehörige Zeit, bei allem zu helfen. Deshalb ist es uns ein Bedürfnis, Ihnen das Wohnen Zuhause zu ermöglichen. Ein wenig Abwechslung in Ihren Alltag zu bringen, ohne Sie zu überfordern. Ein Besuch im Zoo oder botanischen Garten, ein Bummel über den Stadtmarkt oder einfach nur Dasein. Vertrauen schaffen, Sie ein Stück auf Ihrem Lebensweg begleiten. Eine Brücke zu bauen zwischen Jung und Alt, von der beide Seiten profitieren können - auch das liegt uns am Herzen. Haben wir Sie mit unserer Idee angesprochen, dann trauen Sie sich uns anzurufen. <br/>Manchmal muss man über seinen Schatten springen und etwas Neues ausprobieren, um neue Wege entdecken zu können.</p>
                </div>
                <div className="w-full lg:w-8/12 lg:pt-8">
                    <h1 className="pb-4 text-3xl font-bold leading-9 text-center text-gray-800 lg:text-4xl">Unser Team</h1>
                    <div className="grid grid-cols-1 rounded-md shadow-lg md:grid-cols-4 sm:grid-cols-2 lg:gap-4">
                        <div className="flex flex-col items-center justify-center p-4 pb-6">
                            <img className="hidden md:block" src={ process.env.IMG_BASEURL + "e841e03d-1879-4c7b-a851-b152895de92d" } alt="Herbert Baier" />
                            <img className="block md:hidden" src={ process.env.IMG_BASEURL + "1fc24048-f49c-4ad1-bc0b-ec3e73ccbd8e" } alt="Herbert Baier 2" />
                            <p className="mt-4 text-xl font-medium leading-5 text-center text-gray-800">Herbert Baier <br/><span>Geschäftsführer</span></p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 pb-6 md:pb-1">
                            <img className="hidden md:block" src={ process.env.IMG_BASEURL + "5811593b-e634-4dab-af9e-57e99c4c4c01" } alt="Christian Gruber" />
                            <img className="block md:hidden" src={ process.env.IMG_BASEURL + "2f3abb2b-21b4-471a-8f90-bed3ec12fb06" } alt="Christian Gruber 2" />
                            <p className="mt-4 text-xl font-medium leading-5 text-center text-gray-800">Christian Gruber <br/><span>Geschäftsführer u. Pflegedienstleitung</span></p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 pb-6 md:pb-1">
                            <img className="hidden md:block" src={ process.env.IMG_BASEURL + "bf6b363b-67b2-4c52-bc45-25d793c13d6b" } alt="Theresa" />
                            <img className="block md:hidden" src={ process.env.IMG_BASEURL + "f4bd3d1b-c733-4d1f-8d21-56eadead95c8" } alt="Theresa 2" />
                            <p className="mt-4 text-xl font-medium leading-5 text-center text-gray-800">Theresa <br/><span>Stellvertretende Pflegedienstleitung</span></p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 pb-6">
                            <img className="hidden md:block" src={ process.env.IMG_BASEURL + "73aa053d-ee67-4848-8598-a654328d66ee" } alt="Yuki" />
                            <img className="block md:hidden" src={ process.env.IMG_BASEURL + "9c7a83b4-8193-4a80-bb52-04e46c4f7da0" } alt="Yuki 2" />
                            <p className="mt-4 text-xl font-medium leading-5 text-center text-gray-800">Yuki <br/><span>Seniorenbegleithund</span></p>
                        </div>


                        <div className="flex flex-col items-center p-4 text-center">
                          <img src={ process.env.IMG_BASEURL + "73aa053d-ee67-4848-8598-a654328d66ee" } alt="" className="rounded-full h-28 w-28" />
                          <p>Christian Gruber</p>
                          <p className="text-sm text-green-500">Geschäftsführer u. Pflegedienstleiter</p>
                        </div>

                        <div className="flex flex-col items-center p-4 text-center">
                          <img src={ process.env.IMG_BASEURL + "73aa053d-ee67-4848-8598-a654328d66ee" } alt="" className="rounded-full h-28 w-28" />
                          <p>Theresa</p>
                          <p className="text-sm text-green-500">Pflegedienstleiter</p>
                        </div>

                        <div className="flex flex-col items-center p-4 text-center">
                          <img src={ process.env.IMG_BASEURL + "73aa053d-ee67-4848-8598-a654328d66ee" } alt="" className="rounded-full h-28 w-28" />
                          <p>Theresa</p>
                          <p className="text-sm text-green-500">Pflegedienstleiter</p>
                        </div>

                        <div className="flex flex-col items-center p-4 text-center">
                          <img src={ process.env.IMG_BASEURL + "73aa053d-ee67-4848-8598-a654328d66ee" } alt="" className="rounded-full h-28 w-28" />
                          <p>Theresa</p>
                          <p className="text-sm text-green-500">Pflegedienstleiter</p>
                        </div>

                        <div className="flex flex-col items-center p-4 text-center">
                          <img src={ process.env.IMG_BASEURL + "73aa053d-ee67-4848-8598-a654328d66ee" } alt="" className="rounded-full h-28 w-28" />
                          <p>Theresa</p>
                          <p className="text-sm text-green-500">Pflegedienstleiter</p>
                        </div>

                        <div className="flex flex-col items-center p-4 text-center">
                          <img src={ process.env.IMG_BASEURL + "73aa053d-ee67-4848-8598-a654328d66ee" } alt="" className="rounded-full h-28 w-28" />
                          <p>Theresa</p>
                          <p className="text-sm text-green-500">Pflegedienstleiter</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
  ); 
}
