import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Modern online shopping platform with advanced features',
      category: 'Web Development',
      image: '🛒',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      date: '2024',
      link: '#',
      github: '#',
      featured: true
    },
    {
      title: 'Fitness Tracking App',
      description: 'Mobile app for tracking workouts and health metrics',
      category: 'Mobile Apps',
      image: '💪',
      tags: ['React Native', 'Firebase', 'Health APIs'],
      date: '2024',
      link: '#',
      github: '#',
      featured: true
    },
    {
      title: 'Brand Identity Design',
      description: 'Complete brand redesign for tech startup',
      category: 'Graphic Design',
      image: '🎨',
      tags: ['Logo Design', 'Brand Guidelines', 'Print Design'],
      date: '2024',
      link: '#',
      github: '#',
      featured: true
    },
    {
      title: 'Digital Marketing Campaign',
      description: 'Comprehensive marketing strategy for product launch',
      category: 'Digital Marketing',
      image: '📈',
      tags: ['SEO', 'Social Media', 'Content Strategy', 'Analytics'],
      date: '2024',
      link: '#',
      github: '#',
      featured: true
    },
    {
      title: 'Corporate Website',
      description: 'Professional website for B2B services company',
      category: 'Web Development',
      image: '🏢',
      tags: ['Next.js', 'TypeScript', 'CMS Integration'],
      date: '2023',
      link: '#',
      github: '#',
      featured: false
    },
    {
      title: 'Food Delivery App',
      description: 'Mobile app for restaurant food delivery service',
      category: 'Mobile Apps',
      image: '🍕',
      tags: ['Flutter', 'Google Maps', 'Payment Integration'],
      date: '2023',
      link: '#',
      github: '#',
      featured: false
    },
    {
      title: 'Social Media Graphics',
      description: 'Complete social media visual identity package',
      category: 'Graphic Design',
      image: '📱',
      tags: ['Instagram', 'Facebook', 'LinkedIn', 'Brand Consistency'],
      date: '2023',
      link: '#',
      github: '#',
      featured: false
    },
    {
      title: 'SEO Optimization',
      description: 'Complete SEO overhaul for increased organic traffic',
      category: 'Digital Marketing',
      image: '🔍',
      tags: ['Technical SEO', 'Content Optimization', 'Link Building'],
      date: '2023',
      link: '#',
      github: '#',
      featured: false
    }
  ];

  const categories = ['All', 'Web Development', 'Mobile Apps', 'Graphic Design', 'Digital Marketing'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <>
      <Helmet>
        <title>Our Projects - Digital Solutions Portfolio</title>
        <meta name="description" content="Explore our portfolio of web development, mobile apps, graphic design, and digital marketing projects." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 py-20 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Our Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Explore our portfolio of successful projects across web development, mobile apps, 
            graphic design, and digital marketing.
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="relative py-12 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="relative py-20 bg-slate-900">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300">
              Our most recent and impactful work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-5xl">{project.image}</div>
                    <span className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-6">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {project.date}
                    </div>
                    
                    <div className="flex space-x-3">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href={project.link}
                        className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href={project.github}
                        className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects Grid */}
      <section className="relative py-20 bg-slate-900/50">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              All Projects
            </h2>
            <p className="text-xl text-gray-300">
              Complete portfolio of our work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{project.image}</div>
                    <span className="px-2 py-1 bg-purple-600/20 text-purple-400 rounded-full text-xs">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-white/10 text-gray-300 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 bg-white/10 text-gray-300 rounded-full text-xs">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-400 text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      {project.date}
                    </div>
                    
                    <div className="flex space-x-2">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href={project.link}
                        className="w-8 h-8 bg-purple-600/20 rounded-lg flex items-center justify-center text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href={project.github}
                        className="w-8 h-8 bg-purple-600/20 rounded-lg flex items-center justify-center text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can bring your ideas to life.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-600/25 transition-all duration-200"
          >
            Get In Touch
          </motion.button>
        </div>
      </section>
    </>
  );
}