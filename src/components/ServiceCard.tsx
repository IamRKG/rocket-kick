interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 h-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default ServiceCard
