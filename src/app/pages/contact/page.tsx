
import Link from 'next/link'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function Contact() {
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
          <source src="/contact-hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900 opacity-75 z-10"></div>
        <div className="relative z-20 text-white px-4 max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            We&apos;re here to answer your questions and discuss how we can propel your business forward.
          </p>
          <Link href="#contact-form" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-100 transition duration-300">
            Reach Out Now
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-lg" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg" required />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border rounded-lg" required></textarea>
              </div>
              <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div id='contact-form'>
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-center">
                <FaPhone className="text-2xl text-blue-600 mr-4" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-2xl text-blue-600 mr-4" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p>info@rocketkick.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-2xl text-blue-600 mr-4" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p>123 Tech Street, Innovation City, TC 12345</p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d-123.4567890!3d12.3456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDIwJzQ0LjQiTiAxMjPCsDI3JzI0LjQiVw!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
