import Head from "next/head";
import { useState } from "react";
import LeistungCards from '../components/LeistungCards';
const { gql, useQuery } = require("@apollo/client");
import { client } from "./_app";

export async function getStaticProps() {
  const { data: servicesData } = await client.query({
    query: gql`
      query Services {
        Leistungen {
          id
          titel
          leistungen
        }
      }
    `,
  });

  if (!servicesData) {
    return {
      notFound: true,
    }
  }
  
  return {
    props: {
      services: await servicesData.Leistungen,
    },
    revalidate: 60
 };
}

export default function leistungen({ services }) {
  return (
    <div role="article" className="py-12 md:px-8">
      <Head>
        <title>AugustusPflege - Leistungen</title>
      </Head>
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
          <LeistungCards data={services} />
        </div>
      </div>
    </div>
  );
}
