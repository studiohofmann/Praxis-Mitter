
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

        <section>
            <div className='pt-16 flex flex-col gap-8'>
                {impressumData.map((item, index) => (
                    <div key={index}>
                        <h3>{item.ueberschrift}</h3>
                        {item.text && <PortableText value={item.text} />}
                    </div>

                ))}
            </div>
        </section>


    )
}