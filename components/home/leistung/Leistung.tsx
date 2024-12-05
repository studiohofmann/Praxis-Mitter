// FILE: components/Leistung.tsx
import { client } from '@/sanity/lib/client'
import { LEISTUNG_QUERY } from '@/sanity/lib/queries'
import { Leistung as LeistungType } from '@/sanity.types'

async function getData() {
    try {
        const data = await client.fetch<LeistungType[]>(LEISTUNG_QUERY)
        return data
    } catch (error) {
        console.error('Error fetching leistungen:', error)
        return null
    }
}

export default async function Leistung() {
    const leistungen = await getData()

    if (!leistungen) return null

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {leistungen.map((leistung, index) => (
                    <div
                        key={index}
                        className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    >
                        <h3 className="text-xl font-semibold">
                            {leistung.ueberschrift}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    )
}