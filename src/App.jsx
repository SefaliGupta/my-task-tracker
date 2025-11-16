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
    inputList, 
    handleSubmit, 
    removeItems, 
    deletedItemsList, 
    deletedItems, 
    completedItems 
  } = useNotes();

  return (
    <div className='bg-blue-200 p-8 grid grid-cols-[20%_55.5%_20%] grid-rows-4 gap-6'>
      <div className='row-span-4 bg-white'>
        {/* for supporting user language */}
      </div>

      <TaskInput 
        input={input}
        setInput={setInput}
        handleSubmit={handleSubmit}
      />

      <FilterPanel />

      <TaskList 
        inputList={inputList}
        removeItems={removeItems}
        deletedItemsList={deletedItemsList}
      />
    </div>
  )
}

export default App
