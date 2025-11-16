const TaskList = ({ inputList, removeItems, deletedItemsList }) => {
  const handleCheckboxChange = (e, itemId) => {
    const row = e.target.closest('li');
    row.classList.add(
      "line-through",
      "text-gray-400",
      "opacity-40",
      "transition-all",
      "duration-500"
    );
    setTimeout(() => removeItems(itemId), 500);
  };

  return (
    <div className='row-span-3 bg-white'>
      <ul className='list-none'>
        {inputList.map((item) => (
          <li key={item.id} className='p-3 flex items-start justify-between gap-2'>
            {/* Left: checkbox + label */}
            <div className='flex items-center gap-2 flex-1'>
              <input
                type='checkbox'
                className='align-middle w-4 h-4'
                onChange={(e) => handleCheckboxChange(e, item.id)}
              />
              <label className='break-words text-left'>{item.text}</label>
            </div>

            {/* Right: delete button */}
            <button
              className='text-gray-400 hover:text-black hover:bg-gray-200 px-2 hover:cursor-pointer'
              onClick={() => deletedItemsList(item.id)}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
