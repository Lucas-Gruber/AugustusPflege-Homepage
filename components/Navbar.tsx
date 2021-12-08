/* 


import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { NavLink } from 'react-router-dom';
import LogoSVG from 'assets/img/Logo-32.svg';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="relative z-20 bg-white filter drop-shadow-xl">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="w-8 h-8"
                src={LogoSVG}
                alt="Workflow"
              />
            </div>
            <div className="hidden md:block">
              <div className="flex items-baseline ml-10 space-x-4">
                <NavLink
                  to="/"
                  className="px-3 py-2 text-sm font-medium text-white rounded-md hover:bg-red-700"
                >
                  Startseite
                </NavLink>

                <NavLink
                  to="/about"
                  className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-red-700 hover:text-white"
                >
                  Über uns
                </NavLink>

                <NavLink
                  to="/team"
                  className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-red-700 hover:text-white"
                >
                  Unser Team
                </NavLink>

                <NavLink
                  to="/leistungen"
                  className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-red-700 hover:text-white"
                >
                  Leistungen
                </NavLink>

                <NavLink
                  to="/stellen"
                  className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-red-700 hover:text-white"
                >
                  Stellenangebote
                </NavLink>
              </div>
            </div>
          </div>
          <div className="flex -mr-2 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 text-gray-400 bg-red-900 rounded-md hover:text-white hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavLink
                to="/"
                className="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-red-700"
              >
                Startseite
              </NavLink>

              <NavLink
                to="/about"
                className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-red-700 hover:text-white"
              >
                Über Uns
              </NavLink>

              <NavLink
                to="/team"
                className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-red-700 hover:text-white"
              >
                Unser Team
              </NavLink>

              <NavLink
                to="/leistungen"
                className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-red-700 hover:text-white"
              >
                Leistungen
              </NavLink>

              <NavLink
                to="/stellen"
                className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-red-700 hover:text-white"
              >
                Stellenangebote
              </NavLink>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}

export default Nav;



*/

/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'

const navigation = [
  { name: 'Startseite', link: '/', current: true },
  { name: 'Über Uns', link: '/about', current: false },
  { name: 'Leistungen', link: '/leistungen', current: false },
  { name: 'Stellenangebote', link: '/stellen', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="relative z-30 bg-white drop-shadow-xl">
      {({ open }) => (
        <>
          <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
                <div className="flex items-center flex-shrink-0">
                  <img
                    className="block w-auto h-14 lg:hidden"
                    src={ process.env.IMG_BASEURL + "c326267f-3858-49dd-a98a-7d0eb485a875" }
                    alt="AugustusPflege Logo"
                  />
                  <img
                    className="hidden w-auto h-44 lg:block"
                    src={ process.env.IMG_BASEURL + "68c48ec4-f3da-4f5d-bfd0-b7126449050b" }
                    alt="AugustusPflege Schriftzug"
                  />
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                
              <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.link}
                      >
                        <a
                          className={classNames(
                          item.current ? 'bg-green-800 text-white' : 'text-gray-600 hover:bg-green-600 hover:text-gray-100',
                          'px-3 py-2 rounded-md text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
                
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.link}
                  className={classNames(
                    item.current ? 'bg-green-800 text-white' : 'text-gray-600 hover:bg-green-600 hover:text-gray-100',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
