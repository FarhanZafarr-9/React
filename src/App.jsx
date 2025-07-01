import React, { useState } from 'react'
import Counter from './components/counter.jsx'

const App = () => {
  const [count, setCount] = useState(0)
  const [isDarkMode, setIsDarkMode] = useState(true)

  return (
    <div className={`flex items-center justify-center h-screen w-screen ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <button
        className="absolute top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded"
        onClick={() => {
          setIsDarkMode(!isDarkMode);
          setCount(count + 1);
        }}
      >
        Toggle Dark Mode
      </button>
      <h1 className="text-4xl font-bold self-center text-white bg-[#1e1e1e] border-[0.75px] border-[#55555555] rounded-2xl p-8 shadow-md">My name is Farhan</h1>
      <Counter isDarkMode={isDarkMode} count={count} />
    </div>
  )
}

export default App