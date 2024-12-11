"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import LogoFile from '../../public/logo-norway400.svg'

export default function Logo() {
    const pathname = usePathname()
    const isActive = pathname === '/'

    return (
        <Link href="/" className={isActive ? 'active' : ''}>
            <LogoFile className="w-16" />
        </Link>
    )
}