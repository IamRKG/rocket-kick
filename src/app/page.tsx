'use client'
import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import TechStackExpert from '@/components/TechStackExpert'
// import Testimonials from '@/components/Testimonials'
import softwareDevelopmentAnimation from '../animations/software-development.json'
import consultingAnimation from '../animations/consulting.json'
import cloudSolutionsAnimation from '../animations/cloud-solutions.json'
import Link from 'next/link'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function Home() {
  return (
    <div className="bg-gray-50 bg-pattern">
      <Hero />
      <motion.section 
        className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        <div className="container mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-4 text-gray-800"
            variants={fadeInUp}
          >
            Our Services
          </motion.h2>
          <motion.p
            className="text-xl text-center mb-16 text-gray-600 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            We offer cutting-edge solutions tailored to your business needs, leveraging the latest technologies to drive your success.
          </motion.p>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
            variants={fadeInUp}
          >
            <ServiceCard
              title="Software Development"
              description="Custom software solutions tailored to your business needs, leveraging cutting-edge technologies for optimal performance and scalability."
              animation={softwareDevelopmentAnimation}
            />
            <ServiceCard
              title="Consulting Services"
              description="Expert advice to help you make informed technology decisions, aligning your IT strategy with your business goals for maximum impact."
              animation={consultingAnimation}
            />
            <ServiceCard
              title="Cloud Solutions"
              description="Scalable and secure cloud infrastructure for your applications, ensuring high availability, performance, and cost-efficiency."
              animation={cloudSolutionsAnimation}
            />
          </motion.div>
          <motion.div 
            className="text-center mt-16"
            variants={fadeInUp}
          >
            <Link
              href="/pages/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 inline-block"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </motion.section>
      <TechStackExpert />
    </div>
  )
}
