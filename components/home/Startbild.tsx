// FILE: components/Startbild.tsx
import Image from 'next/image'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { STARTBILD_QUERY } from '@/sanity/lib/queries'

async function getData() {
    const data = await client.fetch(STARTBILD_QUERY)
    return data[0]
}

export default async function Startbild() {
    const startbild = await getData()

    if (!startbild?.bild) return null

    return (
        <div className="relative w-full h-[50vh] md:h-[70vh] lg:h-[80vh]">
            <Image
                src={urlFor(startbild.bild).url()}
                alt="Startbild"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw,
                       (max-width: 1200px) 100vw,
                       100vw"
            />
        </div>
    )
}