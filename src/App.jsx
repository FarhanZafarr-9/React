import { Routes, Route } from 'react-router-dom'
import HomeComponent from './frontend/components/HomeComponent'
import Day_1 from './frontend/Day1/Day_1'
import Day_2 from './frontend/Day2/Day_2'
import Day_3 from './frontend/Day3/Day_3'
import NotFound from './frontend/components/NotFound'
import Login from './frontend/Login/Login.jsx'
import SignUp from './frontend/SignUp/SignUp.jsx'
import PreferencesManager from './frontend/components/PreferencesManager'
import Navigator from './frontend/components/Navigator'
import { useTheme } from './frontend/utils/ThemeContext'

const App = () => {
  const { isDarkMode, setThemeMode } = useTheme();

  return (
    <div className={`relative flex flex-col items-center justify-center ${isDarkMode ? 'bg-[#121212]' : 'bg-[#f0f0f0]'} transition-all duration-300 ease-in-out`}>
      <PreferencesManager />
      <Navigator />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/login" element={<Login isDarkMode={isDarkMode} />} />
        <Route path="/signup" element={<SignUp isDarkMode={isDarkMode} />} />
        <Route path="/day1" element={<Day_1 isDarkMode={isDarkMode} setIsDarkMode={setThemeMode} />} />
        <Route path="/day2" element={<Day_2 isDarkMode={isDarkMode} />} />
        <Route path="/day3" element={<Day_3 isDarkMode={isDarkMode} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
//