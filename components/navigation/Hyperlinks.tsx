'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { client } from '@/sanity/lib/client'
import { SEITEN_QUERY } from '@/sanity/lib/queries'
import { Seiten } from '@/sanity.types'

interface HyperlinksProps {
    onLinkClick?: () => void;
}

export default function Hyperlinks({ onLinkClick }: HyperlinksProps) {
    const [seiten, setSeiten] = useState<Seiten[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchSeiten = async () => {
            try {
                console.log('Fetching seiten...') // Debug log
                const data = await client.fetch(SEITEN_QUERY)
                console.log('Fetched data:', data) // Debug log
                if (!data || data.length === 0) throw new Error('No data received')
                setSeiten(data)
            } catch (error) {
                console.error('Error fetching seiten:', error)
                setError((error as Error).message)
            } finally {
                setIsLoading(false)
            }
        }

        fetchSeiten()
    }, [])

    if (error) return <div>Error: {error}</div>
    if (isLoading) return <div className="animate-spin">Loading...</div>

    return (
        <nav className="p-4">
            <ul className="space-y-4 md:space-y-0 md:flex md:space-x-6 justify-end">
                {seiten.map((seite) => (
                    <li key={seite.slug?.current}>
                        <Link
                            href={`/${seite.slug?.current}`}
                            onClick={onLinkClick}
                            className="text-gray-800 hover:text-blue-600 transition-colors duration-200 block py-2"
                        >
                            {seite.titel}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}