"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import LogoFile from '../../public/logo.svg'

interface LogoProps {
    onClick?: () => void;
}

export default function Logo({ onClick }: LogoProps) {
    const pathname = usePathname()
    const isActive = pathname === '/'

    return (
        <Link href="/" onClick={onClick} className={isActive ? 'active' : ''}>
            <LogoFile className="w-16" />
        </Link>
    )
}