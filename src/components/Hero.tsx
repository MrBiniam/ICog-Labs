'use client'

import Link from 'next/link'

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative bg-gradient-to-br from-navy via-navy-dark to-indigo-900 text-white min-h-screen flex items-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Large rotating logo in background */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
        {/* Simple rotating logo */}
        <div className="relative">
          <img
            src="/media/ICogLaps_Logo.jfif"
            alt="iCog Labs Logo Background"
            className="w-72 h-auto object-contain animate-spin-slow opacity-15"
          />
        </div>
          </div>
        </div>

        {/* Additional background elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-orange/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-navy/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:50px_50px] opacity-20"></div>

      <div className="relative container-max py-24 lg:py-32 w-full">
        <div className="text-center">
          {/* iCog Labs Title */}
          <div className="mb-6 flex justify-center">
            <div className="relative">
              {/* Elegant glow effect for company title */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange to-navy rounded-full blur-xl opacity-30"></div>
              <div className="absolute inset-0 bg-white rounded-full blur-lg opacity-20"></div>

              {/* Company title text */}
              <h1 className="relative text-white text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide drop-shadow-xl">
                iCog Labs
              </h1>
            </div>
          </div>

          {/* Main Headline */}
          <div className="mb-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-white via-orange-100 to-yellow-200 bg-clip-text text-transparent drop-shadow-lg">
                Advancing the Frontier
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent drop-shadow-lg animate-gradient">
                of Artificial Intelligence
              </span>
            </h2>
          </div>

          {/* Subheadline */}
          <div className="mb-8 max-w-4xl mx-auto">
            <p className="text-xl sm:text-2xl lg:text-3xl text-white leading-relaxed font-light">
              iCog Labs is a team of visionary software professionals dedicated to{' '}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent font-bold">AI</span>,{' '}
              <span className="bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text text-transparent font-bold">robotics</span>, and{' '}
              <span className="text-yellow-300 font-bold">innovative software solutions</span>.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => scrollToSection('solutions')}
              className="btn-primary"
            >
              Explore Solutions
            </button>
            <button
              onClick={() => scrollToSection('articles')}
              className="btn-secondary"
            >
              Read Our Articles
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => scrollToSection('about')}
              className="group flex flex-col items-center text-gray-300 hover:text-white transition-colors duration-300 animate-bounce"
            >
              <span className="text-sm font-medium mb-2">Discover More</span>
              <svg className="w-6 h-6 group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
