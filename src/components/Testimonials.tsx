import React from 'react'

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "John Doe",
      company: "Tech Innovators Inc.",
      quote: "Working with this team has been a game-changer for our business. Their expertise in cloud solutions helped us scale efficiently."
    },
    {
      name: "Jane Smith",
      company: "Global Systems Ltd.",
      quote: "The custom software they developed for us has streamlined our operations and increased productivity by 40%."
    },
    {
      name: "Mike Johnson",
      company: "Future Enterprises",
      quote: "Their consulting services provided invaluable insights that shaped our technology strategy for the next five years."
    }
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic mb-4">{testimonial.quote}</p>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
