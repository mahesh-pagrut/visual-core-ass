export default function PriceFilter({ range, onChange }) {
  const ranges = [
    { label: "All Prices", value: [0, 50000] },
    { label: "Under ₹50", value: [0, 50] },
    { label: "₹50 - ₹100", value: [50, 100] },
    { label: "₹100 - ₹200", value: [100, 200] },
    { label: "₹200 - ₹500", value: [200, 500] },
    { label: "₹500 - ₹1000", value: [500, 1000] },
    { label: "Over ₹1000", value: [1000, 50000] }
  ];

  const getCurrentRange = () => {
    const currentRange = ranges.find(r => 
      r.value[0] === range[0] && r.value[1] === range[1]
    );
    return currentRange ? currentRange.value.join('-') : 'custom';
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 mb-2">
        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h4 className="text-sm font-medium text-gray-700">Price</h4>
      </div>
      <div className="relative">
        <select
          value={getCurrentRange()}
          onChange={(e) => {
            const [min, max] = e.target.value.split('-').map(Number);
            onChange([min, max]);
          }}
          className="w-full pl-3.5 pr-9 py-1.5 rounded-md border border-gray-200 bg-white text-gray-700 text-sm
            focus:ring-1 focus:ring-blue-500/10 focus:border-blue-400 outline-none 
            cursor-pointer appearance-none transition-colors
            hover:border-gray-300"
        >
          {ranges.map(range => (
            <option key={range.value.join('-')} value={range.value.join('-')}>
              {range.label}
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
  );
}
