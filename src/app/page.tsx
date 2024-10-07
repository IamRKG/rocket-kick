'use client'
import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import softwareDevelopmentAnimation from '../animations/software-development.json'
import consultingAnimation from '../animations/consulting.json'
import cloudSolutionsAnimation from '../animations/cloud-solutions.json'

export default function Home() {
  return (
    <div className="bg-gray-50 bg-pattern">
      <Hero />
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
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
          </div>
        </div>
      </section>
    </div>
  )
}
