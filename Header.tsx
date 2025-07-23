
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCartStore, useUserStore, useUIStore } from '@/lib/store';
import { mockUser } from '@/lib/mockData';

export default function Header() {
  const { getItemCount } = useCartStore();
  const { user, isLoggedIn, login, logout } = useUserStore();
  const { isMenuOpen, setMenuOpen } = useUIStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleAuthClick = () => {
    if (isLoggedIn) {
      logout();
    } else {
      login(mockUser);
    }
  };

  if (!mounted) return null;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-2xl font-bold text-blue-600" style={{ fontFamily: 'Pacifico, serif' }}>
              ShopHub
            </Link>
            
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Home
              </Link>
              <Link href="/products" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Products
              </Link>
              <Link href="/categories" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Categories
              </Link>
              <Link href="/deals" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Deals
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 flex items-center justify-center"></i>
            </div>

            <Link href="/wishlist" className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              <i className="ri-heart-line text-xl w-6 h-6 flex items-center justify-center"></i>
              {user && user.wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {user.wishlist.length}
                </span>
              )}
            </Link>

            <Link href="/cart" className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              <i className="ri-shopping-cart-line text-xl w-6 h-6 flex items-center justify-center"></i>
              {getItemCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getItemCount()}
                </span>
              )}
            </Link>

            {isLoggedIn && user ? (
              <div className="flex items-center space-x-3">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-gray-700">{user.name}</p>
                </div>
                <button
                  onClick={handleAuthClick}
                  className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  <i className="ri-logout-circle-line text-xl w-6 h-6 flex items-center justify-center"></i>
                </button>
              </div>
            ) : (
              <button
                onClick={handleAuthClick}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
              >
                Sign In
              </button>
            )}

            <button
              onClick={() => setMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
            >
              <i className="ri-menu-line text-xl w-6 h-6 flex items-center justify-center"></i>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-2">
            <Link href="/" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Home
            </Link>
            <Link href="/products" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Products
            </Link>
            <Link href="/categories" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Categories
            </Link>
            <Link href="/deals" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Deals
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
