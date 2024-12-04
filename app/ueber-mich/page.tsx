import { client } from '@/sanity/lib/client';
import { SEITEN_QUERY } from '@/sanity/lib/queries';
import { Seiten } from '@/sanity.types';
import { PortableText } from '@portabletext/react';

async function getData() {
    const allData = await client.fetch(SEITEN_QUERY);
    const ueberMichData = allData.find((item: Seiten) => item.slug?.current === "ueber-mich");
    return ueberMichData;
}

export default async function UeberMich() {
    const ueberMichData = await getData();

    if (!ueberMichData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{ueberMichData.titel}</h1>
            <h2>{ueberMichData.ueberschrift}</h2>
            <PortableText value={ueberMichData.text} />
        </div>
    );
}