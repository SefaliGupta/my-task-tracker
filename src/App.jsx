import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div class="bg-blue-200 p-8 grid grid-cols-[20%_55.5%_20%] grid-rows-4 gap-6">
        <div class="row-span-4 bg-white">
          {/* for supporting user language */}
        </div>
        <div class="bg-white">
          <textarea class="focus:border-sky-500 
                    focus:outline
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
                    min-w-150"
            type="text" placeholder='Enter your task...'></textarea>
        </div>
        <div class="row-span-4 bg-white"></div>
        <div class="row-span-3 bg-white"></div>
        </div>
    </>
  )
}

export default App
