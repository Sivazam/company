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
            {/* <Link
              to="/contact"
              className={`mb-6 inline-block w-full px-6 py-3 rounded-full text-center font-medium hover:shadow-lg hover:shadow-purple-600/25 transition-all duration-200 ${
                theme === 'light'
                  ? 'bg-purple-600 text-white hover:bg-purple-700'
                  : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
              }`}
            >
              Get Started
            </Link> */}

            <a
                href="https://wa.me/919014882779?text=Hi%20DigiSolutions%2C%20I%20have%20a%20requirement%20etc"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mb-6 inline-flex items-center justify-center gap-2 w-full px-6 py-3 
                  rounded-full text-center font-medium transition-all duration-200
                  bg-[#25D366] text-white hover:bg-[#20b358] hover:shadow-lg hover:shadow-green-500/25
                "
              >
                {/* WhatsApp Outline Icon */}
               <svg width="24px" height="24px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16 31C23.732 31 30 24.732 30 17C30 9.26801 23.732 3 16 3C8.26801 3 2 9.26801 2 17C2 19.5109 2.661 21.8674 3.81847 23.905L2 31L9.31486 29.3038C11.3014 30.3854 13.5789 31 16 31ZM16 28.8462C22.5425 28.8462 27.8462 23.5425 27.8462 17C27.8462 10.4576 22.5425 5.15385 16 5.15385C9.45755 5.15385 4.15385 10.4576 4.15385 17C4.15385 19.5261 4.9445 21.8675 6.29184 23.7902L5.23077 27.7692L9.27993 26.7569C11.1894 28.0746 13.5046 28.8462 16 28.8462Z" fill="#BFC8D0"/>
                <path d="M28 16C28 22.6274 22.6274 28 16 28C13.4722 28 11.1269 27.2184 9.19266 25.8837L5.09091 26.9091L6.16576 22.8784C4.80092 20.9307 4 18.5589 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z" fill="url(#paint0_linear_87_7264)"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 18.5109 2.661 20.8674 3.81847 22.905L2 30L9.31486 28.3038C11.3014 29.3854 13.5789 30 16 30ZM16 27.8462C22.5425 27.8462 27.8462 22.5425 27.8462 16C27.8462 9.45755 22.5425 4.15385 16 4.15385C9.45755 4.15385 4.15385 9.45755 4.15385 16C4.15385 18.5261 4.9445 20.8675 6.29184 22.7902L5.23077 26.7692L9.27993 25.7569C11.1894 27.0746 13.5046 27.8462 16 27.8462Z" fill="white"/>
                <path d="M12.5 9.49989C12.1672 8.83131 11.6565 8.8905 11.1407 8.8905C10.2188 8.8905 8.78125 9.99478 8.78125 12.05C8.78125 13.7343 9.52345 15.578 12.0244 18.3361C14.438 20.9979 17.6094 22.3748 20.2422 22.3279C22.875 22.2811 23.4167 20.0154 23.4167 19.2503C23.4167 18.9112 23.2062 18.742 23.0613 18.696C22.1641 18.2654 20.5093 17.4631 20.1328 17.3124C19.7563 17.1617 19.5597 17.3656 19.4375 17.4765C19.0961 17.8018 18.4193 18.7608 18.1875 18.9765C17.9558 19.1922 17.6103 19.083 17.4665 19.0015C16.9374 18.7892 15.5029 18.1511 14.3595 17.0426C12.9453 15.6718 12.8623 15.2001 12.5959 14.7803C12.3828 14.4444 12.5392 14.2384 12.6172 14.1483C12.9219 13.7968 13.3426 13.254 13.5313 12.9843C13.7199 12.7145 13.5702 12.305 13.4803 12.05C13.0938 10.953 12.7663 10.0347 12.5 9.49989Z" fill="white"/>
                <defs>
                <linearGradient id="paint0_linear_87_7264" x1="26.5" y1="7" x2="4" y2="28" gradientUnits="userSpaceOnUse">
                <stop stop-color="#5BD066"/>
                <stop offset="1" stop-color="#27B43E"/>
                </linearGradient>
                </defs>
                </svg>

            WhatsApp Us
              </a>
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
              © 2025 Digital Solutions. All rights reserved.
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