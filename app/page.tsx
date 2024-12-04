import { client } from '@/sanity/lib/client';
import { SEITEN_QUERY } from '@/sanity/lib/queries';
import { Seiten } from '@/sanity.types';
import { PortableText } from '@portabletext/react';
import Startbild from '@/components/home/Startbild';

async function getData() {
  const allData = await client.fetch(SEITEN_QUERY);
  const homeData = allData.find((item: Seiten) => item.slug?.current === "/");
  return homeData;
}

export default async function Home() {
  const homeData = await getData();

  if (!homeData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Startbild />
      <h1>{homeData.titel}</h1>
      <h2>{homeData.ueberschrift}</h2>
      <PortableText value={homeData.text} />
    </div>
  );
}