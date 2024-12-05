
import { client } from '@/sanity/lib/client'
import { PortableText } from '@portabletext/react'
import { IMPRESSUMINFO_QUERY } from '@/sanity/lib/queries'
import { Impressuminfo as ImpressuminfoType } from '@/sanity.types'

async function getData() {
    try {
        const data = await client.fetch<ImpressuminfoType[]>(IMPRESSUMINFO_QUERY)
        return data
    } catch (error) {
        console.error('Error fetching impressum data:', error)
        return null
    }
}

export default async function Impressuminfo() {
    const impressumData = await getData()

    if (!impressumData) return null

    return (
        <div className="max-w-4xl mx-auto p-6 space-y-8">
            {impressumData.map((item, index) => (
                <div key={index} className="prose max-w-none">
                    <h2 className="text-2xl font-bold mb-4">{item.ueberschrift}</h2>
                    {item.text && <PortableText value={item.text} />}
                </div>
            ))}
        </div>
    )
}