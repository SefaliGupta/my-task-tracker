import { useState } from 'react'
import './App.css'
import useNotes from './Notes'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import FilterPanel from './components/FilterPanel'

function App() {
  const { 
    input, 
    setInput, 
    handleSubmit, 
    toggleCompletedItems, 
    deletedItemsList, 
    currentFilter, 
    setCurrentFilter,
    getFilteredItem,
    restoreItems
  } = useNotes();

  return (
    <div className='bg-pink-50 p-8 grid grid-cols-[20%_55.5%_20%] grid-rows-4 gap-6'>
      <div className='row-span-4 bg-white'>
        {/* for supporting user language */}
      </div>

      <TaskInput 
        input={input}
        setInput={setInput}
        handleSubmit={handleSubmit}
      />

      <FilterPanel
        currentFilter={currentFilter}
        setCurrentFilter={setCurrentFilter}
      />

      <TaskList 
        inputList={getFilteredItem()}
        toggleCompletedItems={toggleCompletedItems}
        deletedItemsList={deletedItemsList}
        currentFilter={currentFilter}
        restoreItems={restoreItems}
      />
    </div>
  )
}

export default App
