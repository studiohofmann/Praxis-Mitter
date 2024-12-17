'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { client } from '@/sanity/lib/client';
import { HYPERLINKS_QUERY } from '@/sanity/lib/queries';
import { Seiten } from '@/sanity.types';

interface HyperlinksProps {
    onLinkClick?: () => void;
    variant?: 'mobile' | 'desktop' | 'footer';
    isInitialLoad?: boolean;
}

export default function Hyperlinks({ onLinkClick, variant = 'desktop', isInitialLoad }: HyperlinksProps) {
    const pathname = usePathname();
    const [seiten, setSeiten] = useState<Seiten[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchSeiten = async () => {
            try {
                const data = await client.fetch<Seiten[]>(HYPERLINKS_QUERY);
                if (!data || data.length === 0) throw new Error('No data received');
                setSeiten(data);
            } catch (error) {
                console.error('Error fetching seiten:', error);
                setError((error as Error).message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchSeiten();
    }, []);

    if (error) return <div>Error: {error}</div>;
    if (isLoading) return <div>Loading...</div>;

    // Define class names based on variant
    const linkClass =
        variant === 'mobile'
            ? 'mobile-link'
            : variant === 'footer'
                ? 'footer-link'
                : 'desktop-link';

    const activeLinkClass =
        variant === 'mobile'
            ? 'active-mobile'
            : variant === 'footer'
                ? 'active-footer'
                : 'active-desktop';

    const navClass =
        variant === 'mobile'
            ? 'mobile-nav'
            : variant === 'footer'
                ? 'footer-nav'
                : 'desktop-nav';

    // Conditional class for initial load
    const initialLoadClass = isInitialLoad ? 'text-green-200' : '';

    return (
        <nav className={navClass}>
            {seiten.map((seite) => {
                const slug = seite.slug?.current ? `/${seite.slug.current}` : '/';
                const isActive = pathname === slug;

                return (
                    <div key={slug}>
                        <Link href={slug} onClick={onLinkClick}>
                            <span className={`${linkClass} ${isActive ? activeLinkClass : ''} ${initialLoadClass}`}>
                                {seite.titel}
                            </span>
                        </Link>
                    </div>
                );
            })}
        </nav>
    );
}