import IconButton from '@mui/material/IconButton';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import RestoreIcon from '@mui/icons-material/Restore';

const TaskList = ({ inputList, toggleCompletedItems, deletedItemsList, currentFilter }) => {
  const handleCheckboxChange = (e, itemId) => {
    const row = e.target.closest('li');
    row.classList.add(
      "line-through",
      "text-gray-400",
      "opacity-40",
      "transition-all",
      "duration-500"
    );
    setTimeout(() => toggleCompletedItems(itemId), 500);
  };

  const originalClass = 'break-words text-left'

  const allClasses = () => {
    const addClass = currentFilter === 'completed' ? 'line-through text-gray-400 opacity-40 transition-all duration-500' : '';
    return `${addClass} ${originalClass}`;
  };

  return (
    <div className='row-span-3 bg-white'>
      <ul className='list-none'>
        {inputList.map((item) => (
          <li key={item.id} className='p-3 flex items-start justify-between gap-2'>
            {/* Left: checkbox + label */}
            <div className='flex items-center gap-2 flex-1'>
              { currentFilter == 'active' || currentFilter == 'completed' ? (
                <input
                  type='checkbox'
                  className='align-middle w-4 h-4'
                  checked={item.completed}
                  onChange={(e) => handleCheckboxChange(e, item.id)}
                />) : (<></>)
              }
              <label className={allClasses()}>{item.text}</label>
            </div>

            {/* Right: delete button */}
            {currentFilter == 'active' || currentFilter == 'completed' ? (
              <IconButton onClick={() => deletedItemsList(item.id)}>
                <HighlightOffIcon />
              </IconButton>) : (
              <IconButton>
                <RestoreIcon />
              </IconButton>) }
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
