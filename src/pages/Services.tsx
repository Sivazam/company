import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Code, Smartphone, Palette, TrendingUp } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications',
      features: [
        'React & Next.js Development',
        'E-commerce Solutions',
        'Progressive Web Apps (PWA)',
        'Custom API Development',
        'Website Maintenance & Support'
      ]
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications',
      features: [
        'iOS & Android Native Apps',
        'React Native Development',
        'Flutter Cross-Platform Apps',
        'App Store Optimization',
        'Mobile App Maintenance'
      ]
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Creative visual design and branding solutions',
      features: [
        'Logo Design & Brand Identity',
        'UI/UX Design',
        'Print Design & Collateral',
        'Social Media Graphics',
        'Brand Guidelines & Style Guides'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Strategic marketing for business growth',
      features: [
        'Search Engine Optimization (SEO)',
        'Social Media Marketing',
        'Content Marketing Strategy',
        'PPC Advertising Campaigns',
        'Analytics & Performance Tracking'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Digital Solutions</title>
        <meta name="description" content="Expert web development, mobile apps, graphic design, and digital marketing services tailored for your business growth." />
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
            className="text-4xl lg:text-5xl font-bold text-white"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto"
          >
            We specialize in four core areas that help businesses thrive in the digital landscape.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-20 bg-slate-900">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-8 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-600/10"
              >
                <service.icon className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 text-purple-400 mt-0.5">
                        ✓
                      </div>
                      <span className="ml-2 text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-20 bg-slate-900/50">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Our Process
            </h2>
            <p className="mt-4 text-xl text-gray-300">
              A systematic approach to delivering exceptional results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your needs and goals' },
              { step: '02', title: 'Strategy', description: 'Creating a detailed project plan' },
              { step: '03', title: 'Development', description: 'Building your solution with expertise' },
              { step: '04', title: 'Launch', description: 'Deploying and supporting your success' }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300">
                  {item.description}
                </p>
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our services can help your business grow.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-600/25 transition-all duration-200"
          >
            Contact Us Today
          </motion.button>
        </div>
      </section>
    </>
  );
}