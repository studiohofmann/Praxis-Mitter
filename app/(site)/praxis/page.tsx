import { client } from '@/sanity/lib/client';
import { SEITEN_QUERY } from '@/sanity/lib/queries';
import { Seiten } from '@/sanity.types';
import { PortableText } from '@portabletext/react';
import Praxisgalerie from '@/components/praxis/Praxisgalerie';

async function getData() {
    const allData = await client.fetch(SEITEN_QUERY);
    const praxisData = allData.find((item: Seiten) => item.slug?.current === "praxis");
    return praxisData;
}

export const revalidate = 0; // Add this line to enable on-demand revalidation

export default async function Praxis() {
    const praxisData = await getData();

    if (!praxisData) {
        return <div>Loading...</div>;
    }

    return (
        <div className='pt-16'>
            <section className='bg-green-300'>
                <h2>{praxisData.ueberschrift}</h2>
                <PortableText value={praxisData.text} />
                <Praxisgalerie />
            </section>
        </div>
    );
}