import { useState } from 'react'
import { FaMoon } from "react-icons/fa6";
import { IoIosSunny } from "react-icons/io";

const ThemeToggle = ({ isDarkMode, setIsDarkMode, onclick }) => {

    const [isHover, setIsHover] = useState(false);

    return (
        <div className='absolute top-6 right-4 flex justify-center items-center ' onClick={onclick}>
            {/* theme name */}
            <div className={`${isDarkMode ? 'bg-[#282828] text-[#f0f0f0]' : 'bg-[#dedede] text-[#282828]'} rounded-lg p-2 absolute w-[175%] translate-x-[-100%] border-[0.75px] border-[#55555555]  h-auto cursor-pointer text-sm font-bold flex justify-center items-center ${isHover ? 'scale-100' : 'scale-0'}
                transition-all duration-300 ease-in-out`}>
                {isDarkMode ? 'Dark Mode' : 'Light Mode'}
            </div>

            <div
                className={` ${isDarkMode ? 'bg-[#f0f0f0]' : 'bg-[#121212]'} text-white px-2 py-2 rounded-2xl cursor-pointer transition-all duration-300 ease-in-out`}
                onClick={() => setIsDarkMode(!isDarkMode)}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
            >
                {/* theme logos */}
                <div className='flex flex-row w-full h-full gap-2 items-center justify-around'>
                    <IoIosSunny color={`${isDarkMode ? '#121212' : '#f0f0f0'}`} className='transition-all duration-300 ease-in-out' />
                    <FaMoon color={`${isDarkMode ? '#121212' : '#f0f0f0'}`} className='transition-all duration-300 ease-in-out' />
                </div>

                {/*toggle buttton*/}
                <div className={`absolute top-[50%] translate-y-[-50%] left-2 p-2 rounded-4xl flex 
                ${isDarkMode ? 'bg-[#121212] translate-x-6' : 'bg-[#f0f0f0] '}
                transition-all duration-300 ease-in-out`} />

            </div>
        </div>
    )
}

export default ThemeToggle