import Link from 'next/link'

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-down">
          Rocket Kick Software and Consulting
        </h1>
        <p className="text-lg md:text-xl mb-8 animate-fade-in-up">
          Propelling your business to new heights with cutting-edge technology solutions
        </p>
        <Link href="/pages/contact" className="btn-primary animate-fade-in">
          Get Started
        </Link>
      </div>
    </div>
  )
}

export default Hero
