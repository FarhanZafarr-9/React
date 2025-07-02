import React, { useState } from 'react'
import DayHeader from '../components/DayHeader'
import ThemeToggle from './components/ThemeToggle';
import Counter from './components/Counter';

import AllCounters from './components/AllCounters';

const Day_1 = ({ isDarkMode, setIsDarkMode }) => {

  const [count, setCount] = useState(0);

  function clickHandler(x) {
    setCount(count + x);
  }

  return (
    <div className={`relative flex flex-col items-center justify-center h-screen w-screen ${isDarkMode ? 'bg-[#121212]' : 'bg-[#dedede]'} transition-all duration-300 ease-in-out`}>

      <DayHeader isDarkMode={isDarkMode} num={1} />

      <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Counter isDarkMode={isDarkMode} counts={count} />
      < AllCounters isDarkMode={isDarkMode} count={count} onclick={clickHandler} />
    </div>
  )
}

export default Day_1;