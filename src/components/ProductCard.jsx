export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
      <div className="relative h-64 bg-gradient-to-b from-gray-50 to-white p-6">
        <div className="absolute top-3 right-3">
          {product.rating && (
            <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium shadow-sm">
              <span className="text-amber-500">⭐</span>
              <span className="text-gray-700">{product.rating.rate}</span>
              <span className="text-gray-400 text-[10px]">({product.rating.count})</span>
            </div>
          )}
        </div>
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content Container */}
      <div className="p-4">
        
        <div className="mb-2">
          <span className="px-2.5 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium capitalize">
            {product.category}
          </span>
        </div>

 
        <h3 className="font-medium text-gray-800 mb-2 line-clamp-2 min-h-[2.5rem]">
          {product.title}
        </h3>

      
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
            ₹{product.price.toFixed(2)}
          </p>
          
       
          <button 
            onClick={() => alert("Note: Add to Cart functionality is for demonstration purposes only!")}
            className="text-sm px-3 py-1.5 rounded-lg border-2 border-blue-600 text-blue-600 font-medium
            hover:bg-blue-600 hover:text-white transition-all duration-200 
            active:scale-95">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
