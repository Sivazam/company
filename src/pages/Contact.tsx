import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Digital Solutions</title>
        <meta name="description" content="Get in touch with Digital Solutions. We're here to help you with your digital transformation needs." />
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
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Ready to start your project? We'd love to hear from you. 
            Let's discuss how we can help bring your ideas to life.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="relative py-20 bg-slate-900">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Get In Touch
                </h2>
                <p className="text-gray-300 mb-8">
                  Have questions about our services? Want to discuss a project? 
                  We're here to help. Reach out to us through any of the following methods.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600/20 backdrop-blur-md border border-purple-500/30 rounded-lg p-3">
                    <Mail className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Email</h3>
                    <p className="text-gray-300">hello@digitalsolutions.com</p>
                    <p className="text-gray-300">support@digitalsolutions.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600/20 backdrop-blur-md border border-purple-500/30 rounded-lg p-3">
                    <Phone className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Phone</h3>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                    <p className="text-gray-300">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600/20 backdrop-blur-md border border-purple-500/30 rounded-lg p-3">
                    <MapPin className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Office</h3>
                    <p className="text-gray-300">
                      123 Innovation Drive<br />
                      Tech City, TC 12345<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
                <h3 className="font-semibold text-white mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-600/25 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative py-20 bg-slate-900/50">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Visit Our Office
            </h2>
            <div className="bg-slate-800/50 rounded-lg h-96 flex items-center justify-center border border-white/10">
              <p className="text-gray-400">Interactive Map Would Be Displayed Here</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}