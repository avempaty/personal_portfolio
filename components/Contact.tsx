import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { GitlabIcon as GitHub, Linkedin, Mail } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">Contact Me</h2>
      <form className="max-w-md mx-auto">
        <div className="mb-4 placeholder-white"> 
          <Input className ="mb-4 placeholder-white" type="text" placeholder="Your Name" required />
        </div>
        <div className="mb-4">
          <Input type="email" placeholder="Your Email" required />
        </div>
        <div className="mb-4">
          <Textarea placeholder="Your Message" rows={4} required />
        </div>
        <Button type="submit" className="w-full">Send Message</Button>
      </form>
      <div className="flex justify-center space-x-4 mt-8">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600">
          <GitHub size={24} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600">
          <Linkedin size={24} />
        </a>
        <a href="mailto:aneesh.vempaty@gmail.com" className="text-white hover:text-blue-600">
          <Mail size={24} />
        </a>
      </div>
    </section>
  )
}

