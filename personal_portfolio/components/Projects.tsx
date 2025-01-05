import { ExternalLink, GitlabIcon as GitHub } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB.",
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      title: "Task Management App",
      description: "A React-based task management application with drag-and-drop functionality.",
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      title: "Weather Dashboard",
      description: "A weather dashboard using React and integrating with a weather API.",
      github: "https://github.com",
      live: "https://example.com",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex space-x-4">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-600">
                <GitHub size={20} />
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-600">
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

