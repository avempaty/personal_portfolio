"use client"
import Link from 'next/link'
import { useEffect} from 'react'
import { gsap } from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
export default function Header() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.to("header", {
      scrollTiger: {
        trigger: "header",
        start: "top top",
        toggleClass: {
          targets: "header",
          className: "header-scrolled"
        }
      }
    })
  })

  return (
    <header className="sticky top-0 shadow-md radial-blue transition-all duration-300">
      <nav className="container mx-auto px-4 py-4 scroll-smooth snap-mandatory snap-y">
        <ul className="flex justify-center space-x-6">
          <li><Link href="#home" className="text-white hover:font-bold transform transition-transform">Home</Link></li>
          <li><Link href="#skills" className="text-white hover:font-bold transform transition-transform">Skills</Link></li>
          <li><Link href="#projects" className="text-white hover:font-bold transform transition-transform">Projects</Link></li>
          <li><Link href="#contact" className="text-white hover:font-bold transform transition-transform">Contact</Link></li>
          <li><Link href="../Aneesh Resume 2025 -SF.pdf" target='_blank' className="text-white hover:font-bold">Resume</Link></li>
        </ul>
      </nav>
    </header>
  )
}

