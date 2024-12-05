'use client'

import { useState, useEffect } from 'react'
import Hyperlinks from './Hyperlinks'
import Icons from './Icons'
import { MenuOutlined, CloseOutlined } from '@ant-design/icons'
import Link from 'next/link'

export default function Navigation() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [prevScrollPos, setPrevScrollPos] = useState(0)
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY

            // Background opacity
            // Hide on scroll down, show on scroll up
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10)
            setPrevScrollPos(currentScrollPos)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [prevScrollPos])

    useEffect(() => {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth

        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
            document.body.style.paddingRight = `${scrollbarWidth}px`
        } else {
            document.body.style.overflow = 'unset'
            document.body.style.paddingRight = '0'
        }

        return () => {
            document.body.style.overflow = 'unset'
            document.body.style.paddingRight = '0'
        }
    }, [isMobileMenuOpen])

    return (
        <header className={`
            fixed w-full top-0 h-16 transition-all duration-300 z-40
            ${visible ? 'translate-y-0' : '-translate-y-full'}
            bg-green400
        `}>
            {/* Main Navigation Content */}
            <div className='flex justify-between items-center px-4 h-full z-50'>
                {/* Logo with click handler */}
                <Link
                    href="/"
                    className='z-30'
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    Praxis Mitter
                </Link>

                <div className="flex items-center gap-8 z-30">
                    {/* Icons */}
                    <Icons />

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <Hyperlinks />
                    </div>

                    {/* Mobile Menu Button */}
                    <div
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden"
                    >
                        {isMobileMenuOpen ? (
                            <a>
                                <CloseOutlined className="a" />
                            </a>
                        ) : (
                            <a>
                                <MenuOutlined className="a" />
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`
                md:hidden fixed top-0 left-0 h-screen w-screen z-20
                bg-brown400 transition-opacity duration-300 ease-in-out
                overflow-hidden
                ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
            `}>
                <div className="h-full w-full flex items-center justify-center pt-16">
                    <Hyperlinks variant="mobile" onLinkClick={() => setIsMobileMenuOpen(false)} />
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-10"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}
        </header>
    )
}