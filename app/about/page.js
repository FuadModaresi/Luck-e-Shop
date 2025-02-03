'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="bg-beige-50">
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/about-hero.jpg" 
            alt="Persian Carpet Workshop" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-6xl font-bold text-white mb-6">Crafting Excellence Since 1981</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
              A legacy of artistry, tradition, and unparalleled quality in Persian carpets
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 -mt-16 mb-24">
          {[
            { number: '40+', label: 'Years of Excellence' },
            { number: '5000+', label: 'Carpets Sold' },
            { number: '100+', label: 'Artisan Partners' },
            { number: '25+', label: 'Countries Served' }
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl p-6 shadow-lg text-center transform hover:-translate-y-1 transition-all duration-300">
              <div className="font-serif text-3xl font-bold text-primary-500 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Story Section with Timeline */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From a small family shop to an international brand, our story is woven with passion and dedication
            </p>
          </div>
          
          <div className="space-y-12">
            {[
              {
                year: '1981',
                title: 'The Beginning',
                description: 'Founded as a small family shop in Tehran'
              },
              {
                year: '1995',
                title: 'International Expansion',
                description: 'Opened our first international showroom in Dubai'
              },
              {
                year: '2010',
                title: 'Digital Revolution',
                description: 'Launched our e-commerce platform'
              },
              {
                year: '2023',
                title: 'Sustainable Future',
                description: 'Implemented eco-friendly practices across operations'
              }
            ].map((milestone, index) => (
              <div key={milestone.year} className={`flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
                <div className="flex-1">
                  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="text-primary-500 font-bold text-xl mb-2">{milestone.year}</div>
                    <h3 className="font-serif text-2xl font-semibold mb-3">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                <div className="hidden md:block w-20 h-0.5 bg-primary-500 flex-none"></div>
                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section with Icons */}
        <div className="mb-24">
          <h2 className="font-serif text-4xl font-bold text-center mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎨',
                title: 'Artistry',
                description: 'Every carpet is a masterpiece, crafted with meticulous attention to detail and artistic excellence.'
              },
              {
                icon: '🤝',
                title: 'Heritage',
                description: 'Preserving and promoting the rich cultural heritage of Persian carpet weaving.'
              },
              {
                icon: '♻️',
                title: 'Sustainability',
                description: 'Committed to ethical sourcing and environmental responsibility in our practices.'
              }
            ].map((value) => (
              <div key={value.title} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section with Hover Effects */}
        <div className="py-24">
          <h2 className="font-serif text-4xl font-bold text-center mb-16">Meet Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                name: 'Ahmad Karimi',
                role: 'Founder & Master Curator',
                image: '/images/team1.jpg',
                quote: '30 years of expertise in Persian carpets'
              },
              {
                name: 'Sarah Mitchell',
                role: 'Design Director',
                image: '/images/team2.jpg',
                quote: 'Bridging tradition with modern aesthetics'
              },
              {
                name: 'Ali Reza',
                role: 'Quality Assurance Director',
                image: '/images/team3.jpg',
                quote: 'Ensuring excellence in every piece'
              }
            ].map((member) => (
              <div key={member.name} className="group relative">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform group-hover:-translate-y-2 transition-all duration-300">
                  <div className="aspect-w-4 aspect-h-5">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-serif text-xl font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-primary-500 mt-1">{member.role}</p>
                    <p className="text-gray-600 mt-4 italic">"{member.quote}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 