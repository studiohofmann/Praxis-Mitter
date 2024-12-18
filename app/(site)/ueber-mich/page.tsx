import { client } from '@/sanity/lib/client';
import { SEITEN_QUERY } from '@/sanity/lib/queries';
import { Seiten } from '@/sanity.types';
import { PortableText } from '@portabletext/react';
import Uebermichbild from '@/components/ueber-mich/Uebermichbild';

async function getData() {
    const allData = await client.fetch(SEITEN_QUERY);
    const ueberMichData = allData.find(
        (item: Seiten) => item.slug?.current === 'ueber-mich'
    );
    return ueberMichData;
}

export const revalidate = 0;

export default async function UeberMich() {
    const ueberMichData = await getData();

    if (!ueberMichData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-col md:flex-row md:gap-16">
            <div className="md:flex-1 h-[50vh] md:h-[75vh]">
                <Uebermichbild />
            </div>
            <section className="flex-1 md:pt-32 md:px-0">
                <h2 className='md:pr-48'>{ueberMichData.ueberschrift}</h2>
                <div className='md:pr-48'>
                    <PortableText value={ueberMichData.text} />
                </div>
            </section>
        </div>
    );
}