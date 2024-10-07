'use client'
import React, { Suspense, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { useInView } from 'react-intersection-observer'
import { ThemeProvider } from '@/context/ThemeContext'
import { motion, useAnimation } from 'framer-motion'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'

import softwareDevelopmentAnimation from '../animations/software-development.json'
import consultingAnimation from '../animations/consulting.json'
import cloudSolutionsAnimation from '../animations/cloud-solutions.json'

const DynamicHero = dynamic(() => import('@/components/Hero'), { 
  loading: () => <LoadingPlaceholder className="h-screen" />,
  ssr: false 
})
const DynamicHeader = dynamic(() => import('@/components/Header'), { 
  loading: () => <LoadingPlaceholder className="h-16" />,
  ssr: false 
})
const DynamicServiceCard = dynamic(() => import('@/components/ServiceCard'), {
  loading: () => <LoadingPlaceholder className="h-64 rounded-lg" />,
  ssr: false
})
const DynamicTechStackExpert = dynamic(() => import('@/components/TechStackExpert'), {
  loading: () => <LoadingPlaceholder className="h-96" />,
  ssr: false
})
const DynamicTestimonials = dynamic(() => import('@/components/Testimonials'), {
  loading: () => <LoadingPlaceholder className="h-64" />,
  ssr: false
})
const DynamicFooter = dynamic(() => import('@/components/Footer'), {
  loading: () => <LoadingPlaceholder className="h-32" />,
  ssr: false
})
const DynamicFeaturedProjects = dynamic(() => import('@/components/FeaturedProjects'), {
  loading: () => <LoadingPlaceholder className="h-96" />,
  ssr: false
})
const DynamicContactForm = dynamic(() => import('@/components/ContactForm'), {
  loading: () => <LoadingPlaceholder className="h-96" />,
  ssr: false
})

const LoadingPlaceholder = ({ className }: { className: string }) => (
  <div className={`animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg ${className}`}></div>
)

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return <div className="text-red-500">Something went wrong. Please try again later.</div>
    }
    return this.props.children
  }
}

export default function Home() {
  const controls = useAnimation()
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [techStackRef, techStackInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [testimonialsRef, testimonialsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [projectsRef, projectsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [contactRef, contactInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [isDarkMode] = useState(false)

  useEffect(() => {
    if (servicesInView || techStackInView || testimonialsInView || projectsInView || contactInView) {
      controls.start('visible')
    }
  }, [controls, servicesInView, techStackInView, testimonialsInView, projectsInView, contactInView])

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }



  return (
    <ThemeProvider>
      <ParallaxProvider>
        <main className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-gradient-to-b from-gray-50 to-blue-50'}`}>
          <ErrorBoundary>
            <Suspense fallback={<LoadingPlaceholder className="h-16" />}>
              <DynamicHeader />
            </Suspense>
          </ErrorBoundary>

          <ErrorBoundary>
            <Suspense fallback={<LoadingPlaceholder className="h-screen" />}>
              <Parallax translateY={[-20, 20]}>
                <DynamicHero />
              </Parallax>
            </Suspense>
          </ErrorBoundary>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.section
              ref={servicesRef}
              initial="hidden"
              animate={controls}
              variants={fadeInUp}
              className="py-16"
            >
              <h2 className="text-3xl font-bold text-center mb-12 text-blue-600 dark:text-blue-400">Our Services</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {servicesInView && (
                  <ErrorBoundary>
                    <div className="animate-fade-in-up">
                      <Suspense fallback={<LoadingPlaceholder className="h-64 rounded-lg" />}>
                        <DynamicServiceCard
                          title="Software Development"
                          description="Custom software solutions tailored to your business needs, leveraging cutting-edge technologies for optimal performance and scalability."
                          animation={softwareDevelopmentAnimation}
                        />
                      </Suspense>
                    </div>
                    <div className="animate-fade-in-up delay-200">
                      <Suspense fallback={<LoadingPlaceholder className="h-64 rounded-lg" />}>
                        <DynamicServiceCard
                          title="Consulting Services"
                          description="Expert advice to help you make informed technology decisions, aligning your IT strategy with your business goals for maximum impact."
                          animation={consultingAnimation}
                        />
                      </Suspense>
                    </div>
                    <div className="animate-fade-in-up delay-400">
                      <Suspense fallback={<LoadingPlaceholder className="h-64 rounded-lg" />}>
                        <DynamicServiceCard
                          title="Cloud Solutions"
                          description="Scalable and secure cloud infrastructure for your applications, ensuring high availability, performance, and cost-efficiency."
                          animation={cloudSolutionsAnimation}
                        />
                      </Suspense>
                    </div>
                  </ErrorBoundary>
                )}
              </div>
            </motion.section>
            
            <motion.section
              ref={techStackRef}
              initial="hidden"
              animate={controls}
              variants={fadeInUp}
              className="py-16"
            >
              <h2 className="text-3xl font-bold text-center mb-12 text-blue-600 dark:text-blue-400">Our Tech Stack</h2>
              {techStackInView && (
                <ErrorBoundary>
                  <Suspense fallback={<LoadingPlaceholder className="h-96" />}>
                    <DynamicTechStackExpert />
                  </Suspense>
                </ErrorBoundary>
              )}
            </motion.section>
            
            <motion.section
              ref={projectsRef}
              initial="hidden"
              animate={controls}
              variants={fadeInUp}
              className="py-16"
            >
              <h2 className="text-3xl font-bold text-center mb-12 text-blue-600 dark:text-blue-400">Featured Projects</h2>
              {projectsInView && (
                <ErrorBoundary>
                  <Suspense fallback={<LoadingPlaceholder className="h-96" />}>
                    <DynamicFeaturedProjects />
                  </Suspense>
                </ErrorBoundary>
              )}
            </motion.section>
            
            <motion.section
              ref={testimonialsRef}
              initial="hidden"
              animate={controls}
              variants={fadeInUp}
              className="py-16"
            >
              <h2 className="text-3xl font-bold text-center mb-12 text-blue-600 dark:text-blue-400">What Our Clients Say</h2>
              {testimonialsInView && (
                <ErrorBoundary>
                  <Suspense fallback={<LoadingPlaceholder className="h-64" />}>
                    <DynamicTestimonials />
                  </Suspense>
                </ErrorBoundary>
              )}
            </motion.section>

            <motion.section
              ref={contactRef}
              initial="hidden"
              animate={controls}
              variants={fadeInUp}
              className="py-16"
            >
              <h2 className="text-3xl font-bold text-center mb-12 text-blue-600 dark:text-blue-400">Contact Us</h2>
              {contactInView && (
                <ErrorBoundary>
                  <Suspense fallback={<LoadingPlaceholder className="h-96" />}>
                    <DynamicContactForm />
                  </Suspense>
                </ErrorBoundary>
              )}
            </motion.section>
          </div>

          <ErrorBoundary>
            <Suspense fallback={<LoadingPlaceholder className="h-32" />}>
              <DynamicFooter />
            </Suspense>
          </ErrorBoundary>
        </main>
      </ParallaxProvider>
    </ThemeProvider>
  )
}