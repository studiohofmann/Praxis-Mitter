// FILE: components/Startbild.tsx
import Image from 'next/image'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { STARTBILD_QUERY, SEITEN_QUERY } from '@/sanity/lib/queries'
import { Seiten } from '@/sanity.types'

async function getData() {
    try {
        // Fetch both queries concurrently
        const [startbildData, seitenData] = await Promise.all([
            client.fetch(STARTBILD_QUERY),
            client.fetch(SEITEN_QUERY)
        ])

        const homeData = seitenData.find((item: Seiten) => item.slug?.current === "/")

        return {
            startbild: startbildData[0],
            homeData
        }
    } catch (error) {
        console.error('Error fetching data:', error)
        return null
    }
}

export default async function Startbild() {
    const data = await getData()

    if (!data?.startbild?.bild) return null

    return (
        <div className="relative w-full h-[50vh]">
            <Image
                src={urlFor(data.startbild.bild).url()}
                alt={data.startbild.bild.alt || "Startbild"}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw,
                       (max-width: 1200px) 100vw,
                       100vw"
            />
            {data.homeData && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-white text-4xl">{data.homeData.ueberschrift}</h1>
                </div>
            )}
        </div>
    )
}