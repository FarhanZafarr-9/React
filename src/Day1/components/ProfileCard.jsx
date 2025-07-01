import React, { useState } from 'react'
import logo from '../assets/logo.png';
import logo2 from '../assets/logo2.png';

const ProfileCard = ({ isDarkMode, isExpanded, onclick, className }) => {

    const [isHover, setIsHover] = useState(false);

    return (

        <div className={`overflow-hidden flex items-center justify-center ${className}`} onClick={() => onclick()} >
            <img src={isDarkMode ? logo2 : logo}
                alt="Profile Pic"
                className={`flex w-[200px] h-[200px] cursor-pointer ${isHover && !isExpanded ? 'scale-105' : 'scale-100'} transition-all duration-300 ease-in-out  ${isDarkMode?'opacity-85':''}`}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}

            />
        </div>

    )
}

export default ProfileCard