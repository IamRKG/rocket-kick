import Image from 'next/image'
import Link from 'next/link'
import { FaRocket, FaCode, FaLightbulb, FaChartLine, FaUsers, FaGlobe } from 'react-icons/fa'

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Video Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
        >
          <source src="/service-hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900 opacity-75 z-10"></div>
        <div className="relative z-20 text-white px-4 max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Rocket Kick: Propelling Innovation</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            We&apos;re on a mission to transform businesses through cutting-edge software solutions and strategic consulting.
          </p>
          <Link href="#learn-more" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-100 transition duration-300">
            Discover Our Story
          </Link>
        </div>
      </div>

      {/* Our Story Section */}
      <section id="learn-more" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-10 text-center">Our Story</h2>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <Image src="/images/team/ceo.jpg" alt="Rocket Kick Team" width={500} height={300} className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2 md:pl-10">
              <p className="text-lg mb-6">
                Founded in 2010, Rocket Kick has grown from a small startup to a leading force in software development and IT consulting. Our journey has been defined by a relentless pursuit of excellence and a commitment to pushing the boundaries of what&apos;s possible in technology.
              </p>
              <p className="text-lg">
                Today, we&apos;re proud to serve clients across the globe, helping them navigate the complex digital landscape and achieve unprecedented growth through innovative solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-10 text-center">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaCode className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Custom Software Development</h3>
              <p>Tailored solutions that address your unique business challenges and drive growth.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaChartLine className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">IT Consulting</h3>
              <p>Strategic guidance to help you make informed decisions and optimize your technology investments.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaGlobe className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Digital Transformation</h3>
              <p>Comprehensive strategies to modernize your business and stay ahead in the digital age.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-10 text-center">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <FaUsers className="text-5xl mb-4 mx-auto" />
              <h3 className="text-3xl font-bold mb-2">30+</h3>
              <p className="text-xl">Clients Served</p>
            </div>
            <div>
              <FaRocket className="text-5xl mb-4 mx-auto" />
              <h3 className="text-3xl font-bold mb-2">50+</h3>
              <p className="text-xl">Projects Launched</p>
            </div>
            <div>
              <FaLightbulb className="text-5xl mb-4 mx-auto" />
              <h3 className="text-3xl font-bold mb-2">18+</h3>
              <p className="text-xl">Years of Innovation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Kickstart Your Next Project?</h2>
          <p className="text-xl mb-8">Let&apos;s collaborate and turn your vision into reality.</p>
          <Link href="/pages/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
