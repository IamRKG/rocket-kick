import React from 'react'
import Image from 'next/image'

interface Project {
  title: string
  description: string
  imageUrl: string
  technologies: string[]
}

const projects: Project[] = [
  {
    title: 'E-commerce Platform',
    description: 'A scalable e-commerce solution with advanced product management and analytics.',
    imageUrl: '/images/projects/ecommerce.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS']
  },
  {
    title: 'AI-Powered Chatbot',
    description: 'An intelligent customer service chatbot using natural language processing.',
    imageUrl: '/images/projects/chatbot.jpg',
    technologies: ['Python', 'TensorFlow', 'Flask', 'Docker']
  },
  {
    title: 'IoT Smart Home System',
    description: 'A comprehensive IoT solution for home automation and energy management.',
    imageUrl: '/images/projects/iot-home.jpg',
    technologies: ['Raspberry Pi', 'MQTT', 'React Native', 'InfluxDB']
  }
]

const FeaturedProjects: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:-translate-y-2">
          <div className="relative h-48">
            <Image
              src={project.imageUrl}
              alt={project.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FeaturedProjects
