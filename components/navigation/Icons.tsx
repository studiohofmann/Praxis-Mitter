'use client'

import { useEffect, useState } from 'react'
import { client } from '@/sanity/lib/client'
import { ICONS_QUERY } from '@/sanity/lib/queries'
import {
    PhoneFilled,
    MailFilled,
    WhatsAppOutlined,
    InstagramFilled
} from '@ant-design/icons'

interface IconData {
    name: string
    wert: string
}

export default function Icons() {
    const [icons, setIcons] = useState<IconData[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [fetchError, setFetchError] = useState<null | string>(null)

    useEffect(() => {
        const fetchIcons = async () => {
            try {
                const data = await client.fetch(ICONS_QUERY)
                console.log('Fetched icons:', data)
                if (!data || data.length === 0) {
                    throw new Error('No icons data fetched')
                }
                setIcons(data)
            } catch (error) {
                console.error('Error fetching icons:', error)
                setFetchError((error as Error).message)
            } finally {
                setIsLoading(false)
            }
        }
        fetchIcons()
    }, [])

    const iconConfig = {
        anruf: {
            icon: <PhoneFilled className="text-xl" />,
            href: (wert: string) => `tel:${wert}`
        },
        email: {
            icon: <MailFilled className="text-xl" />,
            href: (wert: string) => `mailto:${wert}`
        },
        whatsapp: {
            icon: <WhatsAppOutlined className="text-xl" />,
            href: (wert: string) => `https://wa.me/+${wert}`
        },
        instagram: {
            icon: <InstagramFilled className="text-xl" />,
            href: (wert: string) => `https://www.instagram.com/${wert}`
        }
    }

    if (isLoading) return <div>Loading...</div>
    if (fetchError) return <div>Error: {fetchError}</div>

    return (
        <div className="flex gap-4">
            {icons.map((icon) => {
                const iconName = icon.name.toLowerCase()
                console.log('Processing icon:', iconName)
                const config = iconConfig[iconName as keyof typeof iconConfig]
                if (!config) return null

                return (
                    <a
                        key={icon.name}
                        href={config.href(icon.wert)}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {config.icon}
                    </a>
                )
            })}
        </div>
    )
}