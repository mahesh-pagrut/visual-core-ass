import React, { useState, useEffect } from "react";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import SortFilter from "./SortFilter";

export default function FilterPanel({ filters, setFilters, products, isOpen, setIsOpen }) {
  const categories = [...new Set(products.map((p) => p.category))];

  const [localCats, setLocalCats] = useState(filters.categories || []);
  const [localRange, setLocalRange] = useState(filters.priceRange || [0, 50000]);
  const [localSort, setLocalSort] = useState(filters.sortBy || "default");


  useEffect(() => {
    setLocalCats(filters.categories || []);
    setLocalRange(filters.priceRange || [0, 50000]);
    setLocalSort(filters.sortBy || "default");
  }, [filters]);

  function applyFilters() {
    setFilters((prev) => ({
      ...prev,
      categories: localCats,
      priceRange: localRange,
      sortBy: localSort
    }));

    setIsOpen(false);
  }

  function resetFilters() {
    const resetCats = [];
    const resetRange = [0, 50000];
    const resetSort = "default";
    setLocalCats(resetCats);
    setLocalRange(resetRange);
    setLocalSort(resetSort);
    setFilters((prev) => ({
      ...prev,
      categories: resetCats,
      priceRange: resetRange,
      sortBy: resetSort
    }));

    setIsOpen(false);
  }

  return (
    <nav
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm py-3"
      role="navigation"
      aria-label="Product filters"
    >
      <div className="max-w-7xl mx-auto space-y-4">
        <div className="flex items-center justify-between border-b border-gray-100 pb-2 px-4">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            <h2 className="text-sm font-medium text-gray-700">Filters</h2>
          </div>
          <button
            type="button"
            className="text-xs text-gray-500 hover:text-gray-700 flex items-center gap-1.5 transition-colors"
            onClick={resetFilters}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Reset
          </button>
        </div>
        
        <div className="flex flex-wrap items-center gap-4 px-4">
          <div className="w-full sm:w-auto">
            <CategoryFilter
              categories={categories}
              selected={localCats}
              onChange={(newCats) => setLocalCats(newCats)}
            />
          </div>
          
          <div className="w-full sm:w-48">
            <PriceFilter
              range={localRange}
              onChange={(newRange) => setLocalRange(newRange)}
            />
          </div>
          
          <div className="w-full sm:w-80 lg:w-96">
            <SortFilter
              value={localSort}
              onChange={(newSort) => setLocalSort(newSort)}
            />
          </div>
          
          <button
            type="button"
            className="ml-auto px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg 
            shadow-sm transition-all hover:bg-blue-700 
            active:transform active:scale-95 flex items-center gap-1.5"
            onClick={applyFilters}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            Apply
          </button>
        </div>
      </div>
    </nav>
  );
}
