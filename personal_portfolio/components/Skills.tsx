export default function Skills() {
  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express", 
    "MongoDB", "PostgreSQL", "GraphQL", "AWS", "Docker", "Git"
  ]

  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

