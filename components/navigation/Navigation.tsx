'use client'

import { useState } from 'react'
import Hyperlinks from './Hyperlinks'
import Icons from './Icons'
import { MenuOutlined, CloseOutlined } from '@ant-design/icons'
import Link from 'next/link'

export default function Navigation() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <header className="fixed w-full top-0 h-20 bg-red-300 z-10">
            <div className='flex justify-between'>
                {/* Logo */}
                <Link href="/">
                    LOGO
                </Link>

                {/* Icons */}
                <Icons />

                {/* Desktop Menu */}
                <div className="hidden md:block">
                    <Hyperlinks />
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden"
                >
                    {isMobileMenuOpen ? (
                        <CloseOutlined className="text-2xl transition-all duration-300" />
                    ) : (
                        <MenuOutlined className="text-2xl transition-all duration-300" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`
                md:hidden fixed top-0 right-0 h-screen w-full z-10
                bg-red-200 shadow-lg transition-opacity duration-300 ease-in-out
                ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
            `}>
                <div className="pt-16">
                    <Hyperlinks onLinkClick={() => setIsMobileMenuOpen(false)} />
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="md:hidden fixed inset-0 bg-black bg-opacity-50"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}
        </header>
    )
}