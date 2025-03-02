"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";

// Replace image paths with placeholder images
const heroImage = "https://placehold.co/1920x1080";
const productImage = "https://placehold.co/600x400";

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [sortBy, setSortBy] = useState("featured");
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const categories = [
    { name: "All", count: 140 },
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
      image: productImage, // Changed from "/images/tabriz.jpg"
      category: "Traditional",
      rating: 4.8,
      reviews: 124,
      inStock: true,
      dimensions: "250x350cm",
      material: "Wool & Silk",
    },
    {
      id: 2,
      title: "Isfahan Silk Carpet",
      price: 2499,
      image: "/images/isfahan.jpg",
      category: "Silk",
    },
    {
      id: 3,
      title: "Kashan Traditional Carpet",
      price: 1899,
      image: "/images/kashan.jpg",
      category: "Traditional",
    },
    // ... previous products
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const { addToCart } = useCart();

  return (
    <div className="bg-beige-50 min-h-screen">
      {/* Hero Banner */}
      <div className="relative bg-gray-900 text-white py-16">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={heroImage} // Changed from "/images/products-hero.jpg"
            alt="Carpet Collection"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-5xl font-bold mb-4">Our Collection</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Discover our handpicked selection of authentic Persian carpets
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Mobile Filter Toggle */}
        <button
          className="md:hidden w-full bg-white p-4 rounded-lg shadow mb-4 flex items-center justify-center gap-2"
          onClick={() => setIsFilterVisible(!isFilterVisible)}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
          {isFilterVisible ? "Hide Filters" : "Show Filters"}
        </button>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters */}
          <motion.div
            className={`md:w-64 space-y-6 ${
              isFilterVisible ? "block" : "hidden md:block"
            }`}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            {/* Categories */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="font-serif text-xl font-semibold mb-4">
                Categories
              </h2>
              <div className="space-y-3">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-all ${
                      selectedCategory === category.name
                        ? "bg-primary-500 text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <span>{category.name}</span>
                    <span className="bg-white/20 px-2 py-1 rounded-full text-sm">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="font-serif text-xl font-semibold mb-4">
                Price Range
              </h2>
              <div className="space-y-4">
                <input
                  type="range"
                  min="0"
                  max="5000"
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([priceRange[0], parseInt(e.target.value)])
                  }
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>

            {/* Additional Filters */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="font-serif text-xl font-semibold mb-4">
                Material
              </h2>
              <div className="space-y-2">
                {["Wool", "Silk", "Wool & Silk", "Cotton"].map((material) => (
                  <label key={material} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="rounded text-primary-500"
                    />
                    <span>{material}</span>
                  </label>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort Options */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">Showing {products.length} results</p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border rounded-lg px-4 py-2"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest First</option>
              </select>
            </div>

            {/* Products */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {products.map((product) => (
                <motion.div key={product.id} variants={item} className="group">
                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                      {product.inStock ? (
                        <span className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                          In Stock
                        </span>
                      ) : (
                        <span className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                          Out of Stock
                        </span>
                      )}
                      <button className="absolute bottom-4 right-4 bg-white/90 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg
                          className="w-6 h-6 text-gray-900"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-serif text-xl font-semibold">
                          {product.title}
                        </h3>
                        <p className="text-xl font-bold text-primary-500">
                          ${product.price.toLocaleString()}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(product.rating)
                                  ? "text-yellow-400"
                                  : "text-gray-300"
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">
                          ({product.reviews} reviews)
                        </span>
                      </div>
                      <div className="text-sm text-gray-600 mb-4">
                        <p>Size: {product.dimensions}</p>
                        <p>Material: {product.material}</p>
                      </div>
                      <button
                        onClick={() => addToCart(product)}
                        className="w-full bg-primary-500 text-white py-2 rounded-lg hover:bg-primary-600 transition-colors"
                      >
                        Add to card
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
