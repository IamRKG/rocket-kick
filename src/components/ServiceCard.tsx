'use client'
import React from 'react'
import Lottie, { LottieComponentProps } from 'lottie-react'

interface ServiceCardProps {
  title: string
  description: string
  animation?: LottieComponentProps['animationData']
  icon?: React.ReactNode
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, animation }) => {
  return (
    <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg p-8 h-full transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl border border-blue-100">
      <div className="mb-6 h-52 flex items-center justify-center overflow-hidden">
        <Lottie animationData={animation} loop={true} style={{ width: '100%', height: '100%' }} />
      </div>
      <h3 className="text-2xl font-extrabold mb-4 text-blue-600 tracking-tight">{title}</h3>
      <p className="text-gray-700 leading-relaxed text-lg">{description}</p>
    </div>
  )
}

export default ServiceCard
