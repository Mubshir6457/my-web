'use client'

import { useEffect } from 'react'
import Header from "@/components/Header"
import Hero from '@/components/Hero'
import AboutMe from '@/components/AboutMe'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'

export default function Home() {
  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault()
      const target = e.target as HTMLAnchorElement
      const id = target.getAttribute('href')?.slice(1)
      if (id) {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          })
        }
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach(link => {
      link.addEventListener('click', handleScroll)
    })

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleScroll)
      })
    }
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Header />
      <Hero />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}