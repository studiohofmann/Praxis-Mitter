// FILE: app/kontakt/page.tsx
import { client } from '@/sanity/lib/client';
import { SEITEN_QUERY } from '@/sanity/lib/queries';
import { Seiten } from '@/sanity.types';
import { PortableText } from '@portabletext/react';
import Kontaktforumlar from '@/components/kontakt/Kontaktformular';
import Anfahrt from '@/components/kontakt/anfahrt/Anfahrt';

async function getData() {
    const allData = await client.fetch(SEITEN_QUERY);
    const kontaktData = allData.find((item: Seiten) => item.slug?.current === "kontakt");
    return kontaktData;
}

export const revalidate = 0; // Add this line to enable on-demand revalidation

export default async function Kontakt() {
    const kontaktData = await getData();

    if (!kontaktData) {
        return <div>Loading...</div>;
    }

    return (
        <div className='pt-16'>
            <section>
                <h2>{kontaktData.ueberschrift}</h2>
                <div className='flex flex-col md:flex-row gap-8 md:gap-16'>
                    <div className='flex-1'>
                        <PortableText value={kontaktData.text} />
                    </div>
                    <div className='flex-1'>
                        <Kontaktforumlar />
                    </div>


                </div>
            </section>
            <section className='bg-green-300'>
                <Anfahrt />
            </section>
        </div>

    );
}