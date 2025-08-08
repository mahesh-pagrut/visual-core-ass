export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 flex flex-col items-center gap-4">
      <div className="w-40 h-40 relative group">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-contain rounded-lg bg-gray-50 p-2 transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="text-base font-semibold text-gray-800 text-center h-12 line-clamp-2">
        {product.title}
      </h3>
      <p className="text-lg font-bold text-blue-600">
        ₹{product.price}
      </p>
      <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm capitalize">
        {product.category}
      </span>
      {product.rating && (
        <div className="flex items-center gap-2 bg-amber-50 px-3 py-1.5 rounded-lg text-sm">
          <span className="text-amber-500">⭐ {product.rating.rate}</span>
          <span className="text-gray-600">({product.rating.count})</span>
        </div>
      )}
    </div>
  );
}
