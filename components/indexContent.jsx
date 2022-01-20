import Image from 'next/image';

export default function indexContent() {
  return (
    <>
      <div className="px-4 py-20 2xl:px-0 lg:px-12 2xl:mx-auto 2xl:container bg-gray-50" style={{ height: 1000 }}>
        <div className="items-center justify-between w-full md:flex bg-gray-50">
          <div className="w-full xl:w-1/3 md:w-1/2">
            <h1 role="heading" className="text-4xl font-bold leading-tight text-gray-800 focus:outline-none md:w-60 md:text-6xl">
              Über<span className="italic font-normal"> Schrift </span>
            </h1>
            <p role="contentinfo" className="pr-12 mt-8 text-base leading-6 text-gray-600 focus:outline-none 2xl:pr-24 xl:pr-0">
                Wohnen ist ein Lebensbereich mit essentieller Bedeutung für alle Menschen - gleichzeitig ein Grundbedürfnis alltäglichen Lebens.
                Unsere Wohnverhältnisse sind entscheidend, ob es uns gut geht und ob wir uns wohl fühlen.
                Im Alter allerdings wird die Wohnung immer mehr zum Lebensmittelpunkt.
                Wenn ihre Hände nicht mehr so geschickt sind wie früher, Ihr Beine Sie nicht mehr tragen wollen,
                Ihre Sehkraft nachlässt und die Erinnerung an früher verblassen beginnt, dann weicht die Jugend dem Alter.
              
            </p>
              <div className="mt-10">
                <button className="flex items-center p-1 text-xl font-medium leading-5 text-gray-800 md:p-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
                  Leistungen
                  <svg className="ml-8" width={45} height={40} viewBox="0 0 45 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M11.2113 33.7887C11.0161 33.9839x 11.0157 34.3009 11.2157 34.4911C13.956 37.0978 17.3821 38.8765 21.0982 39.6157C24.9778 40.3874 28.9991 39.9913 32.6537 38.4776C36.3082 36.9638 39.4318 34.4004 41.6294 31.1114C43.827 27.8224 45 23.9556 45 20C45 16.0444 43.827 12.1776 41.6294 8.8886C39.4318 5.59961 36.3082 3.03616 32.6537 1.52241C28.9991 0.00865715 24.9778 -0.38741 21.0982 0.384294C17.3821 1.12346 13.956 2.90221 11.2157 5.50886C11.0157 5.69911 11.0161 6.01609 11.2113 6.21127C11.4065 6.40645 11.7225 6.4059 11.9227 6.21592C14.523 3.74892 17.7711 2.06527 21.2932 1.36468C24.9789 0.631541 28.7993 1.00781 32.2711 2.44591C35.743 3.88401 38.7105 6.31934 40.7983 9.44394C42.8861 12.5685 44.0004 16.2421 44.0004 20C44.0004 23.7579 42.8861 27.4315 40.7983 30.5561C38.7105 33.6807 35.743 36.116 32.2711 37.5541C28.7993 38.9922 24.9789 39.3685 21.2932 38.6353C17.7711 37.9347 14.523 36.2511 11.9227 33.7841C11.7225 33.5941 11.4065 33.5935 11.2113 33.7887Z"
                      fill="#1F2937"
                    />
                    <path d="M1 20H29" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21 28L29 20" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21 12L29 20" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="w-full xl:w-4/6 md:w-1/2 xl:pl-48">
              <p role="contentinfo" className="mt-10 mb-8 text-base leading-6 text-gray-600 focus:outline-none md:mt-0">
              Das alles ist wirklich kein grund, um ihr geliebtes Zuhause zu verlassen.
              Lehnen Sie sich zurück.
              Lassen sie es zu, das wir Sie durch den Herbst des Lebens begleiten.
              Sie bleiben in ihrem sozialen Umfeld und müssen nicht mit neuen Situationen belastet werden.
              Sprechen Sie uns an, wir nehmen uns Zeit und beraten Sie und Ihre Angehörigen gerne.
              </p>
            <div className="w-full">
              <Image src={process.env.NEXT_PUBLIC_IMG_BASEURL + "3667a915-da36-4294-8ed8-826309c86ccc"} alt="Hände Bild" width="1280" height="853" className="object-cover w-full md:w-full sm:w-1/2" />
              <div className="flex items-center mt-8">
                <p role="contentinfo" className="text-xl font-semibold leading-5 text-gray-700 focus:outline-none">
                  Bild Desc
                </p>
                <p role="contentinfo" className="pl-2 text-xl italic leading-5 text-gray-700 focus:outline-none font-italic">
                  Name
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}