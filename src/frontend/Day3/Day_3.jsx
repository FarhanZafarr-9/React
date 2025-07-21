import DayHeader from '../components/DayHeader'
import ListSearch from './ListSearch'

const Day_3 = ({ isDarkMode }) => {
    return (
        <div className={`relative flex flex-col items-center justify-center h-screen w-screen max-w-screen ${isDarkMode ? 'bg-[#121212]' : 'bg-[#dedede]'} transition-all duration-300 ease-in-out`}>

            <DayHeader isDarkMode={isDarkMode} num={'Day 3'} />
            <ListSearch isDarkMode={isDarkMode} />
        </div>
    )
}

export default Day_3 