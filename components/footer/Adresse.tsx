import { client } from '@/sanity/lib/client'
import { PortableText } from '@portabletext/react'
import { FOOTER_QUERY } from '@/sanity/lib/queries'
import { Footer } from '@/sanity.types'
import { EnvironmentFilled } from '@ant-design/icons';

async function getData() {
    try {
        const data = await client.fetch<Footer[]>(FOOTER_QUERY)
        return data // Return all footer documents
    } catch (error) {
        console.error('Error fetching adresse data:', error)
        return null
    }
}

export default async function Adresse() {
    const footerData = await getData()

    if (!footerData) return null

    // Filter for the Adresse document
    const adresseData = footerData.find(doc => doc.titel === 'Adresse')

    if (!adresseData) return null

    return (
        <div className='flex flex-col gap-4'>
            <EnvironmentFilled />

            <a href="https://maps.app.goo.gl/jkYSB5uFXtxSe5So9" target="_blank"
                rel="noopener noreferrer" className='flex flex-col gap-4'>
                <div>
                    <PortableText value={adresseData.text || []} />
                </div>
            </a>

        </div>
    )
}