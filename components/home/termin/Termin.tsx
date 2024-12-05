import { client } from '@/sanity/lib/client'
import { PortableText } from '@portabletext/react'
import { TERMIN_QUERY } from '@/sanity/lib/queries'
import { Termin as TerminType } from '@/sanity.types'
import TerminIcons from "./TerminIcons"

async function getData() {
    try {
        const data = await client.fetch<TerminType[]>(TERMIN_QUERY)
        return data[0] // Assuming single document
    } catch (error) {
        console.error('Error fetching termin data:', error)
        return null
    }
}

export default async function Termin() {
    const terminData = await getData()

    if (!terminData) return null

    return (
        <div className="bg-green-200 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">{terminData.ueberschrift}</h2>
            <div className="prose">
                <PortableText value={terminData.text || []} />
            </div>
            <TerminIcons />
        </div>
    )
}