import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Users, Award, Target, Lightbulb } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export default function About() {
  const { theme } = useTheme();
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      bio: 'Leading digital transformation expert with 15+ years of experience'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      bio: 'Full-stack developer and architecture specialist'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Creative Director',
      bio: 'Award-winning designer with passion for user experience'
    },
    {
      name: 'David Kim',
      role: 'Project Manager',
      bio: 'Agile methodology expert ensuring project success'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, delivering the highest quality solutions.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and building strong client relationships.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace new technologies and creative approaches to solve complex problems.'
    },
    {
      icon: Award,
      title: 'Integrity',
      description: 'We operate with transparency, honesty, and ethical business practices.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Digital Solutions</title>
        <meta name="description" content="Learn about Digital Solutions, our team, values, and mission to create innovative digital experiences." />
      </Helmet>

      {/* Hero Section */}
      <section className={`relative py-20 overflow-hidden ${
        theme === 'light' 
          ? 'bg-gradient-to-br from-slate-100 via-purple-50 to-slate-100' 
          : 'bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900'
      }`}>
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h1 className={`text-4xl lg:text-5xl font-bold ${
                theme === 'light' ? 'text-gray-800' : 'text-white'
              }`}>
                About Digital Solutions
              </h1>
              <p className={`text-xl ${
                theme === 'light' ? 'text-gray-600' : 'text-gray-300'
              }`}>
                We are a team of passionate digital experts dedicated to transforming businesses 
                through innovative technology solutions. Since our founding, we've helped countless 
                companies achieve their digital goals.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className={`text-3xl font-bold ${
                    theme === 'light' ? 'text-purple-600' : 'text-purple-400'
                  }`}>150+</div>
                  <div className={`text-sm ${
                    theme === 'light' ? 'text-gray-500' : 'text-gray-400'
                  }`}>Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className={`text-3xl font-bold ${
                    theme === 'light' ? 'text-purple-600' : 'text-purple-400'
                  }`}>50+</div>
                  <div className={`text-sm ${
                    theme === 'light' ? 'text-gray-500' : 'text-gray-400'
                  }`}>Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className={`text-3xl font-bold ${
                    theme === 'light' ? 'text-purple-600' : 'text-purple-400'
                  }`}>5+</div>
                  <div className={`text-sm ${
                    theme === 'light' ? 'text-gray-500' : 'text-gray-400'
                  }`}>Years Experience</div>
                </div>
                <div className="text-center">
                  <div className={`text-3xl font-bold ${
                    theme === 'light' ? 'text-purple-600' : 'text-purple-400'
                  }`}>98%</div>
                  <div className={`text-sm ${
                    theme === 'light' ? 'text-gray-500' : 'text-gray-400'
                  }`}>Client Satisfaction</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`backdrop-blur-xl border rounded-2xl p-8 ${
                theme === 'light' 
                  ? 'bg-white/80 border-purple-100/60' 
                  : 'bg-white/5 border-white/10'
              }`}
            >
              <h2 className={`text-2xl font-bold mb-6 ${
                theme === 'light' ? 'text-gray-800' : 'text-white'
              }`}>Our Mission</h2>
              <p className={`mb-4 ${
                theme === 'light' ? 'text-gray-600' : 'text-gray-300'
              }`}>
                To empower businesses with cutting-edge digital solutions that drive growth, 
                enhance efficiency, and create exceptional user experiences.
              </p>
              <h3 className={`text-xl font-semibold mb-4 ${
                theme === 'light' ? 'text-gray-800' : 'text-white'
              }`}>Our Vision</h3>
              <p className={`${
                theme === 'light' ? 'text-gray-600' : 'text-gray-300'
              }`}>
                To be the leading digital solutions provider, recognized for innovation, 
                quality, and customer satisfaction across all industries.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={`relative py-20 ${
        theme === 'light' ? 'bg-slate-50' : 'bg-slate-900'
      }`}>
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-1/2 left-1/4 w-96 h-96 rounded-full blur-3xl ${
            theme === 'light' ? 'bg-purple-100/10' : 'bg-purple-600/5'
          }`}></div>
          <div className={`absolute bottom-1/2 right-1/4 w-96 h-96 rounded-full blur-3xl ${
            theme === 'light' ? 'bg-pink-100/10' : 'bg-pink-600/5'
          }`}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl lg:text-4xl font-bold ${
              theme === 'light' ? 'text-gray-800' : 'text-white'
            }`}>
              Our Core Values
            </h2>
            <p className={`mt-4 text-xl ${
              theme === 'light' ? 'text-gray-600' : 'text-gray-300'
            }`}>
              The principles that guide our work and relationships
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`backdrop-blur-xl border rounded-xl p-6 text-center hover:border-purple-500/30 transition-all duration-300 ${
                  theme === 'light'
                    ? 'bg-white/80 border-purple-100/60 hover:bg-purple-50'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                <value.icon className={`h-12 w-12 mx-auto mb-4 ${
                  theme === 'light' ? 'text-purple-600' : 'text-purple-400'
                }`} />
                <h3 className={`text-xl font-semibold mb-2 ${
                  theme === 'light' ? 'text-gray-800' : 'text-white'
                }`}>
                  {value.title}
                </h3>
                <p className={`${
                  theme === 'light' ? 'text-gray-600' : 'text-gray-300'
                }`}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={`relative py-20 ${
        theme === 'light' ? 'bg-slate-100' : 'bg-slate-900/50'
      }`}>
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-0 left-1/3 w-96 h-96 rounded-full blur-3xl ${
            theme === 'light' ? 'bg-purple-100/10' : 'bg-purple-600/5'
          }`}></div>
          <div className={`absolute bottom-0 right-1/3 w-96 h-96 rounded-full blur-3xl ${
            theme === 'light' ? 'bg-pink-100/10' : 'bg-pink-600/5'
          }`}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl lg:text-4xl font-bold ${
              theme === 'light' ? 'text-gray-800' : 'text-white'
            }`}>
              Meet Our Team
            </h2>
            <p className={`mt-4 text-xl ${
              theme === 'light' ? 'text-gray-600' : 'text-gray-300'
            }`}>
              The talented individuals behind our success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`backdrop-blur-xl border rounded-xl p-6 text-center hover:border-purple-500/30 transition-all duration-300 ${
                  theme === 'light'
                    ? 'bg-white/80 border-purple-100/60 hover:bg-purple-50'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className={`text-xl font-semibold mb-1 ${
                  theme === 'light' ? 'text-gray-800' : 'text-white'
                }`}>
                  {member.name}
                </h3>
                <p className={`font-medium mb-3 ${
                  theme === 'light' ? 'text-purple-600' : 'text-purple-400'
                }`}>
                  {member.role}
                </p>
                <p className={`text-sm ${
                  theme === 'light' ? 'text-gray-600' : 'text-gray-300'
                }`}>
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`relative py-20 ${
        theme === 'light' 
          ? 'bg-gradient-to-r from-purple-50 to-pink-50' 
          : 'bg-gradient-to-r from-purple-900/20 to-pink-900/20'
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
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${
            theme === 'light' ? 'text-gray-800' : 'text-white'
          }`}>
            Let's Work Together
          </h2>
          <p className={`text-xl mb-8 ${
            theme === 'light' ? 'text-gray-600' : 'text-gray-300'
          }`}>
            Ready to start your next project with our amazing team?
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