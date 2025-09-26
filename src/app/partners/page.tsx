export default function PartnersPage() {
  const partners = [
    {
      name: 'SingularityNET',
      logo: '/media/portfolio.png',
      description: 'Leading decentralized AI platform and key collaborator in advancing artificial general intelligence research.',
      website: 'https://singularitynet.io',
      category: 'AI Platform'
    },
    {
      name: 'Novamente LLC',
      logo: '/media/portfolio.png',
      description: 'AI research and development company focused on cognitive architectures and AGI systems.',
      website: 'https://novamente.net',
      category: 'Research'
    },
    {
      name: 'Biomind LLC',
      logo: '/media/portfolio.png',
      description: 'Biotechnology and AI company developing solutions for healthcare and life sciences applications.',
      website: 'https://biomind.com',
      category: 'Healthcare'
    },
    {
      name: 'Humanity+',
      logo: '/media/portfolio.png',
      description: 'International organization promoting the ethical use of technology to expand human capabilities.',
      website: 'https://humanityplus.org',
      category: 'Advocacy'
    },
    {
      name: 'JICA (Japan International Cooperation Agency)',
      logo: '/media/portfolio.png',
      description: 'Japanese government agency supporting international development projects and technology transfer.',
      website: 'https://jica.go.jp',
      category: 'Development'
    },
    {
      name: 'US Embassy Ethiopia',
      logo: '/media/portfolio.png',
      description: 'Supporting innovation and entrepreneurship in Ethiopia through various programs and initiatives.',
      website: 'https://et.usembassy.gov',
      category: 'Government'
    },
    {
      name: 'OpenCog Foundation',
      logo: '/media/portfolio.png',
      description: 'Open-source organization developing cognitive architectures and AI frameworks for research and education.',
      website: 'https://opencog.org',
      category: 'Foundation'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy via-navy-dark to-indigo-900 text-white py-20">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our Partners
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Collaborating with leading organizations to advance AI research and development globally
          </p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Strategic Partnerships
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We collaborate with world-class organizations across research, industry, and government to push the boundaries of artificial intelligence and create meaningful impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 group">
                <div className="text-center">
                  {/* Partner Logo Placeholder */}
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange group-hover:text-white transition-colors duration-300">
                    <svg className="w-12 h-12 text-gray-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>

                  <h3 className="text-xl font-bold text-navy mb-3">{partner.name}</h3>
                  <span className="inline-block bg-orange text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    {partner.category}
                  </span>
                  <p className="text-gray-600 leading-relaxed mb-6">{partner.description}</p>

                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-orange hover:text-orange-dark font-semibold transition-colors duration-300"
                  >
                    Visit Website
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8">
              Why Partner With iCog Labs?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-navy mb-4">Cutting-Edge Research</h3>
                <p className="text-gray-600">
                  Access to state-of-the-art AI research and development capabilities in machine learning, robotics, and cognitive systems.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-navy mb-4">Global Network</h3>
                <p className="text-gray-600">
                  Connect with our extensive international network of AI researchers, industry partners, and academic institutions.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-navy mb-4">Proven Track Record</h3>
                <p className="text-gray-600">
                  Collaborate with a team that has demonstrated success in AI research, development, and real-world applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Partnership */}
      <section className="py-20 bg-navy text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Interested in Partnership?
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-3xl mx-auto">
            We're always looking for new partners who share our vision of advancing AI for the benefit of humanity. Whether you're a research institution, industry leader, or government agency, we'd love to explore collaboration opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange hover:bg-orange-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
              Become a Partner
            </button>
            <button className="bg-white hover:bg-gray-100 text-navy px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
