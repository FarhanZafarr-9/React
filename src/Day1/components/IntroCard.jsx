import React from 'react'

const IntroCard = ({ className, info, onclick }) => {
    return (
        <div className={`${className} flex flex-col justify-center items-center overflow-hidden
    p-4`} onClick={onclick}>

            <h1 className={`text-xl font-medium italic items-start flex px-2 mt-2 h-auto w-full border-b-2 pb-4 border-[#55555555]`}>
                Introduction:
            </h1>

            <ul className="flex flex-row gap-4 w-full flex-wrap mt-2">

                {info.map((i) => (
                    <li
                        key={i.name}
                        className="flex items-center before:content-['•'] before:text-lg gap-2 text-sm mr-4"
                    >

                        <p className='italic'>
                            {`${i.name}: `}
                        </p>
                        {i.value}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default IntroCard;
