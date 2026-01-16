import { useState, useCallback, useEffect } from 'react'
import { motion } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import { 
  Code2, Database, Brain, Cloud, Palette, Users,
  FileCode, Server, Cpu, Globe, Figma, GitBranch,
  ChevronLeft, ChevronRight
} from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import SEO from '../components/SEO'

const skillCategories = [
  {
    title: 'Languages & Frameworks',
    icon: Code2,
    skills: [
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'React', level: 85 },
      { name: 'Node.js / Express', level: 80 },
      { name: 'Flask / Django', level: 75 },
      { name: 'TypeScript', level: 70 },
    ]
  },
  {
    title: 'ML & Data',
    icon: Brain,
    skills: [
      { name: 'scikit-learn', level: 85 },
      { name: 'Data Pipelines', level: 80 },
      { name: 'Model Deployment', level: 75 },
      { name: 'TensorFlow / PyTorch', level: 65 },
      { name: 'Data Visualization', level: 80 },
      { name: 'Feature Engineering', level: 75 },
    ]
  },
  {
    title: 'DevOps & Infrastructure',
    icon: Cloud,
    skills: [
      { name: 'Docker', level: 80 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'REST APIs', level: 90 },
      { name: 'Git / GitHub', level: 90 },
      { name: 'GCP / AWS / Vercel', level: 70 },
      { name: 'CI/CD', level: 65 },
    ]
  },
  {
    title: 'Design & UX',
    icon: Palette,
    skills: [
      { name: 'Figma', level: 80 },
      { name: 'Responsive Design', level: 90 },
      { name: 'Accessibility (a11y)', level: 80 },
      { name: 'UI Prototyping', level: 75 },
      { name: 'User Research', level: 70 },
    ]
  },
  {
    title: 'Soft Skills',
    icon: Users,
    skills: [
      { name: 'Product Design', level: 85 },
      { name: 'Sprint Leadership', level: 80 },
      { name: 'Cross-discipline Collaboration', level: 85 },
      { name: 'Technical Documentation', level: 80 },
      { name: 'User Research', level: 75 },
    ]
  },
]

const tools = [
  { name: 'VS Code', icon: FileCode },
  { name: 'Git', icon: GitBranch },
  { name: 'Docker', icon: Server },
  { name: 'Figma', icon: Figma },
  { name: 'PostgreSQL', icon: Database },
  { name: 'Vercel', icon: Globe },
]

// Skills Carousel Component
function SkillsCarousel({ categories }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'start',
    loop: true,
    slidesToScroll: 1,
  })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index) => emblaApi?.scrollTo(index), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    setScrollSnaps(emblaApi.scrollSnapList())
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

  // Keyboard navigation
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowLeft') scrollPrev()
    if (e.key === 'ArrowRight') scrollNext()
  }, [scrollPrev, scrollNext])

  return (
    <div 
      className="relative"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Skills carousel"
    >
      {/* Carousel viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex ml-[calc(-1.5rem)]">
          {categories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_33.333%] min-w-0 pl-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="card h-full"
              >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <category.icon size={20} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm text-gray-300">{skill.name}</span>
                      <span className="text-xs text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-dark-600 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-primary to-blue-400 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-dark-700 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary/20 hover:border-primary/50 transition-all hidden md:flex"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-dark-700 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary/20 hover:border-primary/50 transition-all hidden md:flex"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Pagination dots */}
      <div className="flex justify-center gap-2 mt-6">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === selectedIndex 
                ? 'bg-primary w-8' 
                : 'bg-dark-600 hover:bg-dark-500'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <>
      <SEO
        title="Skills"
        description="Technical skills and expertise of Aaron Jalapon — Python, React, Machine Learning, DevOps, UX Design, and more."
        url="/skills"
      />
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
              Technical Skills
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Skills & <span className="gradient-text">Technologies</span>
            </h1>
            <p className="text-gray-400 text-lg">
              A comprehensive overview of my technical expertise and the tools I use to build 
              impactful solutions across AI/ML, web development, and IoT systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Carousel */}
      <section className="section-padding">
        <div className="section-container">
          <SkillsCarousel categories={skillCategories} />
        </div>
      </section>

      {/* Tools */}
      <section className="section-padding bg-dark-800">
        <div className="section-container">
          <SectionHeader 
            title="Tools I Use"
            subtitle="My go-to tools and platforms for development and design."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="card card-hover text-center py-8"
              >
                <tool.icon size={32} className="text-primary mx-auto mb-3" />
                <span className="text-sm text-gray-300">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <SectionHeader 
              title="Currently Learning"
              subtitle="Technologies and concepts I'm actively exploring."
            />

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="flex flex-wrap gap-3">
                {[
                  'Advanced Deep Learning',
                  'MLOps & Model Monitoring',
                  'Kubernetes',
                  'System Design',
                  'Rust',
                  'Real-time Data Streaming',
                ].map((topic) => (
                  <span 
                    key={topic}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}
