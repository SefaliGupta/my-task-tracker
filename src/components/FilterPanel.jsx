const FilterPanel = () => {
  const filterButtonClasses = `
    bg-pink-700 
    hover:bg-pink-900
    hover:cursor-pointer
    rounded-md
    px-4
    py-2
    mx-4
    mb-4
    float-right
    text-white
    w-50
  `.trim().replace(/\s+/g, ' ');

  const clearButtonClasses = `
    hover:underline 
    hover:cursor-pointer 
    align-left 
    text-xs
  `.trim().replace(/\s+/g, ' ');

  return (
    <div className='row-span-4 bg-white'>
      <h1 className='italic text-gray-600 py-4'>Filters</h1>
      
      <button className={filterButtonClasses}>
        Completed
      </button>
      
      <button className={filterButtonClasses}>
        Active
      </button>
      
      <button className={filterButtonClasses}>
        Deleted
      </button>
      
      <button className={clearButtonClasses}>
        Clear All
      </button>
    </div>
  );
};

export default FilterPanel;
