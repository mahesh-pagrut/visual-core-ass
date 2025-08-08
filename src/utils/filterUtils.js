export const filterProducts = (products, filters) => {
  // First apply filters
  let filtered = products.filter(product => {
    const inCategory =
      filters.categories.length === 0 ||
      filters.categories.includes(product.category);

    const inPrice =
      product.price >= filters.priceRange[0] &&
      product.price <= filters.priceRange[1];

    return inCategory && inPrice;
  });

  // Then apply sorting
  if (filters.sortBy) {
    filtered.sort((a, b) => {
      if (typeof filters.sortBy === 'object') {
        // First try to sort by price
        if (filters.sortBy.price !== 'default') {
          const priceCompare = filters.sortBy.price === 'price_high' 
            ? b.price - a.price 
            : a.price - b.price;
          
          if (priceCompare !== 0) return priceCompare;
        }
        
        // Then try to sort by name
        if (filters.sortBy.name !== 'default') {
          return filters.sortBy.name === 'name_asc'
            ? a.title.localeCompare(b.title)
            : b.title.localeCompare(a.title);
        }
        
        return 0;
      } else {
        // Handle legacy single sort
        switch (filters.sortBy) {
          case 'price_high':
            return b.price - a.price;
          case 'price_low':
            return a.price - b.price;
          case 'name_asc':
            return a.title.localeCompare(b.title);
          case 'name_desc':
            return b.title.localeCompare(a.title);
          default:
            return 0;
        }
      }
    });
  }

  return filtered;
};
