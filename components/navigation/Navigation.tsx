'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Hyperlinks from './Hyperlinks'
import Icons from './Icons'
import { MenuOutlined, CloseOutlined } from '@ant-design/icons'
import Logo from './Logo'

export default function Navigation() {
    const pathname = usePathname()
    const isHomePage = pathname === '/'

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [prevScrollPos, setPrevScrollPos] = useState(0)
    const [visible, setVisible] = useState(true)
    const [isBackgroundVisible, setIsBackgroundVisible] = useState(!isHomePage) // Initialize based on path

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY
            setIsBackgroundVisible(true)
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10)
            setPrevScrollPos(currentScrollPos)
        }

        const handleClick = () => {
            setIsBackgroundVisible(true)
            setVisible(true)
        }

        window.addEventListener('scroll', handleScroll)
        window.addEventListener('click', handleClick)

        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('click', handleClick)
        }
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
            ${isBackgroundVisible ? 'bg-green-400' : 'bg-transparent'}
        `}>
            {/* Main Navigation Content */}
            <div className='flex justify-between items-center px-4 h-full z-50'>
                {/* Logo with click handler */}
                <div className='z-50'>
                    <Logo onClick={() => setIsMobileMenuOpen(false)} />
                </div>

                <div className="flex items-center gap-8 z-30">
                    {/* Icons */}
                    <Icons />

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <Hyperlinks variant="desktop" />
                    </div>

                    {/* Mobile Menu Button */}
                    <div
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden"
                    >
                        {isMobileMenuOpen ? (
                            <a>
                                <CloseOutlined className="text-xl cursor-pointer" />
                            </a>
                        ) : (
                            <a>
                                <MenuOutlined className="text-xl" />
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`
                md:hidden fixed top-0 left-0 h-screen w-screen z-20
                bg-blue-500 transition-opacity duration-300 ease-in-out
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