// FILE: components/Uebermichbild.tsx
import Image from 'next/image'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { UEBERMICHBILD_QUERY } from '@/sanity/lib/queries'
import { Uebermichbild as UebermichbildType } from '@/sanity.types'

async function getData() {
    try {
        const data = await client.fetch<UebermichbildType[]>(UEBERMICHBILD_QUERY)
        return data[0]
    } catch (error) {
        console.error('Error fetching uebermich image:', error)
        return null
    }
}

export default async function Uebermichbild() {
    const data = await getData()

    if (!data?.bild) return null

    return (
        <div className="relative w-full aspect-[4/3] md:aspect-[16/9] h-[50vh]">
            <Image
                src={urlFor(data.bild).url()}
                alt={data.bild.alt || "Über mich"}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw,
                       (max-width: 1200px) 80vw,
                       70vw"
            />
        </div>
    )
}