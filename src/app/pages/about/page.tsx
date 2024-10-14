'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FaRocket, FaLightbulb, FaHandshake, FaChartLine, FaCode } from 'react-icons/fa'


const values = [
  { icon: FaRocket, title: 'Innovation', description: 'Staying at the forefront of technology' },
  { icon: FaLightbulb, title: 'Creativity', description: 'Finding unique solutions to complex problems' },
  { icon: FaHandshake, title: 'Partnership', description: 'Building lasting relationships with our clients' },
  { icon: FaChartLine, title: 'Growth', description: 'Driving success for our clients and our team' },
]

const teamMembers = [
  { name: 'Radhakrishnan Gopal', role: 'CEO', image: '/images/team/ceo.jpg' },
]

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
          <source src="/about-hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900 opacity-75 z-10"></div>
        <div className="relative z-20 text-white px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Innovate. Create. Elevate.</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">
            At Rocket Kick, we&apos;re not just building software - we&apos;re crafting digital experiences that propel businesses into the future.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-center">
              <FaRocket className="text-4xl mr-4 text-blue-300" />
              <div>
                <h3 className="text-xl font-semibold">Cutting-edge Solutions</h3>
                <p>Leveraging the latest technologies</p>
              </div>
            </div>
            <div className="flex items-center">
              <FaCode className="text-4xl mr-4 text-blue-300" />
              <div>
                <h3 className="text-xl font-semibold">Expert Development</h3>
                <p>Crafting robust, scalable software</p>
              </div>
            </div>
            <div className="flex items-center">
              <FaLightbulb className="text-4xl mr-4 text-blue-300" />
              <div>
                <h3 className="text-xl font-semibold">Strategic Consulting</h3>
                <p>Guiding your digital transformation</p>
              </div>
            </div>
          </div>
          <Link href="/pages/contact" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-100 transition duration-300">
            Start Your Journey
          </Link>
        </div>
      </div>
      {/* Mission Statement */}      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg mb-6">
            At Rocket Kick, our mission is to empower businesses through cutting-edge technology solutions. We strive to be the catalyst that propels our clients to new heights of success in the digital landscape.
          </p>
        </div>
      </section>

      {/* Company Values */}
      <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <value.icon className="text-4xl text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-blue-600 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold mb-2">30+</h3>
              <p className="text-xl">Clients Served</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">50+</h3>
              <p className="text-xl">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">18+</h3>
              <p className="text-xl">Years of Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Take Your Business to New Heights?</h2>
          <p className="text-lg mb-8">Let&apos;s collaborate and create innovative solutions tailored to your needs.</p>
          <Link href="/pages/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
