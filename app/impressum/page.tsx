import { client } from '@/sanity/lib/client';
import { SEITEN_QUERY } from '@/sanity/lib/queries';
import { Seiten } from '@/sanity.types';
import { PortableText } from '@portabletext/react';

async function getData() {
    const allData = await client.fetch(SEITEN_QUERY);
    const impressumData = allData.find((item: Seiten) => item.slug?.current === "impressum");
    return impressumData;
}

export default async function Impressum() {
    const impressumData = await getData();

    if (!impressumData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{impressumData.titel}</h1>
            <h2>{impressumData.ueberschrift}</h2>
            <PortableText value={impressumData.text} />
        </div>
    );
}