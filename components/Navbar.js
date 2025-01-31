import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-orange">Persian Carpets</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-orange">Home</Link>
            <Link href="/products" className="text-gray-600 hover:text-orange">Products</Link>
            <Link href="/about" className="text-gray-600 hover:text-orange">About</Link>
            <Link href="/contact" className="text-gray-600 hover:text-orange">Contact</Link>
            <Link href="/cart" className="bg-orange text-white px-4 py-2 rounded-md hover:bg-orange/90">
              Cart (0)
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 