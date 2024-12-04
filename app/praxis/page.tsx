import { client } from '@/sanity/lib/client';
import { SEITEN_QUERY } from '@/sanity/lib/queries';
import { Seiten } from '@/sanity.types';
import { PortableText } from '@portabletext/react';

async function getData() {
    const allData = await client.fetch(SEITEN_QUERY);
    const praxisData = allData.find((item: Seiten) => item.slug?.current === "praxis");
    return praxisData;
}

export default async function Praxis() {
    const praxisData = await getData();

    if (!praxisData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{praxisData.titel}</h1>
            <h2>{praxisData.ueberschrift}</h2>
            <PortableText value={praxisData.text} />
        </div>
    );
}