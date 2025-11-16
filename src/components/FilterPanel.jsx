const FilterPanel = ({ currentFilter, setCurrentFilter }) => {
  const getFilterButtonClasses = (filterType) => {
    const baseClasses = `
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

    const activeClasses = currentFilter === filterType ? 'bg-pink-900' : 'bg-pink-700 hover:bg-pink-900';

    return `${baseClasses} ${activeClasses}`; 
  };
    const clearButtonClasses = `
      hover:underline 
      hover:cursor-pointer 
      align-left 
      text-xs
    `.trim().replace(/\s+/g, ' ');

    return (
      <div className='row-span-4 bg-white'>
        <h1 className='italic text-gray-600 py-4'>Filters</h1>
        
        <button className={getFilterButtonClasses('completed')}
        onClick={() => setCurrentFilter('completed')}>
          Completed
        </button>
        
        <button className={getFilterButtonClasses('active')}
        onClick={() => setCurrentFilter('active')}>
          Active
        </button>
        
        <button className={getFilterButtonClasses('deleted')}
        onClick={() => setCurrentFilter('deleted')}>
          Deleted
        </button>
        
        <button className={clearButtonClasses}>
          Clear All
        </button>
      </div>
    );
};

export default FilterPanel;
