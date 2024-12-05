'use client'

import { useEffect, useState } from 'react'
import {
    PhoneFilled,
    MailFilled,
    WhatsAppOutlined,
    InstagramFilled
} from "@ant-design/icons/lib/icons"
import { client } from '@/sanity/lib/client'
import { ICONS_QUERY } from '@/sanity/lib/queries'

interface IconData {
    name: string
    wert: string
}

export default function Icons() {
    const [icons, setIcons] = useState<IconData[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchIcons = async () => {
            try {
                const data = await client.fetch(ICONS_QUERY)
                setIcons(data)
            } catch (error) {
                console.error('Error:', error)
            }
            setIsLoading(false)
        }
        fetchIcons()
    }, [])

    const iconConfig = {
        anruf: {
            icon: <PhoneFilled className="text-2xl" />,
            href: (wert: string) => `tel:${wert}`
        },
        email: {
            icon: <MailFilled className="text-2xl" />,
            href: (wert: string) => `mailto:${wert}`
        },
        whatsapp: {
            icon: <WhatsAppOutlined className="text-2xl" />,
            href: (wert: string) => `https://wa.me/+${wert}`
        },
        instagram: {
            icon: <InstagramFilled className="text-2xl" />,
            href: (wert: string) => `https://www.instagram.com/${wert}`
        }
    }

    if (isLoading) return <div>Loading...</div>

    return (
        <div className="flex gap-4 items-center">
            {icons.map((icon) => {
                const iconName = icon.name.toLowerCase()
                const config = iconConfig[iconName as keyof typeof iconConfig]
                if (!config) return null

                return (
                    <a
                        key={icon.name}
                        href={config.href(icon.wert)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 transition-colors"
                    >
                        {config.icon}
                    </a>

                )
            })}
        </div>
    )
}