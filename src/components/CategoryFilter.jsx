export default function CategoryFilter({ categories, selected, onChange }) {
  const handleCheckbox = (category) => {
    if (selected.includes(category)) {
      onChange(selected.filter(c => c !== category));
    } else {
      onChange([...selected, category]);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 mb-2">
        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" />
        </svg>
        <h4 className="text-sm font-medium text-gray-700">Category</h4>
      </div>
      <div className="flex flex-wrap gap-2">
        {categories.map(cat => (
          <label 
            key={cat} 
            className={`group inline-flex items-center px-3 py-1.5 rounded-md border cursor-pointer transition-all text-sm
              ${selected.includes(cat) 
                ? 'bg-blue-50 border-blue-400 text-blue-600 font-medium' 
                : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'
              }`}
          >
            <input
              type="checkbox"
              checked={selected.includes(cat)}
              onChange={() => handleCheckbox(cat)}
              className="sr-only"
            />
            <span className="capitalize">{cat}</span>
            {selected.includes(cat) && (
              <svg className="w-4 h-4 ml-1.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            )}
          </label>
        ))}
      </div>
    </div>
  );
}
