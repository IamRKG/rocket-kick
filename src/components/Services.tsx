import React from 'react'
import ServiceCard from './ServiceCard'
import softwareDevelopmentAnimation from '../animations/software-development.json'
import consultingAnimation from '../animations/consulting.json'
import cloudSolutionsAnimation from '../animations/cloud-solutions.json'

const Services: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
      <div className="animate-fade-in-up">
        <ServiceCard
          title="Software Development"
          description="Custom software solutions tailored to your business needs, leveraging cutting-edge technologies for optimal performance and scalability."
          animation={softwareDevelopmentAnimation}
        />
      </div>
      <div className="animate-fade-in-up delay-200">
        <ServiceCard
          title="Consulting Services"
          description="Expert advice to help you make informed technology decisions, aligning your IT strategy with your business goals for maximum impact."
          animation={consultingAnimation}
        />
      </div>
      <div className="animate-fade-in-up delay-400">
        <ServiceCard
          title="Cloud Solutions"
          description="Scalable and secure cloud infrastructure for your applications, ensuring high availability, performance, and cost-efficiency."
          animation={cloudSolutionsAnimation}
        />
      </div>
    </div>
  )
}

export default Services
