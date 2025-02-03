'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('story');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (scrolled > 300) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-beige-50">
      {/* Enhanced Hero Section with Video Background */}
      <div className="relative h-[80vh] overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          className="absolute w-full h-full object-cover"
        >
          <source src="/videos/carpet-making.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-full flex items-center"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-7xl font-bold text-white mb-6">
              Crafting Excellence Since 1981
            </h1>
            <p className="text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Discover the artistry and tradition behind every Persian carpet
            </p>
            <button 
              onClick={() => document.getElementById('main-content').scrollIntoView({ behavior: 'smooth' })}
              className="mt-8 px-8 py-4 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-all duration-300 flex items-center gap-2 mx-auto"
            >
              Explore Our Story
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>

      <div id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Interactive Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 -mt-20 mb-24 relative z-10">
          {[
            { number: '40+', label: 'Years of Excellence', icon: '🏆' },
            { number: '5000+', label: 'Carpets Sold', icon: '🎨' },
            { number: '100+', label: 'Artisan Partners', icon: '🤝' },
            { number: '25+', label: 'Countries Served', icon: '🌍' }
          ].map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl p-8 shadow-lg text-center"
            >
              <div className="text-3xl mb-4">{stat.icon}</div>
              <div className="font-serif text-4xl font-bold text-primary-500 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Navigation Tabs */}
        <div className="mb-16">
          <div className="flex justify-center space-x-8 mb-12">
            {['story', 'values', 'team'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${
                  activeTab === tab 
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Dynamic Content Based on Active Tab */}
          <div className="min-h-[600px]">
            {activeTab === 'story' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-16"
              >
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="font-serif text-4xl font-bold mb-6">Our Heritage</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Founded in 1981, Persian Carpets began as a small family workshop dedicated to preserving 
                      the ancient art of carpet weaving. Today, we're proud to be one of the leading curators 
                      of fine Persian carpets worldwide.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Our journey has been marked by an unwavering commitment to quality, authenticity, and 
                      the preservation of traditional craftsmanship.
                    </p>
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src="/images/heritage.jpg" 
                      alt="Heritage" 
                      className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'values' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {[
                  {
                    icon: '🎨',
                    title: 'Artistry',
                    description: 'Every carpet tells a unique story through its intricate patterns and designs.'
                  },
                  {
                    icon: '🌿',
                    title: 'Sustainability',
                    description: 'Committed to eco-friendly practices and ethical sourcing of materials.'
                  },
                  {
                    icon: '💫',
                    title: 'Innovation',
                    description: 'Blending traditional techniques with modern design sensibilities.'
                  }
                ].map((value) => (
                  <motion.div
                    key={value.title}
                    whileHover={{ y: -10 }}
                    className="bg-white p-8 rounded-xl shadow-lg"
                  >
                    <div className="text-4xl mb-6">{value.icon}</div>
                    <h3 className="font-serif text-2xl font-semibold mb-4">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === 'team' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-12"
              >
                {[
                  {
                    name: 'Ahmad Karimi',
                    role: 'Founder & Master Curator',
                    image: '/images/team1.jpg',
                    linkedin: '#'
                  },
                  {
                    name: 'Sarah Mitchell',
                    role: 'Design Director',
                    image: '/images/team2.jpg',
                    linkedin: '#'
                  },
                  {
                    name: 'Ali Reza',
                    role: 'Quality Assurance Director',
                    image: '/images/team3.jpg',
                    linkedin: '#'
                  }
                ].map((member) => (
                  <motion.div
                    key={member.name}
                    whileHover={{ scale: 1.03 }}
                    className="bg-white rounded-xl overflow-hidden shadow-lg"
                  >
                    <div className="relative">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-[300px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-xl font-semibold">{member.name}</h3>
                      <p className="text-primary-500 mb-4">{member.role}</p>
                      <a 
                        href={member.linkedin}
                        className="text-gray-600 hover:text-primary-500 transition-colors"
                      >
                        View LinkedIn Profile →
                      </a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-primary-500 text-white p-4 rounded-full shadow-lg hover:bg-primary-600 transition-all duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default AboutPage; 