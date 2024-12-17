import { client } from '@/sanity/lib/client';
import { SEITEN_QUERY } from '@/sanity/lib/queries';
import { Seiten } from '@/sanity.types';
import { PortableText } from '@portabletext/react';
import Uebermichbild from '@/components/ueber-mich/Uebermichbild';

async function getData() {
    const allData = await client.fetch(SEITEN_QUERY);
    const ueberMichData = allData.find((item: Seiten) => item.slug?.current === "ueber-mich");
    return ueberMichData;
}

export const revalidate = 0; // Add this line to enable on-demand revalidation

export default async function UeberMich() {
    const ueberMichData = await getData();

    if (!ueberMichData) {
        return <div>Loading...</div>;
    }

    return (
        <div className='md:flex'>
            <Uebermichbild />
            <section className='bg-blue-300'>
                <h2>{ueberMichData.ueberschrift}</h2>
                <PortableText value={ueberMichData.text} />
            </section>
        </div>
    );
}