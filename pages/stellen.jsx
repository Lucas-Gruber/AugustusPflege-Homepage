import Head from "next/head";
import JobCards from '../components/JobCards';
const { gql, useQuery } = require("@apollo/client");
import { client } from "./_app";

export async function getStaticProps() {
  const { data: jobsData } = await client.query({
    query: gql`
      query Services {
        stellen {
          id
          titel
          aufgaben
          beschreibung
        }
      }
    `,
  });

  if (!jobsData) {
    return {
      notFound: true,
    }
  }
  
  return {
    props: {
      jobs: await jobsData.stellen,
    },
    revalidate: 60
 };
}

const jobs = ({jobs}) => {
  console.log(jobs);
  return (
    <div role="article" className="lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 2xl:container 2xl:mx-auto">
      <Head>
        <title>AugustusPflege - Stellenangebote</title>
      </Head>
      <div className="px-4 pb-4 xl:px-0">
        <div className="flex flex-col flex-wrap lg:flex-row">
          <div className="mt-4 lg:mt-0 lg:w-3/5">
            <div>
              <h1 className="ml-2 text-3xl font-bold tracking-normal text-gray-900 lg:ml-0 lg:text-4xl lg:w-11/12">
                Stellenangebote
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 xl:px-0">
        <div className="grid gap-8 pb-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          <JobCards data={jobs} />
        </div>
      </div>
    </div>
  )
}

export default jobs;