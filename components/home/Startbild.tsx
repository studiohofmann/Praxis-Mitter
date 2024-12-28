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
        <div className="relative w-full h-[50vh] aspect-[4/3] md:aspect-[16/9]">
            <div className='relative flex items-center justify-center h-full w-full'>
                <Image
                    src={urlFor(data.startbild.bild).url()}
                    alt={data.startbild.bild.alt || "Startbild"}
                    fill
                    placeholder="blur"
                    blurDataURL={urlFor(data.startbild.bild).width(24).height(24).blur(10).url()}
                    quality={100}
                    priority
                    className="object-cover object-bottom"
                    sizes="(max-width: 768px) 100vw,
                       (max-width: 1200px) 100vw,
                       100vw"
                />
                <div className='absolute inset-0 bg-green-400 opacity-40' />
            </div>
            {data.homeData && (
                <div className="absolute inset-0 pt-16">
                    <div className='flex flex-col gap-8 items-center justify-center h-full px-8 md:px-48'>
                        <h1 className='text-center text-grey-100'>{data.homeData.ueberschrift}</h1>
                    </div>
                </div>
            )}
        </div>
    )
}