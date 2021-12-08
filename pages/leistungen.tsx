import Head from "next/head";
import { useState } from "react";

export default function leistungen() {
  const [show, setShow] = useState(false);
  return (
    <div role="article" className="py-12 md:px-8">
      <div className="px-4 py-10 xl:px-0">
        <div className="flex flex-col flex-wrap lg:flex-row">
          <div className="mt-4 lg:mt-0 lg:w-3/5">
            <div>
              <h1 className="ml-2 text-3xl font-bold tracking-normal text-gray-900 lg:ml-0 lg:text-4xl lg:w-11/12">
                Leistungen
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 xl:px-0">
        <div className="grid gap-8 pb-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          <div role="cell" className="bg-white">
            <div className="relative w-full h-full p-5 bg-white rounded-md shadow-lg">
              {/* class="absolute inset-0 object-center object-cover h-full w-full"  */}
              <span>
                <img
                  className="p-2 mb-5 bg-gray-200 rounded-full"
                  src="https://i.ibb.co/HFC1hqn/people-1.png"
                  alt="home-1"
                />
              </span>
              <h1 className="pb-4 text-2xl font-semibold">
                Medizinische Versorgung (SGB V)
              </h1>
              <div className="my-5">
                <div className="flex items-center w-full pb-4 space-x-3 cursor-pointer dark:border-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12.5"
                    height={16}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <h4 className="text-gray-900 text-md dark:text-gray-100">
                    Medikamentenausgabe
                  </h4>
                </div>
                <div className="flex items-center w-full pb-4 space-x-3 cursor-pointer dark:border-gray-700">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12.5"
                      height={16}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <h4 className="text-gray-900 text-md dark:text-gray-100">
                    An- und ausziehen von Kompressionsstrümpfen
                  </h4>
                </div>
                <div className="flex items-center w-full pb-4 cursor-pointer dark:border-gray-700">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12.5"
                      height={16}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <h4 className="pl-4 text-gray-900 text-md dark:text-gray-100">
                    Wundversorgung
                  </h4>
                </div>
                <div className="flex items-center w-full pb-4 cursor-pointer dark:border-gray-700">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12.5"
                      height={16}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <h4 className="pl-4 text-gray-900 text-md dark:text-gray-100">
                    Blutzuckermessung
                  </h4>
                </div>
                <div className="flex items-center w-full pb-4 cursor-pointer dark:border-gray-700">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12.5"
                      height={16}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <h4 className="pl-4 text-gray-900 text-md dark:text-gray-100">
                    Blutdruckmessung
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div role="cell" className="bg-gray-100">
            <div className="relative w-full h-full p-5 bg-white rounded-md shadow-lg">
              {/* class="absolute inset-0 object-center object-cover h-full w-full"  */}
              <span>
                <img
                  className="p-2 mb-5 bg-gray-200 rounded-full"
                  src="https://i.ibb.co/HFC1hqn/people-1.png"
                  alt="pricetags-1"
                />
              </span>
              <h1 className="pb-4 text-2xl font-semibold">
                pflegerische Versorgung (SGB XI)
              </h1>
              <div className="my-5">
                <div className="flex items-center w-full pb-4 cursor-pointer dark:border-gray-700">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12.5"
                      height={16}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <h4 className="pl-4 text-gray-900 text-md dark:text-gray-100">
                    Hilfestellung bei der Körperpflege, Baden, An-, und
                    Auskleiden
                  </h4>
                </div>
                <div className="flex items-center w-full pb-4 cursor-pointer dark:border-gray-700">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12.5"
                      height={16}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <h4 className="pl-4 text-gray-900 text-md dark:text-gray-100">
                    Hilfe bei Ausscheidungen
                  </h4>
                </div>
                <div className="flex items-center w-full pb-4 cursor-pointer dark:border-gray-700">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12.5"
                      height={16}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <h4 className="pl-4 text-gray-900 text-md dark:text-gray-100">
                    Hilfe bei Ernährung
                  </h4>
                </div>
                <div className="flex items-center w-full pb-4 cursor-pointer dark:border-gray-700">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12.5"
                      height={16}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <h4 className="pl-4 text-gray-900 text-md dark:text-gray-100">
                    Hilfe in der Hauswirtschaft
                  </h4>
                </div>
                <div className="flex items-center w-full pb-4 cursor-pointer dark:border-gray-700">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12.5"
                      height={16}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <h4 className="pl-4 text-gray-900 text-md dark:text-gray-100">
                    Transferleistung z.B. aus dem Bett zum Rollstuhl uvm.
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div role="cell" className="bg-gray-100">
            <div className="relative w-full h-full p-5 bg-white rounded-md shadow-lg">
              {/* class="absolute inset-0 object-center object-cover h-full w-full"  */}
              <span>
                <img
                  className="p-2 mb-5 bg-gray-200 rounded-full"
                  src="https://i.ibb.co/HFC1hqn/people-1.png"
                  alt="home-1"
                />
              </span>
              <h1 className="pb-4 text-2xl font-semibold">
                zusätzliche Betreuungsleistungen § 45 b SGB XI
              </h1>
              <div className="my-5">
                <div className="flex items-center w-full pb-4 cursor-pointer dark:border-gray-700">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12.5"
                      height={16}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <h4 className="pl-4 text-gray-900 text-md dark:text-gray-100">
                    Erinnerungsarbeit
                  </h4>
                </div>
                <div className="flex items-center w-full pb-4 cursor-pointer dark:border-gray-700">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12.5"
                      height={16}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <h4 className="pl-4 text-gray-900 text-md dark:text-gray-100">
                    Spiele
                  </h4>
                </div>
                <div className="flex items-center w-full pb-4 cursor-pointer dark:border-gray-700">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12.5"
                      height={16}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <h4 className="pl-4 text-gray-900 text-md dark:text-gray-100">
                    Teilnahme am öffentlichen Leben
                  </h4>
                </div>
                <div className="flex items-center w-full pb-4 cursor-pointer dark:border-gray-700">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12.5"
                      height={16}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <h4 className="pl-4 text-gray-900 text-md dark:text-gray-100">
                    Anregen der Sinne
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div role="cell" className="bg-gray-100">
            <div className="relative w-full h-full p-5 bg-white rounded-md shadow-lg">
              {/* class="absolute inset-0 object-center object-cover h-full w-full"  */}
              <span>
                <img
                  className="p-2 mb-5 bg-gray-200 rounded-full"
                  src="https://i.ibb.co/HFC1hqn/people-1.png"
                  alt="home-1"
                />
              </span>
              <h1 className="pb-4 text-2xl font-semibold">
                Beratungsgespräche nach § 37 Abs. 3 SGB XI
              </h1>
              <div className="my-5">
                <div className="flex items-center w-full pb-4 cursor-pointer dark:border-gray-700">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12.5"
                      height={16}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <h4 className="pl-4 text-gray-900 text-md dark:text-gray-100">
                    Der Beratungseinsatz ist eine verpflichtende Beratung für
                    pflegende Angehörige. Es soll damit sichergestellt werden,
                    dass die Pflegenden mit der Pflege nicht überfordert sind,
                    dass ihnen Hilfestellungen aufgezeigt werden und ein
                    Ansprechpartner bei Fragen vorhanden ist.
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div role="cell" className="bg-gray-100">
            <div className="relative w-full h-full p-5 bg-white rounded-md shadow-lg">
              {/* class="absolute inset-0 object-center object-cover h-full w-full"  */}
              <span>
                <img
                  className="p-2 mb-5 bg-gray-200 rounded-full"
                  src="https://i.ibb.co/HFC1hqn/people-1.png"
                  alt="home-1"
                />
              </span>
              <h1 className="pb-4 text-2xl font-semibold">
                Haushaltshilfe § 38 SGB V
              </h1>
              <div className="my-5">
                <div className="flex items-center w-full pb-4 cursor-pointer dark:border-gray-700">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12.5"
                      height={16}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <h4 className="pl-4 text-gray-900 text-md dark:text-gray-100">
                    Wenn die Weiterführung des Haushaltes für einen begrenzten
                    Zeitraum aus gesundheitlichen Gründen nicht möglich ist,
                    z.B. Probleme während der Schwangerschaft,
                    Rehabilitationsphase nach Krankenhausaufenthalt etc.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
