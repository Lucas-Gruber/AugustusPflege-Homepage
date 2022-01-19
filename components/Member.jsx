import { Directus, ID } from '@directus/sdk';
import { useEffect, useState } from 'react';


const sdk = new Directus<Collections>(process.env.API_BASEURL);

export default function Mitglieds() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetch() {
      setIsLoading(true);
      const res = (await sdk.items("member").readMany()).data;

      setIsLoading(false);
      setData(res);
    }
    
    fetch();
  }, []);

  return(
    <>
      {data.map((data) => (
        <p key={ data.id }>{ data.member_name }</p>
      ))}
    </>
  )
}