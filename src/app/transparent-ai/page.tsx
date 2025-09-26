export default function TransparentAIPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy via-navy-dark to-indigo-900 text-white py-20">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Transparent AI
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Our commitment to ethical, explainable, and responsible artificial intelligence development
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8 text-center">
                Our Commitment to Transparency
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At iCog Labs, we believe that artificial intelligence should not be a black box. We are committed to developing AI systems that are transparent, explainable, and accountable. Our approach ensures that our AI solutions are not only powerful but also trustworthy and aligned with human values.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Transparency in AI is not just an ethical imperative—it's a practical necessity. By making our AI systems explainable and interpretable, we enable better decision-making, build trust with users, and facilitate regulatory compliance.
              </p>
            </div>

            {/* Principles */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8 text-center">
                Core Principles
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="w-16 h-16 bg-orange rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-4 text-center">Explainability</h3>
                  <p className="text-gray-600 text-center">
                    Our AI models provide clear explanations for their decisions and recommendations, making the reasoning process transparent and understandable.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="w-16 h-16 bg-orange rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-4 text-center">Accountability</h3>
                  <p className="text-gray-600 text-center">
                    We take responsibility for our AI systems' outputs and maintain clear lines of accountability throughout the development and deployment process.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="w-16 h-16 bg-orange rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-4 text-center">Ethical Development</h3>
                  <p className="text-gray-600 text-center">
                    All our AI systems are developed with ethical considerations at the forefront, ensuring they benefit humanity and respect human rights.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="w-16 h-16 bg-orange rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-4 text-center">User Privacy</h3>
                  <p className="text-gray-600 text-center">
                    We prioritize user privacy and data protection, implementing robust security measures and transparent data usage policies.
                  </p>
                </div>
              </div>
            </div>

            {/* Implementation */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8 text-center">
                Implementation Approach
              </h2>
              <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-navy mb-4">Transparent by Design</h3>
                    <p className="text-gray-600 mb-4">
                      We incorporate transparency requirements from the initial design phase of every AI project. This includes:
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-orange mr-2">•</span>
                        Clear documentation of model architecture and training data
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange mr-2">•</span>
                        Explainable AI techniques integrated into model development
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange mr-2">•</span>
                        Regular audits and validation of AI system outputs
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange mr-2">•</span>
                        User-friendly interfaces for understanding AI decisions
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-100 p-8 rounded-lg">
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg border-l-4 border-orange">
                        <h4 className="font-semibold text-navy">Model Cards</h4>
                        <p className="text-sm text-gray-600">Detailed documentation of model capabilities, limitations, and intended use cases.</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border-l-4 border-orange">
                        <h4 className="font-semibold text-navy">Explainability APIs</h4>
                        <p className="text-sm text-gray-600">Programmatic access to model explanations and decision reasoning.</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border-l-4 border-orange">
                        <h4 className="font-semibold text-navy">Bias Detection</h4>
                        <p className="text-sm text-gray-600">Automated systems to identify and mitigate algorithmic bias.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-navy text-white rounded-xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Building Trust Through Transparency
              </h2>
              <p className="text-lg text-gray-200 mb-8 max-w-3xl mx-auto">
                We invite researchers, policymakers, and industry partners to collaborate with us in advancing transparent AI. Together, we can build AI systems that are not only powerful but also trustworthy and beneficial to society.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-orange hover:bg-orange-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                  Learn More About Our Research
                </button>
                <button className="bg-white hover:bg-gray-100 text-navy px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                  Contact Our Ethics Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
