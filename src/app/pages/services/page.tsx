import ServiceCard from '@/components/ServiceCard'
import { FaCode, FaLaptop, FaMobile, FaCloud, FaChartLine, FaCogs } from 'react-icons/fa'

export default function Services() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard
          title="Custom Software Development"
          description="Tailored software solutions designed to meet your specific business requirements and streamline your operations."
          icon={<FaCode size={32} />}
        />
        <ServiceCard
          title="Web Application Development"
          description="Responsive and user-friendly web applications built with the latest technologies to enhance your online presence."
          icon={<FaLaptop size={32} />}
        />
        <ServiceCard
          title="Mobile App Development"
          description="Native and cross-platform mobile applications that provide seamless experiences across devices."
          icon={<FaMobile size={32} />}
        />
        <ServiceCard
          title="Cloud Solutions"
          description="Scalable and secure cloud infrastructure setup and management to support your growing business needs."
          icon={<FaCloud size={32} />}
        />
        <ServiceCard
          title="IT Consulting"
          description="Expert advice on technology strategy, architecture, and implementation to help you make informed decisions."
          icon={<FaChartLine size={32} />}
        />
        <ServiceCard
          title="DevOps Services"
          description="Streamlined development and deployment processes to increase efficiency and reduce time-to-market."
          icon={<FaCogs size={32} />}
        />
      </div>
    </div>
  )
}
