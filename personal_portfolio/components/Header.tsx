import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex justify-center space-x-6">
          <li><Link href="#home" className="text-gray-800 hover:text-blue-600">Home</Link></li>
          <li><Link href="#skills" className="text-gray-800 hover:text-blue-600">Skills</Link></li>
          <li><Link href="#projects" className="text-gray-800 hover:text-blue-600">Projects</Link></li>
          <li><Link href="#contact" className="text-gray-800 hover:text-blue-600">Contact</Link></li>
          <li><a href="../Aneesh Resume 2025 -SF.pdf" className="text-gray-800 hover:text-blue-600">Resume</a></li>
        </ul>
      </nav>
    </header>
  )
}

