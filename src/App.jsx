import React, { useState } from 'react'
import Day_1 from './Day1/Day_1'
import Day_2 from './Day2/Day_2';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className={`relative flex flex-col items-center justify-center ${isDarkMode ? 'bg-[#121212]' : 'bg-[#f0f0f0]'}  transition-all duration-300 ease-in-out`
    }>
      <Day_1 isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      
      <Day_2 isDarkMode={isDarkMode}/>

    </div>
  )
}

export default App