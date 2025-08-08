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
      <h4 className="font-medium text-gray-700">Category</h4>
      <div className="flex flex-wrap gap-2">
        {categories.map(cat => (
          <label 
            key={cat} 
            className={`inline-flex items-center px-3 py-1.5 rounded-full border cursor-pointer transition-all
              ${selected.includes(cat) 
                ? 'bg-blue-50 border-blue-500 text-blue-700' 
                : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
          >
            <input
              type="checkbox"
              checked={selected.includes(cat)}
              onChange={() => handleCheckbox(cat)}
              className="sr-only"
            />
            <span className="text-sm capitalize">{cat}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
