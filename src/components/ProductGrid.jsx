import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.length > 0 ? (
        products.map(p => <ProductCard key={p.id} product={p} />)
      ) : (
        <p className="col-span-full text-center text-gray-500 py-8">
          No products match the filters.
        </p>
      )}
    </div>
  );
}
