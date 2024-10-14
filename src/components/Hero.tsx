import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const rotatingTexts = ['Innovative Solutions', 'Expert Consulting', 'Cloud Excellence']

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
        >
          <source src="/hero-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="z-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
        >
          Empowering Your Digital Future
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl sm:text-2xl lg:text-3xl mb-8"
        >
          Delivering <span className="font-bold">{rotatingTexts[textIndex]}</span>
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            href="/pages/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 inline-block"
          >
            Get Started
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
