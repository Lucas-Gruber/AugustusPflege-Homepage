import { Directus, ID } from '@directus/sdk';
import { useEffect, useState } from 'react';

type Member = {
  id: ID;
}

type Collections = {
  Member: Member;
}

const sdk = new Directus<Collections>(process.env.API_BASEURL);

export default function Mitglied() {
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
      { isLoading ? <p>loading...</p> : ''}
      {data.map((data) => (
        <p key={ data.id }>{ data.member_name }</p>
      ))}
    </>
  )
}