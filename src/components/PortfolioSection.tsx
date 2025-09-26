import Image from 'next/image'

const PortfolioSection = () => {
  const articles = [
    {
      title: 'Beyond the Hype: The Urgent Need for Education and Oversight in the Age of Super AI',
      category: 'AI Ethics',
      description: 'Exploring the critical importance of AI education and regulatory frameworks as we advance toward artificial general intelligence.',
      image: '/media/articles_image.jfif',
      readTime: '8 min read',
      date: '2024-01-15'
    },
    {
      title: 'Advancing African AI: iCog Labs\' Vision for Technological Leapfrogging',
      category: 'Research',
      description: 'How iCog Labs is driving AI innovation in Africa and bridging the technological gap through collaborative research.',
      image: '/media/articles_image.jfif',
      readTime: '6 min read',
      date: '2024-01-10'
    },
    {
      title: 'Machine Learning Applications in Ethiopian Healthcare',
      category: 'Healthcare',
      description: 'Innovative ML solutions addressing healthcare challenges in Ethiopia and other developing regions.',
      image: '/media/articles_image.jfif',
      readTime: '10 min read',
      date: '2024-01-05'
    },
    {
      title: 'The Future of Cognitive Robotics: From Theory to Implementation',
      category: 'Robotics',
      description: 'Examining the latest developments in cognitive robotics and their potential impact on industry and society.',
      image: '/media/articles_image.jfif',
      readTime: '12 min read',
      date: '2023-12-28'
    },
    {
      title: 'Ethical AI Development: Lessons from iCog Labs\' Research',
      category: 'AI Ethics',
      description: 'Insights into developing ethical AI systems while maintaining innovation and research excellence.',
      image: '/media/articles_image.jfif',
      readTime: '7 min read',
      date: '2023-12-20'
    },
    {
      title: 'Natural Language Processing for African Languages',
      category: 'NLP',
      description: 'Breaking language barriers through advanced NLP research focused on African linguistic diversity.',
      image: '/media/articles_image.jfif',
      readTime: '9 min read',
      date: '2023-12-15'
    },
  ]

  return (
    <section id="articles" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-6">Latest Articles</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Insights, research findings, and thought leadership from our AI experts
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article key={index} className="bg-gray-50 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 group cursor-pointer">
              <div className="relative overflow-hidden h-48">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-orange text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{article.date}</span>
                  <span className="mx-2">•</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-navy-dark transition-colors duration-300 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 leading-relaxed line-clamp-3">{article.description}</p>
                <button className="mt-4 text-orange font-semibold hover:text-orange-dark transition-colors duration-300">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection
