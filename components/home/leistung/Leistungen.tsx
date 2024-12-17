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
        <section className='bg-blue-200'>
            <h2>
                {leistungenData.ueberschrift}
            </h2>
            <div className="prose max-w-none">
                {leistungenData.text && <PortableText value={leistungenData.text} />}
            </div>
            <Leistung />
        </section>
    )
}