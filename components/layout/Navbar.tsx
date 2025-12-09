"use client"

import { GoogleTagManager } from '@next/third-parties/google';

import {Button} from "@/components/ui/button"
import Link from "next/link"
import {ChevronDown, Menu, Phone} from "lucide-react"
import Image from "next/image"
import {useState, useEffect, useRef} from "react"

type NavItem = {
    label: string
    href: string
}

type NavGroup = {
    label: string
    items: NavItem[]
}

const primaryNav: (NavItem)[] = [
    {label: "SERVICE", href: "/service"},
    {label: "SUPPORT", href: "/support"},
    {label: "SUPPLY", href: "/supply"},
    {label: 'ABOUT US', href: '/about'}
]

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [openDropdowns, setOpenDropdowns] = useState<number[]>([])
    const mobileMenuRef = useRef<HTMLDivElement>(null)
    const menuButtonRef = useRef<HTMLButtonElement>(null)

    const isNavGroup = (item: NavItem | NavGroup): item is NavGroup => {
        return 'items' in item
    }

    const toggleDropdown = (index: number) => {
        setOpenDropdowns(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        )
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                (mobileMenuRef.current &&
                    !mobileMenuRef.current.contains(event.target as Node)) &&
                (menuButtonRef.current &&
                    !menuButtonRef.current.contains(event.target as Node))
            ) {
                setIsMobileMenuOpen(false)
                setOpenDropdowns([])
            }
        }

        const handleScroll = () => {
            if (isMobileMenuOpen) {
                setIsMobileMenuOpen(false)
                setOpenDropdowns([])
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        window.addEventListener('scroll', handleScroll)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            window.removeEventListener('scroll', handleScroll)
        }
    }, [isMobileMenuOpen])

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
            <GoogleTagManager gtmId="G-7385J6MX2L" />
            <div className="border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-4">
                            <Link href="/" className="text-primary font-bold text-xl">
                                <Image src="/logos/tpiwbg.png" alt="TPI CNC" className="w-auto" width={120}
                                       height={96}/>
                            </Link>
                            <span className="text-xs md:text-sm lg:text-base tracking-wider font-medium">
                <span className="text-brand-black">SERVICE</span>
                <span className="text-primary/80 mx-2">•</span>
                <span className="text-brand-black">SUPPORT</span>
                <span className="text-primary/80 mx-2">•</span>
                <span className="text-brand-black">SUPPLY</span>
              </span>
            </div>
            
            {/* Enhanced CTA Button */}
            <div className="hidden sm:flex items-center gap-6">
              {/* Phone Number */}
              <div className="flex items-center gap-2 text-brand-blue">
                <Phone className="h-5 w-5" />
                <a 
                  href="tel:+15195638900"
                  className="text-lg font-semibold hover:text-brand-blue/80 transition-colors text-primary"
                >
                  (519) 563-8900
                </a>
              </div>

                            {/* Separator */}
                            <div className="h-8 w-px bg-gray-200"/>

                            {/* CTA Button */}
                            <Button
                                asChild
                                size="lg"
                                className="
                  bg-brand-blue hover:bg-brand-blue/90 
                  text-white
                  px-8 py-6 text-lg
                  shadow-lg hover:shadow-xl
                  transform hover:scale-105
                  transition-all duration-200
                  rounded-md
                  border-2 border-brand-blue/20
                  animate-subtle-pulse
                "
                            >
                                <Link href="/quote">
                                    Request Service →
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Mobile menu button - moved to the right edge */}
                <div className="float-right right-4" ref={mobileMenuRef}>
                    <Button
                        variant="ghost"
                        className="h-16 w-16 p-0 m-0"
                        onClick={() => setIsMobileMenuOpen(v => !v)}
                    >
                        <Menu className="h-16 w-16 scale-[2.5]"/>
                    </Button>
                </div>

                {/* Mobile menu - remains the same */}
                {isMobileMenuOpen && (
                    <div
                        ref={mobileMenuRef}
                        className="py-4 bg-white border-t"
                    >
                        <div className="flex flex-col items-center space-y-4 p-4">
                            {/* Add Quote button at the top of mobile menu */}
                            <div className="w-full max-w-xs mb-2">
                                <Button
                                    className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white"
                                    asChild
                                    onClick={() => {
                                        setIsMobileMenuOpen(false)
                                        setOpenDropdowns([])
                                    }}
                                >
                                    <Link href="/quote">
                                        Request Service →
                                    </Link>
                                </Button>
                            </div>
                            {primaryNav.map((item, index) => (
                                <div key={index} className="w-full max-w-xs">
                                    {isNavGroup(item) ? (
                                        <div className="w-full">
                                            <Button
                                                variant="ghost"
                                                className="w-full flex justify-between items-center font-medium"
                                                onClick={() => toggleDropdown(index)}
                                            >
                                                <span className="text-left">{item.label}</span>
                                                <ChevronDown
                                                    className={`h-4 w-4 ml-2 flex-shrink-0 transition-transform duration-200 ${
                                                        openDropdowns.includes(index) ? 'rotate-180' : ''
                                                    }`}
                                                />
                                            </Button>
                                        </div>
                                    ) : (
                                        <Button
                                            variant="ghost"
                                            className="w-full text-left justify-start font-medium"
                                            asChild
                                            onClick={() => {
                                                setIsMobileMenuOpen(false)
                                                setOpenDropdowns([])
                                            }}
                                        >
                                            <Link href={item.href}>
                                                {item.label}
                                            </Link>
                                        </Button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}