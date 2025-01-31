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
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Discover the Art of Persian Carpets</h1>
          <p className="text-xl mb-8">Handcrafted masterpieces that transform your space</p>
          <a 
            href="https://github.com/FuadModaresi"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange px-8 py-3 rounded-md text-white font-semibold hover:bg-orange/90 transition"
          >
            Explore Collection
          </a>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Collections</h2>
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
