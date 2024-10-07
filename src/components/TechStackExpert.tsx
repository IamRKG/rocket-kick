import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker } from 'react-icons/fa'
import { SiKubernetes, SiGraphql, SiTypescript, SiNextdotjs, SiMongodb, SiPostgresql, SiMicrosoftazure } from 'react-icons/si'

const TechStackExpert: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<string | null>(null)

  const technologies = [
    { name: 'React', icon: <FaReact />, color: '#61DAFB', description: 'A JavaScript library for building user interfaces' },
    { name: 'Node.js', icon: <FaNodeJs />, color: '#339933', description: 'JavaScript runtime built on Chrome\'s V8 JavaScript engine' },
    { name: 'Python', icon: <FaPython />, color: '#3776AB', description: 'An interpreted, high-level and general-purpose programming language' },
    { name: 'AWS', icon: <FaAws />, color: '#FF9900', description: 'Comprehensive and broadly adopted cloud platform' },
    { name: 'Azure', icon: <SiMicrosoftazure />, color: '#0089D6', description: 'Cloud computing service for building, testing, deploying, and managing applications' },
    { name: 'Docker', icon: <FaDocker />, color: '#2496ED', description: 'Platform for developing, shipping, and running applications in containers' },
    { name: 'Kubernetes', icon: <SiKubernetes />, color: '#326CE5', description: 'Open-source system for automating deployment, scaling, and management of containerized applications' },
    { name: 'GraphQL', icon: <SiGraphql />, color: '#E10098', description: 'Query language for APIs and a runtime for executing those queries' },
    { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6', description: 'Typed superset of JavaScript that compiles to plain JavaScript' },
    { name: 'Next.js', icon: <SiNextdotjs />, color: '#000000', description: 'React framework for production-grade applications' },
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248', description: 'Source-available cross-platform document-oriented database program' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791', description: 'Powerful, open source object-relational database system' }
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Our Technology Stack Expertise
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="text-6xl mb-4 p-4 rounded-full shadow-lg cursor-pointer"
                style={{ backgroundColor: `${tech.color}20` }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedTech(tech.name)}
              >
                <div style={{ color: tech.color }}>{tech.icon}</div>
              </motion.div>
              <div className="text-gray-800 font-semibold text-center">{tech.name}</div>
            </motion.div>
          ))}
        </div>
        <AnimatePresence>
          {selectedTech && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
              onClick={() => setSelectedTech(null)}
            >
              <motion.div
                className="bg-white p-8 rounded-lg shadow-xl max-w-md"
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-2xl font-bold mb-4">{selectedTech}</h3>
                <p>{technologies.find(tech => tech.name === selectedTech)?.description}</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default TechStackExpert
