import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Calendar, ArrowRight, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { PopupModal } from 'react-calendly'
import SectionHeader from '../components/SectionHeader'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'aaronjalapon@gmail.com',
    href: 'mailto:aaronjalapon@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Philippines',
    href: null,
  },
]

const socialLinks = [
  { 
    icon: Linkedin, 
    label: 'LinkedIn', 
    href: 'https://www.linkedin.com/in/aaron-jalapon-5aba74290/',
    description: 'Connect professionally'
  },
  { 
    icon: Github, 
    label: 'GitHub', 
    href: 'https://github.com/aaronjalapon',
    description: 'Check out my code'
  },
  { 
    icon: Twitter, 
    label: 'Twitter', 
    href: 'https://x.com/Itisaaron18',
    description: 'Follow my updates'
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          project_type: formData.projectType || 'Not specified',
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      setSubmitted(true)
      setFormData({ name: '', email: '', projectType: '', message: '' })
    } catch (err) {
      console.error('EmailJS Error:', err)
      setError('Failed to send message. Please try again or email me directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-dark-800">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Interested in working together? I'm always open to discussing new projects, 
              creative ideas, or opportunities to be part of your vision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
              
              {submitted ? (
                <div className="card text-center py-12">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send size={28} className="text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-400">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-700 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-700 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-2">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-700 border border-white/10 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
                    >
                      <option value="">Select a project type</option>
                      <option value="web-development">Web Development</option>
                      <option value="ml-ai">ML / AI Project</option>
                      <option value="iot">IoT System</option>
                      <option value="consulting">Consulting</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-dark-700 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={18} />
                      </>
                    )}
                  </button>

                  {error && (
                    <div className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400">
                      <AlertCircle size={18} />
                      <span>{error}</span>
                    </div>
                  )}
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Contact Info</h2>
                <div className="space-y-4">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon size={22} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-white hover:text-primary transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-white">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Connect Online</h2>
                <div className="space-y-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card card-hover flex items-center gap-4 py-4"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <social.icon size={22} className="text-primary" />
                      </div>
                      <div className="flex-grow">
                        <p className="text-white font-medium">{social.label}</p>
                        <p className="text-sm text-gray-500">{social.description}</p>
                      </div>
                      <ArrowRight size={18} className="text-gray-500" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Schedule Call CTA */}
              <div className="card bg-gradient-to-br from-primary/10 to-dark-700 border-primary/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Calendar size={22} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Schedule a Call</h3>
                    <p className="text-sm text-gray-400">Let's discuss your project</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  Prefer a live conversation? Schedule a 30-minute call to discuss your project 
                  requirements and how we can work together.
                </p>
                <button
                  onClick={() => setIsCalendlyOpen(true)}
                  className="btn-primary w-full justify-center gap-2"
                >
                  Book a Meeting
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Calendly Popup */}
      <PopupModal
        url="https://calendly.com/aaronjalapon"
        onModalClose={() => setIsCalendlyOpen(false)}
        open={isCalendlyOpen}
        rootElement={document.getElementById('root')}
      />
    </div>
  )
}
