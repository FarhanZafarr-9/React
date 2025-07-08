import { Routes, Route } from 'react-router-dom'
import HomeComponent from './components/HomeComponent'
import Day_1 from './Day1/Day_1'
import Day_2 from './Day2/Day_2'
import Day_3 from './Day3/Day_3'
import NotFound from './components/NotFound'
import PreferencesManager from './components/PreferencesManager'
import Navigator from './components/Navigator'
import { useTheme } from './utils/ThemeContext'

const App = () => {
  const { isDarkMode, setThemeMode } = useTheme();

  return (
    <div className={`relative flex flex-col items-center justify-center ${isDarkMode ? 'bg-[#121212]' : 'bg-[#f0f0f0]'} transition-all duration-300 ease-in-out`}>
      <PreferencesManager />
      <Navigator />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/day1" element={<Day_1 isDarkMode={isDarkMode} setIsDarkMode={setThemeMode} />} />
        <Route path="/day2" element={<Day_2 isDarkMode={isDarkMode} />} />
        <Route path="/day3" element={<Day_3 isDarkMode={isDarkMode} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App