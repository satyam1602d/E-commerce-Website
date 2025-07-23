
'use client';

import { useState } from 'react';
import { FilterOptions, Category } from '@/lib/types';
import { mockProducts } from '@/lib/mockData';

interface FilterSidebarProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
  onClearFilters: () => void;
  categories: Category[];
}

export default function FilterSidebar({ filters, onFilterChange, onClearFilters, categories }: FilterSidebarProps) {
  const [minPrice, setMinPrice] = useState(filters.minPrice?.toString() || '');
  const [maxPrice, setMaxPrice] = useState(filters.maxPrice?.toString() || '');

  const brands = [...new Set(mockProducts.map(p => p.brand))];
  const ratings = [5, 4, 3, 2, 1];

  const handleCategoryChange = (category: string) => {
    const newFilters = { ...filters };
    if (newFilters.category === category) {
      delete newFilters.category;
    } else {
      newFilters.category = category;
    }
    onFilterChange(newFilters);
  };

  const handleBrandChange = (brand: string) => {
    const newFilters = { ...filters };
    if (newFilters.brand === brand) {
      delete newFilters.brand;
    } else {
      newFilters.brand = brand;
    }
    onFilterChange(newFilters);
  };

  const handleRatingChange = (rating: number) => {
    const newFilters = { ...filters };
    if (newFilters.rating === rating) {
      delete newFilters.rating;
    } else {
      newFilters.rating = rating;
    }
    onFilterChange(newFilters);
  };

  const handlePriceChange = () => {
    const newFilters = { ...filters };
    
    if (minPrice) {
      newFilters.minPrice = parseFloat(minPrice);
    } else {
      delete newFilters.minPrice;
    }
    
    if (maxPrice) {
      newFilters.maxPrice = parseFloat(maxPrice);
    } else {
      delete newFilters.maxPrice;
    }
    
    onFilterChange(newFilters);
  };

  const handleStockChange = (inStock: boolean) => {
    const newFilters = { ...filters };
    if (newFilters.inStock === inStock) {
      delete newFilters.inStock;
    } else {
      newFilters.inStock = inStock;
    }
    onFilterChange(newFilters);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Filters</h3>
        <button
          onClick={onClearFilters}
          className="text-blue-600 hover:text-blue-700 text-sm transition-colors cursor-pointer"
        >
          Clear All
        </button>
      </div>

      <div className="space-y-6">
        {/* Categories */}
        <div>
          <h4 className="font-medium mb-3">Categories</h4>
          <div className="space-y-2">
            {categories.map((category) => (
              <label key={category.id} className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.category === category.name}
                  onChange={() => handleCategoryChange(category.name)}
                  className="mr-3 w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">{category.name}</span>
                <span className="ml-auto text-xs text-gray-500">({category.productCount})</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <h4 className="font-medium mb-3">Price Range</h4>
          <div className="flex gap-2 mb-2">
            <input
              type="number"
              placeholder="Min"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              placeholder="Max"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={handlePriceChange}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm transition-colors cursor-pointer whitespace-nowrap"
          >
            Apply Price
          </button>
        </div>

        {/* Brands */}
        <div>
          <h4 className="font-medium mb-3">Brands</h4>
          <div className="space-y-2">
            {brands.map((brand) => (
              <label key={brand} className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.brand === brand}
                  onChange={() => handleBrandChange(brand)}
                  className="mr-3 w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">{brand}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Rating */}
        <div>
          <h4 className="font-medium mb-3">Rating</h4>
          <div className="space-y-2">
            {ratings.map((rating) => (
              <label key={rating} className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.rating === rating}
                  onChange={() => handleRatingChange(rating)}
                  className="mr-3 w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`${i < rating ? 'ri-star-fill text-yellow-400' : 'ri-star-line text-gray-300'} text-sm w-4 h-4 flex items-center justify-center`}
                    ></i>
                  ))}
                  <span className="ml-2 text-sm text-gray-700">& up</span>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Availability */}
        <div>
          <h4 className="font-medium mb-3">Availability</h4>
          <div className="space-y-2">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={filters.inStock === true}
                onChange={() => handleStockChange(true)}
                className="mr-3 w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">In Stock</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={filters.inStock === false}
                onChange={() => handleStockChange(false)}
                className="mr-3 w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">Out of Stock</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
