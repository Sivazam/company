import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export default function ModernNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/60 backdrop-blur-2xl border-b border-white/20 shadow-lg' 
            : 'bg-black/30 backdrop-blur-2xl border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm border border-white/20"
              >
                <span className="text-white font-bold text-lg">D</span>
              </motion.div>
              <motion.span 
                whileHover={{ scale: 1.05 }}
                className="text-white font-bold text-xl tracking-wide"
              >
                Digital
              </motion.span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.href
                      ? 'text-white'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {item.name}
                  {location.pathname === item.href && (
                    <motion.div
                      layoutId="underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop CTA and Theme Toggle */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Theme Toggle Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="p-2.5 rounded-xl hover:bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 text-white"
                aria-label="Toggle theme"
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: theme === 'light' ? 360 : 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {theme === 'light' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </motion.div>
              </motion.button>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 bg-white/10 backdrop-blur-2xl border border-white/30 text-white text-sm font-semibold rounded-full hover:bg-white/20 hover:shadow-xl transition-all duration-300 shadow-lg"
              >
                Get Started
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white p-2.5 rounded-xl hover:bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/70 backdrop-blur-2xl border-t border-white/20 shadow-xl"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2.5 rounded-xl text-base font-medium transition-all duration-300 backdrop-blur-sm ${
                      location.pathname === item.href
                        ? 'text-white bg-white/20 border border-white/30'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile Theme Toggle */}
                <div className="px-3 py-2.5">
                  <button
                    onClick={() => {
                      toggleTheme();
                      setIsOpen(false);
                    }}
                    className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium rounded-full hover:bg-white/20 transition-all duration-300"
                  >
                    <motion.div
                      initial={{ rotate: 0 }}
                      animate={{ rotate: theme === 'light' ? 360 : 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      {theme === 'light' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    </motion.div>
                    <span>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</span>
                  </button>
                </div>

                <div className="px-3 py-2">
                  <button className="w-full px-4 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold rounded-full hover:shadow-xl transition-all duration-300 shadow-lg backdrop-blur-sm border border-white/20">
                    Get Started
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer for fixed navigation */}
      <div className="h-16" />
    </>
  );
}