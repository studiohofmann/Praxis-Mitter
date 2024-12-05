import { client } from '@/sanity/lib/client';
import { SEITEN_QUERY } from '@/sanity/lib/queries';
import { Seiten } from '@/sanity.types';
import { PortableText } from '@portabletext/react';
import Startbild from '@/components/home/Startbild';
import Termin from '@/components/home/termin/Termin';
import Leistungen from '@/components/home/leistung/Leistungen';

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
      <PortableText value={homeData.text} />
      <Termin />
      <Leistungen />
    </div>
  );
}