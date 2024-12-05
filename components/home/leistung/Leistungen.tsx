// FILE: components/Leistungen.tsx
import { client } from '@/sanity/lib/client'
import { PortableText } from '@portabletext/react'
import { LEISTUNGEN_QUERY } from '@/sanity/lib/queries'
import { Leistungen as LeistungenType } from '@/sanity.types'
import Leistung from './Leistung'

async function getData() {
    try {
        const data = await client.fetch<LeistungenType[]>(LEISTUNGEN_QUERY)
        return data[0] // Single document
    } catch (error) {
        console.error('Error fetching leistungen:', error)
        return null
    }
}

export default async function Leistungen() {
    const leistungenData = await getData()

    if (!leistungenData) return null

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-3xl font-bold mb-6">
                {leistungenData.ueberschrift}
            </h2>
            <div className="prose max-w-none">
                {leistungenData.text && <PortableText value={leistungenData.text} />}
            </div>
            <Leistung />
        </div>
    )
}