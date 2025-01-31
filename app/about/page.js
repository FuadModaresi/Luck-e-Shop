const AboutPage = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Persian Carpets</h1>
          <p className="text-xl text-gray-600">A Legacy of Craftsmanship Since 1981</p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-gray-900">Our Story</h2>
            <p className="text-gray-600">
              For over three decades, Persian Carpets has been a beacon of authenticity in the world of 
              traditional carpet craftsmanship. Founded in 1990, our journey began with a simple yet 
              profound mission: to bridge the gap between master Persian artisans and discerning clients 
              worldwide.
            </p>
            <p className="text-gray-600">
              Each carpet in our collection tells a unique story, woven with traditions passed down 
              through generations. Our direct partnerships with artisan families in Iran ensure not only 
              the authenticity of our pieces but also fair compensation for these skilled craftspeople.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/images/about-workshop.jpg" 
              alt="Carpet Weaving Workshop" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-orange mb-4">Authenticity</h3>
            <p className="text-gray-600">
              Every carpet in our collection is carefully verified for authenticity, ensuring you receive 
              a genuine piece of Persian craftsmanship.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-orange mb-4">Quality</h3>
            <p className="text-gray-600">
              We maintain rigorous quality standards, selecting only the finest materials and most 
              skilled artisans for our pieces.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-orange mb-4">Sustainability</h3>
            <p className="text-gray-600">
              Our commitment to ethical sourcing and sustainable practices ensures the preservation of 
              both craftsmanship and environment.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">Our Expert Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img 
                src="/images/team1.jpg" 
                alt="Team Member" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900">Ahmad Karimi</h3>
              <p className="text-gray-600">Founder & Master Curator</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img 
                src="/images/team2.jpg" 
                alt="Team Member" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900">Sarah Mitchell</h3>
              <p className="text-gray-600">Design Consultant</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img 
                src="/images/team3.jpg" 
                alt="Team Member" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900">Ali Reza</h3>
              <p className="text-gray-600">Quality Assurance Expert</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 