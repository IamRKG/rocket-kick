import Link from 'next/link'
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-600 via-blue-500 to-purple-500 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-4">Rocket Kick</h3>
            <p className="text-blue-100">Propelling your business to new heights with cutting-edge technology solutions.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-blue-100 hover:text-white transition duration-300 hover:underline">Home</Link></li>
              <li><Link href="/pages/about" className="text-blue-100 hover:text-white transition duration-300 hover:underline">About</Link></li>
              <li><Link href="/pages/services" className="text-blue-100 hover:text-white transition duration-300 hover:underline">Services</Link></li>
              <li><Link href="/pages/contact" className="text-blue-100 hover:text-white transition duration-300 hover:underline">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <p className="text-blue-100 mb-2">123 Tech Street, Silicon Valley, CA 94000</p>
            <p className="text-blue-100 mb-2">Phone: (123) 456-7890</p>
            <p className="text-blue-100">Email: info@rocketkick.com</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-100 hover:text-white transition duration-300 transform hover:scale-110"><FaTwitter size={24} /></a>
              <a href="#" className="text-blue-100 hover:text-white transition duration-300 transform hover:scale-110"><FaLinkedin size={24} /></a>
              <a href="#" className="text-blue-100 hover:text-white transition duration-300 transform hover:scale-110"><FaGithub size={24} /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-blue-400 mt-12 pt-8 text-center text-blue-100">
          <p>&copy; 2024 Rocket Kick Software and Consulting Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
