import { useState, useMemo, useEffect } from "react";
import ProductGrid from "./components/ProductGrid";
import FilterPanel from "./components/FilterPanel";
import Pagination from "./components/Pagination";
import { ChevronDownIcon, ChevronUpIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';
import { filterProducts } from "./utils/filterUtils";
import productsData from "./productsData/products.json";

export default function App() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    categories: [],
    priceRange: [0, 50000],
    sortBy: "default"
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const itemsPerPage = 8;

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const filteredProducts = useMemo(
    () => filterProducts(products, filters),
    [products, filters]
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold text-gray-900">Product Catalog</h1>
            <button
              type="button"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="lg:hidden inline-flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <AdjustmentsHorizontalIcon className="h-5 w-5" />
              Filters
              {isFilterOpen ? (
                <ChevronUpIcon className="h-4 w-4" />
              ) : (
                <ChevronDownIcon className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      </header>

      <main>
        <div className={`bg-white border-b border-gray-200 transition-all duration-300 ease-in-out
          ${isFilterOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden lg:max-h-[500px] lg:opacity-100'}`}
        >
          <div className="max-w-7xl mx-auto">
            <FilterPanel 
              filters={filters} 
              setFilters={setFilters} 
              products={products}
              isOpen={isFilterOpen}
              setIsOpen={setIsFilterOpen}
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="mb-4">
            <p className="text-sm text-gray-600">
              Showing {paginatedProducts.length} of {filteredProducts.length} products
            </p>
          </div>

          <div className="mb-8">
            <ProductGrid products={paginatedProducts} />
          </div>

          <div className="pt-4 border-t border-gray-200">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </main>
    </div>
  );
}