import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  const carpets = [
    {
      id: 1,
      title: "Persian Tabriz Carpet",
      price: 1299,
      image: "/images/tabriz.jpg"
    },
    {
      id: 2,
      title: "Isfahan Silk Carpet",
      price: 2499,
      image: "/images/isfahan.jpg"
    },
    {
      id: 3,
      title: "Kashan Traditional Carpet",
      price: 1899,
      image: "/images/kashan.jpg"
    },
    {
      id: 4,
      title: "Shiraz Tribal Carpet",
      price: 999,
      image: "/images/shiraz.jpg"
    },
    {
      id: 5,
      title: "Nain Wool & Silk Carpet",
      price: 3299,
      image: "/images/nain.jpg"
    },
    {
      id: 6,
      title: "Qom Pure Silk Carpet",
      price: 4999,
      image: "/images/qom.jpg"
    }
  ];

  return (
    <div className="relative bg-beige-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-40">
        <div className="absolute inset-0 opacity-40 bg-[url('/images/hero-pattern.jpg')] bg-cover bg-center"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-6xl font-bold mb-6 tracking-tight">Discover the Art of Persian Carpets</h1>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">Handcrafted masterpieces that transform your space into a timeless sanctuary</p>
          <a 
            href="/products"
            className="inline-flex items-center bg-primary-500 px-8 py-4 rounded-full text-white font-semibold hover:bg-primary-600 transition-all shadow-lg hover:shadow-xl"
          >
            Explore Collection
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="font-serif text-4xl font-bold text-center mb-4">Featured Collections</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Discover our carefully curated selection of exceptional Persian carpets</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {carpets.map((carpet) => (
            <a 
              key={carpet.id}
              href="https://github.com/FuadModaresi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
            >
              <img 
                src={carpet.image} 
                alt={carpet.title} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{carpet.title}</h3>
                <p className="text-gray-600">${carpet.price.toLocaleString()}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 text-orange">Handcrafted Quality</h3>
              <p className="text-gray-600">Each piece is carefully crafted by master artisans</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 text-orange">Authentic Designs</h3>
              <p className="text-gray-600">Traditional patterns with contemporary appeal</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 text-orange">Worldwide Shipping</h3>
              <p className="text-gray-600">Delivered safely to your doorstep</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
