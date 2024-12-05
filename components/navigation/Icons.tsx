'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { client } from '@/sanity/lib/client'
import { ICONS_QUERY } from '@/sanity/lib/queries'

// Dynamically import icons with loading state
const PhoneFilled = dynamic(() => import('@ant-design/icons/PhoneFilled'), {
    loading: () => <div>Loading...</div>,
    ssr: false
})
const MailFilled = dynamic(() => import('@ant-design/icons/MailFilled'), {
    loading: () => <div>Loading...</div>,
    ssr: false
})
const WhatsAppOutlined = dynamic(() => import('@ant-design/icons/WhatsAppOutlined'), {
    loading: () => <div>Loading...</div>,
    ssr: false
})
const InstagramFilled = dynamic(() => import('@ant-design/icons/InstagramFilled'), {
    loading: () => <div>Loading...</div>,
    ssr: false
})

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
                console.log('Fetched icons:', data) // Debug log
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
                console.log('Processing icon:', iconName) // Debug log
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