import React from 'react'

const CounterM = ({ isDarkMode, counts, onclick, inc }) => {
    return (
        <div
            onClick={onclick}
            className={`flex flex-col rounded-md p-2 border-[0.75px] cursor-pointer ${isDarkMode ? 'bg-[#181818] text-white border-[#55555555]' : 'bg-[#c0c0c0] text-black border-[#aaa]'} select-none items-center gap-2`}
        >
            <span className={`font-bold flex items-center justify-center rounded-md ${isDarkMode ? 'bg-[#282828] text-white' : 'bg-[#dcdcdc] text-black'} w-full py-1 px-2 rounded-b-sm`}>{inc > 0 ? `+${inc}` : inc}</span>
            <span className={`rounded-md px-4 py-1 font-bold ${isDarkMode ? 'bg-[#282828] text-white' : 'bg-[#dcdcdc] text-black'}  rounded-t-sm`}>Counts: {counts}</span>
        </div>
    )
}

export default CounterM