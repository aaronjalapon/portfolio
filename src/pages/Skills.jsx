import { motion } from 'framer-motion'
import { 
  Code2, Database, Brain, Cloud, Palette, Users,
  FileCode, Server, Cpu, Globe, Figma, GitBranch
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

      {/* Skills Grid */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="card"
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
            ))}
          </div>
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
