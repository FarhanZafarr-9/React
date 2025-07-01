import React from 'react'

const Counter = ({ isDarkMode, count }) => {
    
   var color = isDarkMode ? 'bg-gray-900' : 'bg-white'; 

  return (
      <div className={`flex items-center justify-center h-[60%] w-[60%] ${color} rounded-lg shadow-lg`}>
          <p className={`${isDarkMode ? 'text-white' : 'text-black'} text-4xl font-bold self-center bg-[#1e1e1e] border-[0.75px] border-[#55555555] rounded-2xl p-8 shadow-md`}>
              counts: {count}
          </p>
    </div>
  )
}

export default Counter;