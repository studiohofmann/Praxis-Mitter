// FILE: app/kontakt/page.tsx
import { client } from '@/sanity/lib/client';
import { SEITEN_QUERY } from '@/sanity/lib/queries';
import { Seiten } from '@/sanity.types';
import { PortableText } from '@portabletext/react';

async function getData() {
    const allData = await client.fetch(SEITEN_QUERY);
    const kontaktData = allData.find((item: Seiten) => item.slug?.current === "kontakt");
    return kontaktData;
}

export default async function Kontakt() {
    const kontaktData = await getData();

    if (!kontaktData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{kontaktData.titel}</h1>
            <h2>{kontaktData.ueberschrift}</h2>
            <PortableText value={kontaktData.text} />
        </div>
    );
}