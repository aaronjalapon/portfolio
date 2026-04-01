import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Download, MapPin, GraduationCap, Heart, Target, ExternalLink } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import SEO from '../components/SEO'

const highlights = [
  {
    icon: Target,
    title: 'Product-Minded',
    description: 'I approach development with a product mindset, focusing on user needs and business impact.'
  },
  {
    icon: Heart,
    title: 'Impact-Driven',
    description: 'I build software that bridges technical innovation and real-world impact.'
  },
  {
    icon: GraduationCap,
    title: 'Continuous Learner',
    description: 'Always exploring new technologies and methodologies to deliver better solutions.'
  },
]

const interests = [
  'Sustainable Technology',
  'Machine Learning & AI',
  'IoT & Embedded Systems',
  'User Experience Design',
  'Open Source',
  'Agritech Innovation',
]

const articles = [
  {
    title: 'UM Teams Win 3 Gold & 1 Silver at FIMiEx 2025, Malaysia',
    source: 'PRIMUM / UM Facebook',
    date: 'November 2025',
    description: 'Aaron Jalapon credited as key contributor and original developer of TanimPro, a technology-driven tool that boosts farm productivity, at the Faculty Industrial Management International Innovation Exhibition in Malaysia.',
    url: 'https://www.facebook.com/photo/?fbid=1323728336457110&set=a.693356426160974',
  },
  {
    title: 'TanUM Triumphs at Mindanao-Wide Tech Transfer Conference — 1st Place Pitching',
    source: 'University of Mindanao',
    date: 'October 2025',
    description: 'TanUM Nano Tech Solutions secured 1st Place in Pitching and 2nd Place in Poster Competition at the 2025 Mindanao-Wide Technology Transfer Conference hosted by Caraga State University.',
    url: 'https://umindanao.edu.ph/info/news/article/719',
  },
  {
    title: 'TanUM is First Runner Up at UPLB Innovation Olympics 3.0',
    source: 'University of Mindanao',
    date: 'September 2025',
    description: 'TanUM Nanotech Solutions finished as first runner up in the Innovation Olympics 3.0 at UP Los Baños, supported by the Asian Development Bank and SEARCA.',
    url: 'https://umindanao.edu.ph/info/news/article/696',
  },
  {
    title: 'TanUM Among Top 10 Qualifying Teams at Innovation Olympics 3.0, UPLB',
    source: 'University of Mindanao',
    date: 'August 2025',
    description: 'The team — Aaron A. Jalapon (BSCS), Windel A. Andan (BSECE), and Marcy Nil A. Ogsoc (BSChE) — qualified among the Top 10 student teams for the SmartAgri-themed Innovation Olympics 3.0.',
    url: 'https://umindanao.edu.ph/info/news/article/ums-tanum-nano-tech-solutions-among-the-top-10-qualifying-student-teams-at-the-innovation-olympics-30-at-uplb',
  },
]

export default function About() {
  return (
    <>
      <SEO
        title="About"
        description="Learn about Aaron Jalapon — a product-minded Software & ML Engineer from the Philippines, focused on AI/ML-driven solutions and user-centered front ends. Recognized in university news and international exhibitions for agritech innovation."
        url="/about"
      />
      <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-dark-800">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-500 rounded-2xl blur-2xl opacity-30" />
                <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-primary/30">
                  <img 
                    src="/fb.jpeg" 
                    alt="Aaron Jalapon"
                    loading="lazy"
                    width={384}
                    height={384}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                About Me
              </span>
              
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Aaron Jalapon Arquillano
              </h1>
              
              <p className="flex items-center gap-2 text-gray-400 mb-6">
                <MapPin size={18} className="text-primary" />
                Philippines
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm a <span className="text-primary font-medium">BS Computer Science student</span> and 
                product-minded developer focused on AI/ML-driven solutions and user-centered front ends. 
                I build software that bridges technical innovation and real-world impact.
              </p>

              <p className="text-gray-400 leading-relaxed mb-6">
                I am also known as Aaron Jalapon. Through the Affidavit to Use the Surname of the Father (AUSF)
                under Republic Act No. 9255, I now use my full name, Aaron Jalapon Arquillano.
              </p>

              <p className="text-gray-400 leading-relaxed mb-8">
                My featured projects include <strong className="text-white">TanUM</strong> (smart soil & fertilizer optimization), 
                <strong className="text-white"> Mindspace</strong> (student mental-health UI), and 
                <strong className="text-white"> RealiTech</strong> (proptech ecosystem). 
                I'm passionate about sustainable tech, practical ML, and shipping polished, maintainable code.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/projects" className="btn-primary gap-2">
                  View My Work
                  <ArrowRight size={18} />
                </Link>
                <a href="/resume.pdf" target="_blank" className="btn-outline gap-2">
                  <Download size={18} />
                  Download Résumé
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="section-padding">
        <div className="section-container">
          <SectionHeader 
            title="What I Do"
            subtitle="I combine technical expertise with a product mindset to build impactful solutions."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card card-hover text-center"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests */}
      <section className="section-padding bg-dark-800">
        <div className="section-container">
          <SectionHeader 
            title="Interests & Focus Areas"
            subtitle="The domains and technologies I'm most passionate about."
          />

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto"
          >
            {interests.map((interest) => (
              <span 
                key={interest}
                className="px-5 py-3 bg-dark-700 text-gray-300 rounded-full border border-white/5 hover:border-primary/30 hover:text-primary transition-all"
              >
                {interest}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Goals */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <SectionHeader 
              title="Goals & Vision"
              subtitle=""
            />
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card"
            >
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                My goal is to become a well-rounded software engineer who can bridge the gap between 
                cutting-edge technology and practical, user-focused solutions. I aim to:
              </p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2" />
                  Build AI/ML systems that create tangible value for communities
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2" />
                  Lead product development with a focus on user experience and business impact
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2" />
                  Contribute to sustainable technology and agritech innovation
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2" />
                  Mentor and collaborate with fellow developers to grow together
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Press & Recognition */}
      <section className="section-padding bg-dark-800">
        <div className="section-container">
          <SectionHeader 
            title="Press & Recognition"
            subtitle="Featured in university news and international exhibitions for innovation in agritech and sustainable technology."
          />

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {articles.map((article, index) => (
              <motion.a
                key={article.title}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card card-hover group flex flex-col"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <ExternalLink size={18} className="text-gray-500 group-hover:text-primary transition-colors shrink-0 mt-1" />
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                  {article.description}
                </p>
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded-md font-medium">
                    {article.source}
                  </span>
                  <span>{article.date}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary/10 via-dark-800 to-dark-900">
        <div className="section-container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Want to Learn More?
            </h2>
            <p className="text-gray-400 mb-8">
              Check out my projects to see my work in action, or get in touch to discuss collaboration opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/projects" className="btn-primary gap-2">
                View Projects
                <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn-outline">
                Contact Me
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  )
}
