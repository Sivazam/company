import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, Code, Smartphone, Palette, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function InteractiveServices() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications',
      features: ['React & Next.js', 'E-commerce Solutions', 'Progressive Web Apps', 'Custom APIs'],
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications',
      features: ['iOS & Android', 'React Native', 'Flutter', 'App Store Optimization'],
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Creative visual design and branding solutions',
      features: ['Logo Design', 'Brand Identity', 'UI/UX Design', 'Print Design'],
      gradient: 'from-orange-600 to-red-600'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Strategic marketing for business growth',
      features: ['SEO Optimization', 'Social Media', 'Content Strategy', 'PPC Advertising'],
      gradient: 'from-green-600 to-teal-600'
    }
  ];

  return (
    <section className="relative py-10 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white/60 text-sm mb-6"
          >
            <span>Our Core Services</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            What We Do 
            {/* <br /> */}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
               Best
            </span>
          </h2>
          
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            We specialize in four core areas that help businesses thrive in the digital landscape.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card */}
              <div className="relative h-full bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-8 overflow-hidden hover:border-white/20 transition-all duration-300">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-white/60 mb-6">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-white/70 text-sm">
                      <div className="w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Arrow */}
              
                <Link to="/projects">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center text-white/60 hover:text-white transition-colors mt-4 cursor-pointer"
                  >
                    <span className="text-sm font-medium">Learn more</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.div>
                </Link>

              
              </div>

              {/* Floating Elements */}
              {hoveredCard === index && (
                <>
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-white/30 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                    />
                  ))}
                </>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-xl border border-white/10 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Grow Your Business?</h3>
            <p className="text-white/60 mb-8 max-w-2xl mx-auto">
              Let's discuss how our expertise can help you achieve your digital goals.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Your Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}