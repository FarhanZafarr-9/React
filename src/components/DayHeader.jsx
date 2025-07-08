import React from 'react'
import { useTheme } from '../utils/ThemeContext';

const DayHeader = ({ isDarkMode, num, onclick }) => {

    const { headerMode } = useTheme();

    return (
        <div className={`absolute ${headerMode === 'fixed' ? 'top-0 w-screen border-l-0 border-r-0' : 'top-10 mx-10 rounded-lg w-[90%]'}  flex justify-center text-4xl font-bold ${isDarkMode ? 'bg-[#181818] text-[#f0f0f0]' : 'bg-[#f0f0f0] text-[#282828]'} py-4 tracking-widest border-[0.75px] border-[#55555555] 
        transition-all duration-300 ease-in-out`} onClick={onclick}>
            {num}
        </div>
    )
}

export default DayHeader