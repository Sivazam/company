import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export default function Footer() {
  const { theme } = useTheme();
  
  const footerLinks = {
    services: [
      { name: 'Web Development', href: '/services' },
      { name: 'Mobile Apps', href: '/services' },
      { name: 'Graphic Design', href: '/services' },
      { name: 'Digital Marketing', href: '/services' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Projects', href: '/projects' },
      { name: 'Contact', href: '/contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
    ]
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className={`relative backdrop-blur-xl border-t ${
      theme === 'light' 
        ? 'bg-white/90 border-purple-100' 
        : 'bg-slate-900/80 border-white/10'
    }`}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl ${
          theme === 'light' ? 'bg-purple-100/20' : 'bg-purple-600/10'
        }`}></div>
        <div className={`absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl ${
          theme === 'light' ? 'bg-pink-100/20' : 'bg-pink-600/10'
        }`}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-2 mb-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center"
              >
                <span className="text-white font-bold text-lg">D</span>
              </motion.div>
              <motion.span 
                whileHover={{ scale: 1.05 }}
                className={`font-bold text-xl ${
                  theme === 'light' ? 'text-gray-800' : 'text-white'
                }`}
              >
                Digital Solutions
              </motion.span>
            </div>
            <p className={`mb-6 leading-relaxed ${
              theme === 'light' ? 'text-gray-600' : 'text-gray-300'
            }`}>
              Creating innovative digital experiences that drive business growth and success. 
              We transform ideas into reality with cutting-edge technology and creative design.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className={`flex items-center space-x-3 ${
                theme === 'light' ? 'text-gray-600' : 'text-gray-300'
              }`}>
                <Mail className={`h-5 w-5 ${theme === 'light' ? 'text-purple-600' : 'text-purple-400'}`} />
                <span>hello@digitalsolutions.com</span>
              </div>
              <div className={`flex items-center space-x-3 ${
                theme === 'light' ? 'text-gray-600' : 'text-gray-300'
              }`}>
                <Phone className={`h-5 w-5 ${theme === 'light' ? 'text-purple-600' : 'text-purple-400'}`} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className={`flex items-center space-x-3 ${
                theme === 'light' ? 'text-gray-600' : 'text-gray-300'
              }`}>
                <MapPin className={`h-5 w-5 ${theme === 'light' ? 'text-purple-600' : 'text-purple-400'}`} />
                <span>123 Innovation Drive, Tech City</span>
              </div>
            </div>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h3 className={`font-semibold text-lg mb-6 ${
              theme === 'light' ? 'text-gray-800' : 'text-white'
            }`}>
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className={`flex items-center group transition-colors duration-200 ${
                      theme === 'light'
                        ? 'text-gray-600 hover:text-gray-800'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <span className={`w-1 h-1 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity ${
                      theme === 'light' ? 'bg-purple-600' : 'bg-purple-400'
                    }`}></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className={`font-semibold text-lg mb-6 ${
              theme === 'light' ? 'text-gray-800' : 'text-white'
            }`}>
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className={`flex items-center group transition-colors duration-200 ${
                      theme === 'light'
                        ? 'text-gray-600 hover:text-gray-800'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <span className={`w-1 h-1 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity ${
                      theme === 'light' ? 'bg-purple-600' : 'bg-purple-400'
                    }`}></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className={`font-semibold text-lg mb-6 ${
              theme === 'light' ? 'text-gray-800' : 'text-white'
            }`}>
              Connect
            </h3>
            
            {/* CTA Button */}
            <Link
              to="/contact"
              className={`mb-6 inline-block w-full px-6 py-3 rounded-full text-center font-medium hover:shadow-lg hover:shadow-purple-600/25 transition-all duration-200 ${
                theme === 'light'
                  ? 'bg-purple-600 text-white hover:bg-purple-700'
                  : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
              }`}
            >
              Get Started
            </Link>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className={`font-medium ${
                theme === 'light' ? 'text-gray-800' : 'text-white'
              }`}>
                Follow Us
              </h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
                      theme === 'light'
                        ? 'bg-purple-100 text-purple-600 hover:bg-purple-200'
                        : 'bg-white/10 text-gray-300 hover:text-white hover:bg-white/20'
                    }`}
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className={`mt-16 pt-8 border-t ${
            theme === 'light' ? 'border-purple-100' : 'border-white/10'
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className={`text-sm ${
              theme === 'light' ? 'text-gray-500' : 'text-gray-400'
            }`}>
              © 2024 Digital Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`transition-colors duration-200 ${
                    theme === 'light'
                      ? 'text-gray-500 hover:text-gray-700'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}