import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      // Fetch product data based on the id
      fetch(`/api/products/${id}`)
        .then(response => response.json())
        .then(data => {
          setProduct(data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching product:', error);
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

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <img src={product.imageUrl} alt={product.title} className="w-full" />
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button className="bg-green text-white p-2 rounded">Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
