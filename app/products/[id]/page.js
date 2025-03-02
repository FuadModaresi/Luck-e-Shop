"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    if (id) {
      // Fetch product data based on the id
      fetch(`/api/products/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setProduct(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching product:", error);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <img src={product.imageUrl} alt={product.title} className="w-full" />
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button 
        onClick={handleAddToCart}
        className="bg-green text-white p-2 rounded"
      >
        Add to card
      </button>
    </div>
  );
};

export default ProductDetail;
