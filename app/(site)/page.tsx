import { client } from '@/sanity/lib/client';
import { SEITEN_QUERY } from '@/sanity/lib/queries';
import { Seiten } from '@/sanity.types';
import { PortableText } from '@portabletext/react';
import Startbild from '@/components/home/Startbild';
import Leistungen from '@/components/home/leistung/Leistungen';

async function getData() {
  const allData = await client.fetch(SEITEN_QUERY);
  const homeData = allData.find((item: Seiten) => item.slug?.current === "/");
  return homeData;
}

export const revalidate = 0; // Add this line to enable on-demand revalidation

export default async function Home() {
  const homeData = await getData();

  if (!homeData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Startbild />
      <section>
        <div>
          <PortableText value={homeData.text} />
        </div>
      </section>
      <Leistungen />
    </div>
  );
}