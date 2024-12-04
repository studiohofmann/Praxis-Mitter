'use client'

import { useState } from 'react'
import Hyperlinks from './Hyperlinks'
import { MenuOutlined, CloseOutlined } from '@ant-design/icons'

export default function Navigation() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <header className="fixed w-full top-0 bg-red-300">
            {/* Desktop Menu */}
            <div className="hidden md:block px-6 py-4">
            </div>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden fixed top-4 right-4 z-50 p-2"
            >
                {isMobileMenuOpen ? (
                    <CloseOutlined className="text-2xl transition-all duration-300" />
                ) : (
                    <MenuOutlined className="text-2xl transition-all duration-300" />
                )}
            </button>

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