import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap, Shield, Target } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useTypingAnimation } from '../hooks/useTypingAnimation';

export default function HeroSection() {
  const { theme } = useTheme();

  const features = [
    { icon: Sparkles, title: 'Innovation', desc: 'Cutting-edge solutions' },
    { icon: Zap, title: 'Speed', desc: 'Lightning fast performance' },
    { icon: Shield, title: 'Security', desc: 'Enterprise-grade protection' },
    { icon: Target, title: 'Precision', desc: 'Tailored to your needs' },
  ];

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
      theme === 'light' 
        ? 'bg-gradient-to-br from-slate-100 via-purple-50 to-slate-100' 
        : 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'
    }`}>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.3),transparent_50%)] animate-pulse ${
          theme === 'light' ? 'opacity-20' : 'opacity-30'
        }`}></div>
        <div className={`absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(255,119,198,0.3),transparent_50%)] animate-pulse ${
          theme === 'light' ? 'opacity-20' : 'opacity-30'
        }`}></div>
        
        {/* Floating Elements */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: theme === 'light' ? 'rgba(147, 51, 234, 0.3)' : 'rgba(255, 255, 255, 0.2)',
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className={`inline-flex items-center gap-2 px-4 py-2 backdrop-blur-md border rounded-full text-sm mb-8 ${
              theme === 'light'
                ? 'bg-purple-100/80 border-purple-200/60 text-purple-700'
                : 'bg-white/10 border-white/20 text-white/80'
            }`}
          >
            <Sparkles className={`w-4 h-4 ${theme === 'light' ? 'text-purple-600' : 'text-purple-400'}`} />
            <span>Digital Excellence</span>
          </motion.div>

          {/* Main Title with Typing Animation */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className={`text-6xl md:text-8xl font-bold bg-gradient-to-r bg-clip-text text-transparent mb-6 ${
              theme === 'light'
                ? 'from-purple-700 via-purple-500 to-purple-700'
                : 'from-white via-purple-200 to-white'
            }`}
          >
            Transform Your
            <br />
            <span className="inline-block min-w-[300px]">
              {useTypingAnimation([
                "Digital Presence",
                "Business Growth",
                "Brand Identity",
                "Customer Experience"
              ], 100, 2000, true).currentText}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className={`text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed ${
              theme === 'light' ? 'text-gray-700' : 'text-white/70'
            }`}
          >
            Expert Web Development, Mobile Apps, Digital Marketing & Graphic Design 
            that drives results and elevates your brand.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>

            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 backdrop-blur-md border font-semibold rounded-full hover:bg-white/20 transition-all duration-300 flex items-center gap-2 ${
                  theme === 'light'
                    ? 'bg-white/60 border-purple-200/60 text-purple-700 hover:bg-purple-50'
                    : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                }`}
              >
                View Our Work
              </motion.button>
            </Link>
          </motion.div>

          {/* Services Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="relative group mx-auto max-w-6xl"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { title: 'Web Development', icon: '💻' },
                { title: 'Mobile Apps', icon: '📱' },
                { title: 'Digital Marketing', icon: '📈' },
                { title: 'Graphic Design', icon: '🎨' }
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + index * 0.1, duration: 0.5 }}
                  className={`backdrop-blur-md border rounded-xl p-6 hover:bg-white/10 transition-all duration-300 text-center ${
                    theme === 'light'
                      ? 'bg-white/80 border-purple-100/60 hover:bg-purple-50'
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h3 className={`font-semibold text-sm ${
                    theme === 'light' ? 'text-gray-800' : 'text-white'
                  }`}>
                    {service.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + index * 0.1, duration: 0.5 }}
                className={`backdrop-blur-md border rounded-xl p-6 hover:bg-white/10 transition-all duration-300 ${
                  theme === 'light'
                    ? 'bg-white/80 border-purple-100/60 hover:bg-purple-50'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                <feature.icon className={`w-8 h-8 mb-3 ${
                  theme === 'light' ? 'text-purple-600' : 'text-purple-400'
                }`} />
                <h3 className={`font-semibold mb-2 ${
                  theme === 'light' ? 'text-gray-800' : 'text-white'
                }`}>
                  {feature.title}
                </h3>
                <p className={`text-sm ${
                  theme === 'light' ? 'text-gray-600' : 'text-white/60'
                }`}>
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className={`w-6 h-10 border-2 rounded-full flex justify-center ${
            theme === 'light' ? 'border-purple-300' : 'border-white/30'
          }`}
        >
          <div className={`w-1 h-3 rounded-full mt-2 ${
            theme === 'light' ? 'bg-purple-400' : 'bg-white/50'
          }`}></div>
        </motion.div>
      </motion.div>
    </section>
  );
}