import { Link } from 'react-router-dom'
import { Github, Linkedin, Twitter, Instagram, Mail, ArrowUp } from 'lucide-react'

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/aaron-jalapon-5aba74290/', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/aaronjalapon', label: 'GitHub' },
  { icon: Twitter, href: 'https://x.com/Itisaaron18', label: 'Twitter' },
  { icon: Instagram, href: 'https://www.instagram.com/aeyrown18/', label: 'Instagram' },
  { icon: Mail, href: 'mailto:aaronjalapon@gmail.com', label: 'Email' },
]

const quickLinks = [
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Experience', href: '/experience' },
  { name: 'Contact', href: '/contact' },
]

const featuredProjects = [
  { name: 'TanUM Nanotech', href: '/projects/tanum' },
  { name: 'Mindspace', href: '/projects/mindspace' },
  { name: 'RealiTech', href: '/projects/realitech' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-dark-800 border-t border-white/5">
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="text-3xl font-bold text-primary">
              Aaron
            </Link>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Software & ML Engineer building user-first web apps and AI systems 
              that solve real problems.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-dark-700 rounded-lg text-gray-400 hover:text-primary hover:bg-dark-600 transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Projects */}
          <div>
            <h4 className="text-white font-semibold mb-4">Featured Projects</h4>
            <ul className="space-y-3">
              {featuredProjects.map((project) => (
                <li key={project.name}>
                  <Link 
                    to={project.href}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {project.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
            <p className="text-gray-400 text-sm mb-4">
              Interested in working together? Let's connect!
            </p>
            <Link 
              to="/contact" 
              className="btn-primary text-sm"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Aaron Jalapon. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="p-2 bg-dark-700 rounded-lg text-gray-400 hover:text-primary hover:bg-dark-600 transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  )
}
