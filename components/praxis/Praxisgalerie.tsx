// FILE: components/Praxisgalerie.tsx
import Image from 'next/image'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { PRAXISGALERIE_QUERY } from '@/sanity/lib/queries'
import { Praxisgalerie as PraxisgalerieType } from '@/sanity.types'

async function getData() {
    try {
        const data = await client.fetch<PraxisgalerieType[]>(PRAXISGALERIE_QUERY)
        return data
    } catch (error) {
        console.error('Error fetching gallery images:', error)
        return null
    }
}

export default async function Praxisgalerie() {
    const galleryData = await getData()

    if (!galleryData?.length) return null

    return (
        <div className='flex flex-col gap-4'>
            {galleryData.map((item, index) => (
                <div key={index} className="relative aspect-[4/3] md:aspect-[16/9]">
                    <Image
                        src={item.bild ? urlFor(item.bild).url() : ''}
                        alt={item.bild?.alt || `Praxis Bild ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw,
                               (max-width: 1200px) 50vw,
                               33vw"
                    />
                </div>
            ))}
        </div>
    )
}