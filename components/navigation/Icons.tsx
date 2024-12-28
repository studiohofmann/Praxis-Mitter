'use client'

import React, { useState, useEffect } from 'react';
import { client } from '@/sanity/lib/client';
import { ICONS_QUERY } from '@/sanity/lib/queries';
import { PhoneFilled, MailFilled, WhatsAppOutlined, InstagramFilled } from '@ant-design/icons';

interface IconData {
    name: string;
    wert: string;
}

interface IconsProps {
    isInitialLoad: boolean;
}

export default function Icons({ isInitialLoad }: IconsProps) {
    const [icons, setIcons] = useState<IconData[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [fetchError, setFetchError] = useState<null | string>(null);

    useEffect(() => {
        const fetchIcons = async () => {
            try {
                const data = await client.fetch<IconData[]>(ICONS_QUERY);
                console.log('Fetched icons:', data);
                if (!data || data.length === 0) {
                    throw new Error('No icons data fetched');
                }
                setIcons(data);
            } catch (error) {
                console.error('Error fetching icons:', error);
                setFetchError((error as Error).message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchIcons();
    }, []);

    if (isLoading) return <div>Loading...</div>;
    if (fetchError) return <div>Error: {fetchError}</div>;

    const iconConfig: { [key in IconData['name']]: { icon: JSX.Element; href: (wert: string) => string; target?: string; rel?: string } } = {
        anruf: {
            icon: <PhoneFilled className={`text-xl rotate-90 ${isInitialLoad ? 'text-green-100' : ''}`} />,
            href: (wert: string) => `tel:${wert}`,
        },
        email: {
            icon: <MailFilled className={`text-xl ${isInitialLoad ? 'text-green-100' : ''}`} />,
            href: (wert: string) => `mailto:${wert}`,
            target: '_self', // Open in the same tab
        },
        whatsapp: {
            icon: <WhatsAppOutlined className={`text-xl ${isInitialLoad ? 'text-green-100' : ''}`} />,
            href: (wert: string) => `https://wa.me/${wert}`,
            target: '_blank', // Open in a new tab
            rel: 'noopener noreferrer',
        },
        instagram: {
            icon: <InstagramFilled className={`text-xl ${isInitialLoad ? 'text-green-100' : ''}`} />,
            href: (wert: string) => `https://www.instagram.com/${wert}`,
            target: '_blank', // Open in a new tab
            rel: 'noopener noreferrer',
        },
    };

    return (
        <div className="flex gap-4">
            {icons.map((icon) => {
                const iconName = icon.name.toLowerCase();
                const config = iconConfig[iconName as keyof typeof iconConfig];
                if (!config) {
                    console.error(`No configuration found for icon name: ${icon.name}`);
                    return null; // Skip rendering this icon if no configuration is found
                }
                return (
                    <a
                        key={icon.name}
                        href={config.href(icon.wert)}
                        target={config.target}
                        rel={config.rel}
                    >
                        {config.icon}
                    </a>
                );
            })}
        </div>
    );
}