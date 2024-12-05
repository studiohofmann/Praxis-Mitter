'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { client } from '@/sanity/lib/client'
import { SEITEN_QUERY } from '@/sanity/lib/queries'
import { Seiten } from '@/sanity.types'

interface HyperlinksProps {
    onLinkClick?: () => void;
    variant?: 'mobile' | 'default';
}

export default function Hyperlinks({ onLinkClick, variant = 'default' }: HyperlinksProps) {
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
    if (isLoading) return <div>Loading...</div>

    return (
        <nav className={variant === 'mobile' ? 'mobile-hyperlink-container-class' : 'a'}>
            {seiten.map((seite) => (
                <div key={seite.slug?.current}>
                    <Link
                        href={`/${seite.slug?.current}`}
                        onClick={onLinkClick}
                        className={variant === 'mobile' ? 'mobile-hyperlink-class' : 'a'}
                    >
                        {seite.titel}
                    </Link>
                </div>
            ))}

        </nav>
    )
}