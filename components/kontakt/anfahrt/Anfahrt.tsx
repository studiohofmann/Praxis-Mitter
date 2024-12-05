// FILE: components/Anfahrt.tsx
import { client } from '@/sanity/lib/client'
import { PortableText } from '@portabletext/react'
import { ANFAHRT_QUERY } from '@/sanity/lib/queries'
import { Anfahrt as AnfahrtType } from '@/sanity.types'
import Map from './Map'

async function getData() {
    try {
        const data = await client.fetch<AnfahrtType[]>(ANFAHRT_QUERY)
        return data[0] // Assuming single document
    } catch (error) {
        console.error('Error fetching anfahrt data:', error)
        return null
    }
}

export default async function Anfahrt() {
    const anfahrtData = await getData()

    if (!anfahrtData) return null

    return (
        <div className='flex flex-col gap-8'>
            <h2>{anfahrtData.ueberschrift}</h2>
            <div>
                {anfahrtData.text && <PortableText value={anfahrtData.text} />}
            </div>
            <Map />
        </div>
    )
}