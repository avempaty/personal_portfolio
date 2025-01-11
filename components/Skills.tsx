export default function Skills() {
  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express", "PostgreSQL", "GraphQL", "AWS", 
  ]

  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <span key={index} className="border border-white text-white px-3 py-1 rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

