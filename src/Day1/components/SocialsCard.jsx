import React from 'react'


const SocialsCard = ({ isDarkMode, className, hover, socials, onclick }) => {


    return (
        <div className={`overflow-hidden grid grid-cols-2 grid-rows-2 ${className} gap-4 border-transparent bg-transparent pr-2 `}>
            {socials.map((social) => (
                <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`row-span-1 col-span-1 w-full h-full border-[0.75px] ${isDarkMode ? 'bg-[#181818] border-[#55555555]' : 'bg-[#cdcdcd] border-[#aaaaaa]'} ${hover} rounded-lg flex items-center justify-center transition-all duration-300 ease-in-out`}
                    onClick={onclick}
                >
                    <social.icon size={32} color={!isDarkMode ? '#121212' : '#f0f0f0'} className="transition-all duration-300 ease-in-out" />
                </a>
            ))}
        </div>
    )
}

export default SocialsCard