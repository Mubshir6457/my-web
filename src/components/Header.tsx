import Link from 'next/link'
import { Menu } from 'lucide-react'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          M.Mubashir
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="#about" className="hover:text-blue-400 transition-colors">About</Link>
          <Link href="#projects" className="hover:text-blue-400 transition-colors">Projects</Link>
          <Link href="#skills" className="hover:text-blue-400 transition-colors">Skills</Link>
          <Link href="#contact" className="hover:text-blue-400 transition-colors">Contact</Link>
        </div>
        <button className="md:hidden">
          <Menu className="w-6 h-6" />
        </button>
      </nav>
    </header>
  )
}

