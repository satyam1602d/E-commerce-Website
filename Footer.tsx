
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Pacifico, serif' }}>
              ShopHub
            </h3>
            <p className="text-gray-300 mb-4">
              Your one-stop destination for quality products at amazing prices. Shop with confidence and enjoy fast, secure delivery.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-xl w-6 h-6 flex items-center justify-center"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                <i className="ri-twitter-fill text-xl w-6 h-6 flex items-center justify-center"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                <i className="ri-instagram-fill text-xl w-6 h-6 flex items-center justify-center"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                <i className="ri-youtube-fill text-xl w-6 h-6 flex items-center justify-center"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/deals" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Special Deals
                </Link>
              </li>
              <li>
                <Link href="/new-arrivals" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Returns
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Account</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/account" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  My Account
                </Link>
              </li>
              <li>
                <Link href="/orders" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Order History
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link href="/addresses" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Addresses
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2024 ShopHub. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-300 hover:text-white text-sm transition-colors cursor-pointer">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-300 hover:text-white text-sm transition-colors cursor-pointer">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-300 hover:text-white text-sm transition-colors cursor-pointer">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
