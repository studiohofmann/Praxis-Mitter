import { client } from '@/sanity/lib/client'
import { PortableText } from '@portabletext/react'
import { FOOTER_QUERY } from '@/sanity/lib/queries'
import { Footer } from '@/sanity.types'
import NvsLogo from '../../public/nvs.svg';
import EmrLogo from '../../public/emr.svg';

async function getData() {
    try {
        const data = await client.fetch<Footer[]>(FOOTER_QUERY)
        return data // Return all footer documents
    } catch (error) {
        console.error('Error fetching zertifikate data:', error)
        return null
    }
}

export default async function Zertifikateimpressum() {
    const footerData = await getData()

    if (!footerData) return null

    // Filter for the Zertifikate document
    const zertifikateData = footerData.find(doc => doc.titel === 'Zertifikate')

    if (!zertifikateData) return null

    return (
        <div className='flex flex-col gap-8'>
            <div>
                <PortableText value={zertifikateData.text || []} />
            </div>
            <div className='flex flex-col gap-8'>
                <a href="https://emr.ch/qualitaetslabel" target="_blank"
                    rel="noopener noreferrer"
                    className='w-48'>
                    <EmrLogo className="w-full h-full" />
                </a>
                <a href="https://nvs.swiss/" target="_blank"
                    rel="noopener noreferrer"
                    className='w-48'>
                    <NvsLogo className="w-full h-full" />
                </a>
            </div>
        </div>

    )
}