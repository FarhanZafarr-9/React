import React from 'react'
import CounterM from './CounterM'

const increments = [1, 2, -1, 5, -3, 1]; // Example: each button has a different increment

const AllCounters = ({ isDarkMode, count, onclick }) => {
    return (
        <div className='flex gap-4 flex-wrap items-center justify-center'>
            {increments.map((inc, idx) => (
                <CounterM
                    key={idx}
                    isDarkMode={isDarkMode}
                    counts={count}
                    inc={inc}
                    onclick={() => onclick(inc)}
                />
            ))}
        </div>
    )
}

export default AllCounters