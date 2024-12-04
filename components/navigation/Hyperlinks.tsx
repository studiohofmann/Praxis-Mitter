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

    useEffect(() => {
        const fetchSeiten = async () => {
            try {
                const data = await client.fetch(SEITEN_QUERY)
                setSeiten(data)
            } catch (error) {
                console.error('Error fetching seiten:', error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchSeiten()
    }, [])

    if (isLoading) return (
        <div className="flex justify-center items-center p-4">
            <div className="animate-spin">Loading...</div>
        </div>
    )

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