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
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8'>
            {galleryData.map((item, index) => (
                <div key={index} className="relative aspect-[4/3]">
                    <Image
                        src={item.bild ? urlFor(item.bild).url() : ''}
                        alt={item.bild?.alt || `Praxis Bild ${index + 1}`}
                        fill
                        placeholder="blur"
                        blurDataURL={item.bild ? urlFor(item.bild).width(24).height(24).blur(10).url() : ''}
                        quality={100}
                        priority
                        className="object-cover object-bottom"
                        sizes="(max-width: 768px) 100vw,
                           (max-width: 1200px) 100vw,
                           100vw"
                    />
                </div>
            ))}
        </div>
    )
}