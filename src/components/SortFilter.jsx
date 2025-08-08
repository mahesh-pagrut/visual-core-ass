export default function SortFilter({ value, onChange }) {
  const currentValue = typeof value === 'object' ? value : { price: 'default', name: 'default' };

  const priceOptions = [
    { value: "default", label: "Sort by Price" },
    { value: "price_high", label: "Price: High to Low" },
    { value: "price_low", label: "Price: Low to High" }
  ];

  const nameOptions = [
    { value: "default", label: "Sort by Name" },
    { value: "name_asc", label: "Name: A to Z" },
    { value: "name_desc", label: "Name: Z to A" }
  ];

  const handleChange = (type, selectedValue) => {
    const newValue = {
      ...currentValue,
      [type]: selectedValue
    };


    if (newValue.price === 'default' && newValue.name === 'default') {
      onChange('default');
    } else {
      onChange(newValue);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 mb-2">
        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
        </svg>
        <h4 className="text-sm font-medium text-gray-700">Sort By</h4>
      </div>

      <div className="flex flex-row   sm:flex-row gap-2">
        <div className="relative w-full sm:w-[calc(50%-0.25rem)]">
          <select
            value={currentValue.price}
            onChange={(e) => handleChange('price', e.target.value)}
            className="w-full pl-3.5 pr-9 py-1.5 rounded-md border border-gray-200 bg-white text-gray-700 text-sm
              focus:ring-1 focus:ring-blue-500/10 focus:border-blue-400 outline-none 
              cursor-pointer appearance-none transition-colors
              hover:border-gray-300"
          >
            {priceOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <div className="relative w-full sm:w-[calc(50%-0.25rem)]">
          <select
            value={currentValue.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className="w-full pl-3.5 pr-9 py-1.5 rounded-md border border-gray-200 bg-white text-gray-700 text-sm
              focus:ring-1 focus:ring-blue-500/10 focus:border-blue-400 outline-none 
              cursor-pointer appearance-none transition-colors
              hover:border-gray-300"
          >
            {nameOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
