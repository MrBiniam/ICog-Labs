const AboutSection = () => {

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Company Description */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-navy mb-8 text-center">About iCog Labs</h2>
          <div className="max-w-5xl mx-auto">
            <p className="text-xl text-gray-700 mb-8 text-center leading-relaxed">
              iCog Labs is a research and development company based in Addis Ababa, Ethiopia, collaborating with international AI research groups and serving customers worldwide. Our core specialty is artificial intelligence, including machine learning, computational linguistics, computer vision, mobile and cognitive robotics, and artificial general intelligence.
            </p>
            <p className="text-xl text-gray-700 text-center leading-relaxed">
              We are committed to advancing science and technology for the good of all humanity, with a special focus on advanced AI and leapfrogging Africa into the future through technological innovation.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Mission */}
          <div className="bg-white rounded-xl shadow-xl p-8 text-center hover:shadow-2xl transition-shadow duration-300">
            <div className="w-20 h-20 bg-orange rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-navy mb-6">Our Mission</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Advance science and technology for the good of all humanity, with a focus on advanced AI and leapfrogging Africa into the future.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-xl shadow-xl p-8 text-center hover:shadow-2xl transition-shadow duration-300">
            <div className="w-20 h-20 bg-navy rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-navy mb-6">Our Vision</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              To be the leading AI research and development hub in Africa, driving innovation and technological advancement across the continent and beyond.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
