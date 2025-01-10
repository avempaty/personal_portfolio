import { ExternalLink, GitlabIcon as GitHub } from 'lucide-react'
import Image from 'next/image'

export default function Projects() {
  const projects = [
    {
      title: "Vibe",
      description: "An interactive web application that uses Spotify API for sharing music. The application looks similar to Instagram for desktop and contains a user base, song collection, and ability to listen to music.",
      github: "https://github.com/SleepyCitrus/MyMelody",
      img: "/images/Vibe.png"
    },
    {
      title: "Perspective",
      description: "A 3D immersive virtual reality puzzle game created through Unity. The player spawns in a maze and must manipulate gravity in order to find the exit. The game takes use of a virtual reality device.",
      github: "https://github.com",
      live: "https://perspective-499af.firebaseapp.com",
      img: "/images/Perspective.png"
    },
    {
      title: "Uberlytics",
      description: "A website that takes advantages of Uber's Surge API and stores into into a cloud database. The data is then manipulated to show trends and possibly predict surge variations through the day.",
      github: "https://github.com/SleepyCitrus/Uberlytics-Official",
      img: "/images/Uber.png"
    },
  ]

  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-black p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
            <img src={project.img} className="w-full h-49 object-cover mb-4 rounded-lg" />
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex space-x-4">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600">
                <GitHub size={20} />
              </a>
            {project.live?  (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600">
              <ExternalLink size={20} />
            </a>
            ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

