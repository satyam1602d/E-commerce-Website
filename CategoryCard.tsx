
'use client';

import { Category } from '@/lib/types';
import Link from 'next/link';

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/category/${category.id}`}>
      <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer">
        <div className="relative">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-40 object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-xl font-semibold mb-1">{category.name}</h3>
              <p className="text-sm opacity-90">{category.productCount} Products</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
