const ProductsPage = () => {
  const categories = [
    { name: "Traditional", count: 45 },
    { name: "Modern", count: 32 },
    { name: "Tribal", count: 28 },
    { name: "Silk", count: 15 },
    { name: "Antique", count: 20 },
  ];

  const products = [
    {
      id: 1,
      title: "Persian Tabriz Carpet",
      price: 1299,
      image: "/images/tabriz.jpg",
      category: "Traditional"
    },
    {
      id: 2,
      title: "Isfahan Silk Carpet",
      price: 2499,
      image: "/images/isfahan.jpg",
      category: "Silk"
    },
    {
      id: 3,
      title: "Kashan Traditional Carpet",
      price: 1899,
      image: "/images/kashan.jpg",
      category: "Traditional"
    },
    // ... previous products
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Collection</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="bg-white p-6 rounded-lg shadow-md h-fit">
            <h2 className="text-xl font-semibold mb-4">Categories</h2>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.name} className="flex justify-between items-center">
                  <span className="text-gray-600">{category.name}</span>
                  <span className="bg-gray-100 px-2 py-1 rounded-full text-sm">
                    {category.count}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Grid */}
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {products.map((product) => (
                <a
                  key={product.id}
                  href="https://github.com/FuadModaresi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
                >
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                    <p className="text-gray-600">${product.price.toLocaleString()}</p>
                    <span className="text-sm text-gray-500">{product.category}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage; 