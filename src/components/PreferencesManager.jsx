import React from 'react'
import { useTheme } from '../utils/ThemeContext'
import CustomPicker from './CustomPicker'
import { themes, navigationModes, headerModes } from '../Day3/Data'

const PreferencesManager = () => {

  const { colors,
    theme, setThemeMode,
    headerMode, setHeaderMode,
    navigationMode, setNavigationMode,
  } = useTheme()

  const [openManager, setOpenManager] = React.useState(false);

  return (
    <div className={`absolute right-10 bottom-10  flex flex-col items-center justify-center z-10 p-6 rounded-lg transition-all duration-300 ease-in-out`}
      style={{ background: openManager ? colors.cardBackground : 'transparent', color: colors.textPrimary, border: `0.75px solid ${openManager ? colors.border : 'transparent'}`, boxShadow: openManager ? `0 2px 10px rgba(0, 0, 0, 0.1)` : 'none' }}
    >
      {openManager && <>
        <h1 className={`text-xl font-bold mb-4 pb-2 w-full`} style={{ borderBottom: `0.75px solid ${colors.border}` }}>Preferences Manager</h1>
        <div className={`flex flex-col space-y-4`}>

          <div >
            <label className={`block mb-2 font-semibold`}>Theme Mode</label>
            <CustomPicker
              onChange={(e) => setThemeMode(e.target.value)}
              defaultValue={'dark'}
              options={themes}
              currValue={theme}
            />
          </div>

          <div>
            <label className={`block mb-2 font-semibold`}>Header Mode</label>
            <CustomPicker
              onChange={(e) => setHeaderMode(e.target.value)}
              defaultValue={'fixed'}
              options={headerModes}
              currValue={headerMode}
            />
          </div>
          <div>
            <label className={`block mb-2 font-semibold`}>Navigation Mode</label>
            <CustomPicker
              onChange={(e) => setNavigationMode(e.target.value)}
              defaultValue={'side'}
              options={navigationModes}
              currValue={navigationMode}
            />
          </div>

        </div>
      </>}
      <button onClick={() => setOpenManager(!openManager)} className={`font-semibold mt-4 px-4 py-2 rounded-md w-full select-none`} style={{ background: colors.backgroundTertiary, color: colors.textPrimary }}>
        {openManager ? 'Close Preferences' : 'Open Preferences'}
      </button>
    </div>
  )
}

export default PreferencesManager