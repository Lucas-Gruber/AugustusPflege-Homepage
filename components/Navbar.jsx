import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const navigation = [
  { name: "Startseite", link: "/", current: true },
  { name: "Über Uns", link: "/about", current: false },
  { name: "Leistungen", link: "/leistungen", current: false },
  { name: "Stellenangebote", link: "/stellen", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const router = useRouter();

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
                  <div className="block lg:hidden">
                    <Image
                      src={
                        process.env.NEXT_PUBLIC_IMG_BASEURL +
                        "c326267f-3858-49dd-a98a-7d0eb485a875"
                      }
                      alt="AugustusPflege Logo"
                      width={100}
                      height={56}
                    />
                  </div>

                  <div className="hidden pt-1 lg:block">
                    <Image
                      src={
                        process.env.NEXT_PUBLIC_IMG_BASEURL +
                        "68c48ec4-f3da-4f5d-bfd0-b7126449050b"
                      }
                      alt="AugustusPflege Schriftzug"
                      width={313}
                      height={176}
                    />
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.link}>
                        <a
                          className={classNames(
                            router.asPath === item.link
                              ? "bg-green-800 text-white"
                              : "text-gray-600 hover:bg-green-600 hover:text-gray-100",
                            "px-3 py-2 rounded-md text-sm font-medium"
                          )}
                          aria-current={
                            router.asPath === item.link ? "page" : undefined
                          }
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
                    router.asPath === item.link
                      ? "bg-green-800 text-white"
                      : "text-gray-600 hover:bg-green-600 hover:text-gray-100",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={
                    router.asPath === item.link ? "page" : undefined
                  }
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
