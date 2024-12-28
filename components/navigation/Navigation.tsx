'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Hyperlinks from './Hyperlinks'
import Icons from './Icons'
import { MenuOutlined, CloseOutlined } from '@ant-design/icons'
import Logo from './Logo'

export default function Navigation() {
    const pathname = usePathname()
    const isHomePage = pathname === '/'; // Check if the current page is the homepage
    const [isInitialLoad, setIsInitialLoad] = useState(isHomePage); // Initial load should be true on the homepage
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [prevScrollPos, setPrevScrollPos] = useState(0)
    const [visible, setVisible] = useState(true)
    const [isBackgroundVisible, setIsBackgroundVisible] = useState(!isHomePage) // Background is visible only after homepage

    useEffect(() => {
        // Only apply the scroll behavior to all pages, not just homepage
        const handleScroll = () => {
            const currentScrollPos = window.scrollY
            setIsInitialLoad(false); // Set to false after the initial load
            setIsBackgroundVisible(true)
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10) // Hide menu on scroll down
            setPrevScrollPos(currentScrollPos)
        }

        const handleClick = () => {
            setIsInitialLoad(false); // User has clicked, menu should remain visible
            setIsBackgroundVisible(true)
            setVisible(true) // Keep menu visible on click
        }

        window.addEventListener('scroll', handleScroll)
        window.addEventListener('click', handleClick)

        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('click', handleClick)
        }
    }, [prevScrollPos]) // Depend on scroll position, not homepage

    useEffect(() => {
        // Adjust body overflow and padding when mobile menu is open
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
        <header
            className={`
                fixed w-full top-0 transition-all duration-300 z-40
                ${visible ? 'translate-y-0' : '-translate-y-full'}
                ${isInitialLoad
                    ? 'bg-transparent text-green-100' // Homepage initial load styles
                    : isBackgroundVisible
                        ? 'bg-green-500 text-black' // After scroll, the background turns green
                        : 'bg-transparent text-black' // Background turns transparent after scroll
                }
            `}
        >
            {/* Main Navigation Content */}
            <div className='flex justify-between items-center p-4 md:px-8 z-50'>
                <div className='z-50'>
                    <Logo onClick={() => setIsMobileMenuOpen(false)} />
                </div>

                <div className="flex items-center gap-8 z-30">
                    {/* Icons */}
                    <Icons isInitialLoad={isInitialLoad} />

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <Hyperlinks variant="desktop" isInitialLoad={isInitialLoad} />
                    </div>

                    {/* Mobile Menu Button */}
                    <div
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden cursor-pointer"
                    >
                        {isMobileMenuOpen ? (
                            <a>
                                <CloseOutlined className={`text-xl ${isInitialLoad ? 'text-green-100' : ''}`} />
                            </a>
                        ) : (
                            <a>
                                <MenuOutlined className={`text-xl ${isInitialLoad ? 'text-green-100' : ''}`} />
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`
                md:hidden fixed top-0 left-0 h-screen w-screen z-20
                bg-blue-600 transition-opacity duration-300 ease-in-out
                overflow-hidden
                ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
            `}>

                <Hyperlinks
                    variant="mobile"
                    onLinkClick={() => setIsMobileMenuOpen(false)}
                />

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
