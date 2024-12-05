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
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-3xl font-bold mb-6">{anfahrtData.ueberschrift}</h2>
            <div className="prose max-w-none">
                {anfahrtData.text && <PortableText value={anfahrtData.text} />}
            </div>
            <Map />
        </div>
    )
}