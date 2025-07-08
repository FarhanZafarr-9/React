import React from 'react'
import DayHeader from '../components/DayHeader'
import PasswordValidator from './Components.jsx/PasswordValidator'
import InputForm from './Components.jsx/InputForm'

const Day_2 = ({ isDarkMode }) => {
    return (
        <div className={`relative flex flex-col items-center justify-center h-screen w-screen max-w-screen ${isDarkMode ? 'bg-[#121212]' : 'bg-[#dedede]'} transition-all duration-300 ease-in-out`}>

            <DayHeader isDarkMode={isDarkMode} num={'Day 2'} />
            <div className='flex w-screen justify-center items-center gap-8 '>
                <PasswordValidator isDarkMode={isDarkMode} />
                <InputForm isDarkMode={isDarkMode} />
            </div>
        </div>
    )
}

export default Day_2