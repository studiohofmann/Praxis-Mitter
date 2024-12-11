import { client } from '@/sanity/lib/client';
import { SEITEN_QUERY } from '@/sanity/lib/queries';
import { Seiten } from '@/sanity.types';
import { PortableText } from '@portabletext/react';
import Impressuminfo from '@/components/impressum/Impressuminfo';

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
        <div>
            <Impressuminfo />
            <section>
                <h2>{impressumData.ueberschrift}</h2>
                <div>
                    <PortableText value={impressumData.text} />
                </div>
            </section>
        </div>
    );
}