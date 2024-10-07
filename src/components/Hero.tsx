'use client'
import Link from 'next/link'
import Lottie from 'lottie-react'
import rocketAnimation from '../animations/rocket-tech.json'

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center bg-gradient-to-br from-blue-600 via-blue-500 to-purple-500 text-white bg-opacity-90 bg-pattern">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-down">
              Rocket Kick Software and Consulting
            </h1>
            <p className="text-xl sm:text-2xl mb-8 animate-fade-in-up">
              Propelling your business to new heights with cutting-edge technology solutions
            </p>
            <Link 
              href="/pages/contact" 
              className="inline-block bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full text-lg font-semibold transition duration-300 animate-pulse shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Started
            </Link>
          </div>
          <div className="lg:w-1/2 animate-float">
            <Lottie 
              animationData={rocketAnimation} 
              loop={true}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
