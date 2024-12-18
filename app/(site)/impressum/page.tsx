import { client } from '@/sanity/lib/client';
import { SEITEN_QUERY } from '@/sanity/lib/queries';
import { Seiten } from '@/sanity.types';
import { PortableText } from '@portabletext/react';
import Impressuminfo from '@/components/impressum/Impressuminfo';
import Zertifikateimpressum from '@/components/impressum/Zertifikateimpressum';

async function getData() {
    const allData = await client.fetch(SEITEN_QUERY);
    const impressumData = allData.find((item: Seiten) => item.slug?.current === "impressum");
    return impressumData;
}
export const revalidate = 0; // Add this line to enable on-demand revalidation

export default async function Impressum() {
    const impressumData = await getData();

    if (!impressumData) {
        return <div>Loading...</div>;
    }

    return (
        <div className='impressum-page pt-16'>
            <section className='md:flex-row md:gap-16'>
                <div className='md:flex-1'>
                    <Impressuminfo />
                </div>
                <div className='md:flex-1'>
                    <Zertifikateimpressum />
                </div>
            </section>
            <section className='bg-green-400'>
                <h2>{impressumData.ueberschrift}</h2>
                <div>
                    <PortableText value={impressumData.text} />
                </div>
            </section>
        </div>
    );
}