import React, { useState } from 'react'
import DayHeader from '../components/DayHeader'
import ThemeToggle from './components/ThemeToggle';
import ProfileGrid from './components/ProfileGrid';
import Counter from './components/Counter';

const Day_1 = ({ isDarkMode, setIsDarkMode }) => {

  const [count, setCount] = useState(0);

  function clickHandler() {
    setCount(count + 1);
  }

  return (
    <div className={`flex flex-col items-center justify-center h-screen w-screen ${isDarkMode ? 'bg-[#121212]' : 'bg-[#dedede]'} transition-all duration-300 ease-in-out`} onclick={clickHandler}>

      <DayHeader isDarkMode={isDarkMode} num={1} onclick={clickHandler} />

      <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} onclick={clickHandler} />
      <Counter isDarkMode={isDarkMode} counts={count} onclick={clickHandler} />

      <ProfileGrid isDarkMode={isDarkMode} onclick={clickHandler} />

    </div>
  )
}

export default Day_1;