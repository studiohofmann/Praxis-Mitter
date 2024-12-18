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
        <section className='bg-green-400'>
            <h2>
                {leistungenData.ueberschrift}
            </h2>
            <div className='flex flex-col gap-8 md:flex-row md:gap-16'>
                <div className="md:flex-1">
                    {leistungenData.text && <PortableText value={leistungenData.text} />}
                </div>
                <div className="md:flex-1">
                    <Leistung />
                </div>
            </div>
        </section>
    )
}