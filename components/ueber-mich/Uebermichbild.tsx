// FILE: components/Uebermichbild.tsx
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { UEBERMICHBILD_QUERY } from '@/sanity/lib/queries';
import { Uebermichbild as UebermichbildType } from '@/sanity.types';

async function getData() {
    try {
        const data = await client.fetch<UebermichbildType[]>(UEBERMICHBILD_QUERY);
        return data[0];
    } catch (error) {
        console.error('Error fetching uebermich image:', error);
        return null;
    }
}

export default async function Uebermichbild() {
    const data = await getData();

    if (!data?.bild) return null;

    return (
        <div className="relative w-full h-full">
            <Image
                src={urlFor(data.bild).url()}
                alt={data.bild.alt || "Über mich"}
                fill
                placeholder="blur"
                blurDataURL={urlFor(data.bild)
                    .width(24)
                    .height(24)
                    .blur(10)
                    .url()}
                quality={100}
                priority
                className="object-cover object-"
            />
        </div>
    );
}