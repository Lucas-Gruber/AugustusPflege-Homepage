/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'

const navigation = [
  { name: 'Startseite', href: '/', current: true },
  { name: 'Über Uns', href: '/about', current: false },
  { name: 'Unser Team', href: '/team', current: false },
  { name: 'Leistungen', href: '/leistungen', current: false },
  { name: 'Stellenangebote', href: '/stellen', current: false },
]

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
        <svg
            className="absolute inset-y-0 right-0 hidden w-48 h-full text-white transform translate-x-1/2 lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
          <Popover>
            <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
            </div>
          </Popover>

          <main className="px-4 mx-auto mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Beispiel</span>{' '}
                <span className="block text-green-600 xl:inline"><br />Überschrift</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Wohnen ist ein Lebensbereich mit essentieller Bedeutung für alle Menschen - gleichzeitig ein Grundbedürfnis alltäglichen Lebens.
                Unsere Wohnverhältnisse sind entscheidend, ob es uns gut geht und ob wir uns wohl fühlen.
                Im Alter allerdings wird die Wohnung immer mehr zum Lebensmittelpunkt.
                Wenn ihre Hände nicht mehr so geschickt sind wie früher, Ihr Beine Sie nicht mehr tragen wollen, 
                Ihre Sehkraft nachlässt und die Erinnerung an früher verblassen beginnt, dann weicht die Jugend dem Alter. <br/> <br/>

                Das alles ist wirklich kein grund, um ihr geliebtes Zuhause zu verlassen.
              Lehnen Sie sich zurück.
              Lassen sie es zu, das wir Sie durch den Herbst des Lebens begleiten.
              Sie bleiben in ihrem sozialen Umfeld und müssen nicht mit neuen Situationen belastet werden.
              Sprechen Sie uns an, wir nehmen uns Zeit und beraten Sie und Ihre Angehörigen gerne.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link href="/about">
                    <a
                      className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700 md:py-4 md:text-lg md:px-10"
                    >
                      Mehr über Uns
                    </a>
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link href="/leistungen">
                    <a
                      className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-green-700 bg-green-100 border border-transparent rounded-md hover:bg-green-200 md:py-4 md:text-lg md:px-10"
                    >
                      Unsere Leistungen
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="object-cover w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full"
          src={ process.env.IMG_BASEURL + "3667a915-da36-4294-8ed8-826309c86ccc" }
          alt=""
        />
      </div>
    </div>
  )
}
