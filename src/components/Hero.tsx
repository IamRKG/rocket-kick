'use client'
import { useEffect, useState, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import Lottie from 'lottie-react'
import rocketAnimation from '../animations/rocket-tech.json'


const Hero = () => {
  const [scrollY, setScrollY] = useState(0)
  const controls = useAnimation()
  const [ref, inView] = useInView()

  // ... rest of the component
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrollY])
  
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  const heroRef = useRef<HTMLDivElement>(null)
  const rocketRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const { top, height } = heroRef.current.getBoundingClientRect()
        const scrollPercentage = Math.min(Math.max((top * -1) / height, 0), 1)
        heroRef.current.style.setProperty('--scroll', scrollPercentage.toString())
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (rocketRef.current) {
        const { clientX, clientY } = e
        const { left, top, width, height } = rocketRef.current.getBoundingClientRect()
        const x = (clientX - left - width / 2) / 25
        const y = (clientY - top - height / 2) / 25
        rocketRef.current.style.transform = `translate(${x}px, ${y}px)`
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])


  return (
    <motion.div
    ref={ref}
    initial="hidden"
    animate={controls}
    variants={containerVariants}
    className="hero-content min-h-screen flex items-center bg-gradient-to-br from-blue-600 via-blue-500 to-purple-500 text-white bg-opacity-90 bg-pattern py-8 sm:py-12 lg:py-16 relative overflow-hidden pt-16"
  >
 
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12">
          <motion.div className="lg:w-1/2 text-center lg:text-left" variants={itemVariants}>
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200"
              variants={itemVariants}
            >
              Rocket Kick Software and Consulting
            </motion.h1>
            <motion.p
              className="text-xl sm:text-2xl md:text-3xl mb-6 max-w-2xl leading-relaxed"
              variants={itemVariants}
            >
              Propelling your business to new heights with cutting-edge technology solutions
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link 
                href="/pages/contact" 
                className="inline-block bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Get Started
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            className="lg:w-1/2 w-full max-w-md mx-auto lg:max-w-none"
            variants={itemVariants}
          >
            <Lottie 
              animationData={rocketAnimation} 
              loop={true}
              style={{ width: '100%', height: 'auto' }}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
export default Hero
