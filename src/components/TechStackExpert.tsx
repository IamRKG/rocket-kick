import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaAws, FaDocker, FaVuejs, FaAngular, FaGitlab, FaJenkins } from 'react-icons/fa'
import { SiTypescript, SiNextdotjs, SiExpress, SiKubernetes, SiTerraform } from 'react-icons/si'

const technologies = [
  { name: 'React', icon: FaReact, category: 'Frontend', color: '#61DAFB' },
  { name: 'Vue.js', icon: FaVuejs, category: 'Frontend', color: '#4FC08D' },
  { name: 'Angular', icon: FaAngular, category: 'Frontend', color: '#DD0031' },
  { name: 'TypeScript', icon: SiTypescript, category: 'Frontend', color: '#3178C6' },
  { name: 'Next.js', icon: SiNextdotjs, category: 'Frontend', color: '#000000' },
  { name: 'Node.js', icon: FaNodeJs, category: 'Backend', color: '#339933' },
  { name: 'Express', icon: SiExpress, category: 'Backend', color: '#000000' },

  { name: 'AWS', icon: FaAws, category: 'DevOps', color: '#FF9900' },
  { name: 'Docker', icon: FaDocker, category: 'DevOps', color: '#2496ED' },
  { name: 'Kubernetes', icon: SiKubernetes, category: 'DevOps', color: '#326CE5' },
  { name: 'GitLab CI', icon: FaGitlab, category: 'DevOps', color: '#FCA121' },
  { name: 'Jenkins', icon: FaJenkins, category: 'DevOps', color: '#D24939' },
  { name: 'Terraform', icon: SiTerraform, category: 'DevOps', color: '#7B42BC' },
]

const categories = ['All', 'Frontend', 'Backend', 'DevOps']

export default function TechStackExpert() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredTechnologies = activeCategory === 'All' 
    ? technologies 
    : technologies.filter(tech => tech.category === activeCategory)

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-4 text-gray-800"
        >
          Our Technology Stack Expertise
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-center mb-12 text-gray-600 max-w-2xl mx-auto"
        >
          We leverage cutting-edge technologies to deliver robust and scalable solutions for our clients.
        </motion.p>

        <div className="flex justify-center mb-8">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`mx-2 px-4 py-2 rounded-full ${
                activeCategory === category 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-800 hover:bg-gray-200'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
        {filteredTechnologies.map((tech, index) => (
  <motion.div
    key={tech.name}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
  >
    <tech.icon className="w-16 h-16 mx-auto mb-4" style={{ color: tech.color }} />
    <h3 className="text-lg font-semibold text-center mb-2">{tech.name}</h3>
    <p className="text-sm text-gray-600 text-center">{tech.category}</p>
  </motion.div>
))}

        </motion.div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a 
            href="/our-expertise" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 inline-block"
          >
            Learn More About Our Expertise
          </a>
        </motion.div>
      </div>
    </section>
  )
}
