import Image from 'next/image'

const Team = () => {
  const teamImages = [
    '/media/team.jpg',
    '/media/team 2.jfif',
    '/media/team 3.webp',
    '/media/team 4.webp'
  ]

  const leadershipTeam = [
    {
      name: 'Getnet Aseffa',
      title: 'CEO & Founder',
      description: 'Visionary leader driving iCog Labs\' mission to advance AI research and development in Africa.'
    },
    {
      name: 'Dr. Ben Goertzel',
      title: 'Chief Scientific Advisor',
      description: 'World-renowned AI researcher and founder of SingularityNET, guiding our scientific direction.'
    },
    {
      name: 'Dr. Matthew Iklé',
      title: 'Head of Research',
      description: 'Leading research initiatives in machine learning, computer vision, and cognitive robotics.'
    }
  ]

  return (
    <section id="team" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet the Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The brilliant minds behind iCog Labs, working together to advance the future of AI
          </p>
        </div>

        {/* Leadership Team - Compact Side by Side */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8 text-center">
            Leadership Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {leadershipTeam.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  {member.name}
                </h4>
                <p className="text-lg md:text-xl font-semibold text-orange mb-4">
                  {member.title}
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Photo Grid */}
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8 text-center">
            Our Team Members
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {teamImages.map((image, index) => (
              <div
                key={index}
                className="group relative transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-300 bg-white">
                  <Image
                    src={image}
                    alt={`Team member ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="text-white text-center">
                        <h4 className="font-semibold text-sm mb-1">Team Member</h4>
                        <p className="text-xs text-gray-200">AI Specialist</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
