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
      className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm px-6 py-4"
      role="navigation"
      aria-label="Product filters"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-6">
          <CategoryFilter
            categories={categories}
            selected={localCats}
            onChange={(newCats) => setLocalCats(newCats)}
          />
          <PriceFilter
            range={localRange}
            onChange={(newRange) => setLocalRange(newRange)}
          />
          <SortFilter
            value={localSort}
            onChange={(newSort) => setLocalSort(newSort)}
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm transition-all hover:shadow-md active:transform active:scale-95"
            onClick={applyFilters}
          >
            Apply
          </button>
          <button
            type="button"
            className="px-5 py-2 border border-gray-300 hover:border-gray-400 bg-white text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all active:transform active:scale-95"
            onClick={resetFilters}
          >
            Reset
          </button>
        </div>
      </div>
    </nav>
  );
}
