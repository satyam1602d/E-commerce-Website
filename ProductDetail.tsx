
'use client';

import { useState } from 'react';
import { mockProducts, mockReviews } from '@/lib/mockData';
import { useCartStore, useUserStore } from '@/lib/store';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';

interface ProductDetailProps {
  productId: string;
}

export default function ProductDetail({ productId }: ProductDetailProps) {
  const product = mockProducts.find(p => p.id === productId);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  
  const { addItem } = useCartStore();
  const { user, addToWishlist, removeFromWishlist } = useUserStore();

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h1>
            <Link href="/products">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
                Back to Products
              </button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const isInWishlist = user?.wishlist.includes(product.id) || false;
  const productReviews = mockReviews.filter(r => r.productId === product.id);
  const relatedProducts = mockProducts.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, quantity);
  };

  const handleWishlistToggle = () => {
    if (isInWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product.id);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600 transition-colors cursor-pointer">Home</Link>
            <i className="ri-arrow-right-s-line w-4 h-4 flex items-center justify-center"></i>
            <Link href="/products" className="hover:text-blue-600 transition-colors cursor-pointer">Products</Link>
            <i className="ri-arrow-right-s-line w-4 h-4 flex items-center justify-center"></i>
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover object-top"
              />
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
            <p className="text-lg text-gray-600 mb-4">{product.brand}</p>
            
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <i
                    key={i}
                    className={`${i < Math.floor(product.rating) ? 'ri-star-fill text-yellow-400' : 'ri-star-line text-gray-300'} text-lg w-5 h-5 flex items-center justify-center`}
                  ></i>
                ))}
              </div>
              <span className="ml-2 text-gray-600">({product.reviews} reviews)</span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-bold text-gray-900">${product.price}</span>
              {product.originalPrice && (
                <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
              )}
              {product.discount && (
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                  {product.discount}% OFF
                </span>
              )}
            </div>

            <p className="text-gray-700 mb-6">{product.description}</p>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <i className="ri-subtract-line w-4 h-4 flex items-center justify-center"></i>
                </button>
                <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <i className="ri-add-line w-4 h-4 flex items-center justify-center"></i>
                </button>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            <div className="flex gap-4 mb-6">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                  product.inStock
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Add to Cart
              </button>
              <button
                onClick={handleWishlistToggle}
                className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <i className={`${isInWishlist ? 'ri-heart-fill text-red-500' : 'ri-heart-line text-gray-600'} text-xl w-6 h-6 flex items-center justify-center`}></i>
              </button>
            </div>

            <div className="border-t pt-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {product.tags.map((tag) => (
                  <span key={tag} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span>Category: {product.category}</span>
                <span>•</span>
                <span>Brand: {product.brand}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-16">
          <div className="flex border-b border-gray-200 mb-6">
            <button
              onClick={() => setActiveTab('description')}
              className={`px-6 py-3 font-medium transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === 'description'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`px-6 py-3 font-medium transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === 'reviews'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Reviews ({productReviews.length})
            </button>
          </div>

          {activeTab === 'description' && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Product Description</h3>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Reviews</h3>
              <div className="space-y-4">
                {productReviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-200 pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{review.userName}</span>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <i
                              key={i}
                              className={`${i < review.rating ? 'ri-star-fill text-yellow-400' : 'ri-star-line text-gray-300'} text-sm w-4 h-4 flex items-center justify-center`}
                            ></i>
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">
                        {review.createdAt.toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
