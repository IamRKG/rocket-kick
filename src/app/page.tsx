import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import { FaCode, FaLightbulb, FaCloud } from 'react-icons/fa'

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Software Development"
              description="Custom software solutions tailored to your business needs."
              icon={<FaCode size={32} />}
            />
            <ServiceCard
              title="Consulting Services"
              description="Expert advice to help you make informed technology decisions."
              icon={<FaLightbulb size={32} />}
            />
            <ServiceCard
              title="Cloud Solutions"
              description="Scalable and secure cloud infrastructure for your applications."
              icon={<FaCloud size={32} />}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
