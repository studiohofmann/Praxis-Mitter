import { client } from '@/sanity/lib/client'
import { PortableText } from '@portabletext/react'
import { FOOTER_QUERY } from '@/sanity/lib/queries'
import { Footer } from '@/sanity.types'

async function getData() {
    try {
        const data = await client.fetch<Footer[]>(FOOTER_QUERY)
        return data // Return all footer documents
    } catch (error) {
        console.error('Error fetching footer data:', error)
        return null
    }
}

function getCurrentYear() {
    return new Date().getFullYear()
}

export default async function Copyright() {
    const footerData = await getData()

    if (!footerData) return null

    // Filter for the Copyright document
    const copyrightData = footerData.find(doc => doc.titel === 'Copyright')

    if (!copyrightData) return null

    return (
        <div className='flex items-end'>
            <div className='mr-1'>
                {getCurrentYear()}
            </div>
            <div>
                <PortableText value={copyrightData.text || []} />
            </div>
        </div>
    )
}