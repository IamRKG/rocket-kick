import React from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: "John Doe",
    company: "Tech Innovators Inc.",
    quote: "Working with this team has been a game-changer for our business. Their expertise in cloud solutions helped us scale efficiently.",
  },
  {
    name: "Jane Smith",
    company: "Global Systems Ltd.",
    quote: "The custom software they developed for us has streamlined our operations and increased productivity by 40%.",
  },
  {
    name: "Mike Johnson",
    company: "Future Enterprises",
    quote: "Their consulting services provided invaluable insights that shaped our technology strategy for the next five years.",
  }
]

const TestimonialCard: React.FC<{ testimonial: typeof testimonials[0], index: number }> = React.memo(({ testimonial, index }) => (
  <motion.div 
    className="bg-white p-6 rounded-lg shadow-md flex flex-col h-full"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div className="flex items-center mb-4">
      <div>
        <p className="font-semibold">{testimonial.name}</p>
        <p className="text-sm text-gray-500">{testimonial.company}</p>
      </div>
    </div>
    <p className="text-gray-600 italic flex-grow">{testimonial.quote}</p>
  </motion.div>
))

const Testimonials: React.FC = () => {
  return (

      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>

  )
}

export default React.memo(Testimonials)
