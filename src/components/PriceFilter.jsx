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
      <h4 className="font-medium text-gray-700">Price Range</h4>
      <select
        value={getCurrentRange()}
        onChange={(e) => {
          const [min, max] = e.target.value.split('-').map(Number);
          onChange([min, max]);
        }}
        className="w-48 px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 text-sm
          focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none 
          cursor-pointer appearance-none
          bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23666666%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] 
          bg-[length:1.25rem] bg-[right_0.5rem_center] bg-no-repeat"
      >
        {ranges.map(range => (
          <option key={range.value.join('-')} value={range.value.join('-')}>
            {range.label}
          </option>
        ))}
      </select>
    </div>
  );
}
