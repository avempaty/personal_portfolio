import { GitlabIcon as GitHub, Linkedin, Mail } from 'lucide-react'

export default function Introduction() {
  return (
    <section id="home" className="py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">Aneesh Vempaty</h1>
      <h2 className="text-2xl text-gray-600 mb-6">Full Stack Developer</h2>
      <p className="text-lg max-w-2xl mx-auto mb-8">
        Passionate about creating elegant, efficient, and user-friendly web applications. 
      </p>
      <div className="flex justify-center space-x-4">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-600">
          <GitHub size={24} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-600">
          <Linkedin size={24} />
        </a>
        <a href="mailto:john@example.com" className="text-gray-800 hover:text-blue-600">
          <Mail size={24} />
        </a>
      </div>
    </section>
  )
}

