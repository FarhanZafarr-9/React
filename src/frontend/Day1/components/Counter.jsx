import React from 'react'
import { useTheme } from '../../utils/ThemeContext'

const Counter = ({ isDarkMode, counts, onclick }) => {

    const { headerMode } = useTheme();

    return (
        <div className={`absolute ${headerMode === 'fixed' ? 'top-4 left-4' : 'top-14 left-32'} flex justify-center items-center ${!isDarkMode ? 'bg-[#282828] text-white' : 'bg-[#f0f0f0] text-black'} rounded-3xl px-4 py-2 font-bold tracking-wider cursor-pointer text-md transition-all duration-300 ease-in-out`} onClick={onclick}>
            Counts: {counts}
        </div>
    )
}

export default Counter