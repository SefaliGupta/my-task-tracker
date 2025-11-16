import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useNotes from './Notes'

function App() {
  const { input, setInput, inputList, handleSubmit, removeItems, deletedItemsList, deletedItems, completedItems } = useNotes();

  return (
    <>
      <div className='bg-blue-200 p-8 grid grid-cols-[20%_55.5%_20%] grid-rows-4 gap-6'>
        <div className='row-span-4 bg-white'>
          {/* for supporting user language */}
        </div>
        <div className='bg-white'>
          <textarea className='focus:border-sky-500 
                    focus:outline-sky-500
                    min-h-24 
                    rounded-md
                    shadow-md
                    outline-2 
                    outline-blue-100
                    p-4
                    m-4
                    text-wrap
                    max-h-80
                    bg-white
                    row-span-1
                    min-w-150'
            type='text' placeholder='Enter your task...' value={input} onChange={(e) => setInput(e.target.value)}></textarea>
          <button className='bg-pink-700 
                  hover:bg-pink-900
                  hover:cursor-pointer
                  rounded-md
                  px-4
                  py-2
                  mx-4
                  mb-4
                  float-right
                  text-white'
          onClick={handleSubmit}>Submit</button>
        </div>
        <div className='row-span-4 bg-white'></div>
        <div className='row-span-3 bg-white'>
          <ul className='list-none'>
            {inputList.map((item) => (
              <li key={item.id} className='p-3 flex items-start justify-between gap-2'>
              {/* Left: checkbox + label */}
                <div className='flex items-center gap-2 flex-1'>
                  <input
                    type='checkbox'
                    className='align-middle w-4 h-4'
                    onChange={(e) => {
                      const row = e.target.closest('li');
                      row.classList.add(
                        "line-through",
                        "text-gray-400",
                        "opacity-40",
                        "transition-all",
                        "duration-500"
                      );
                      setTimeout(() => removeItems(item.id), 500);
                    }}
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
        </div>
    </>
  )
}

export default App
