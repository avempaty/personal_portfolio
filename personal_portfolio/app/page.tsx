import Header from './components/Header'
import Introduction from './components/Introduction'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Introduction />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

