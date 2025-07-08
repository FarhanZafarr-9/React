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
    <div className={`absolute ${navigationMode === 'fixed' ? 'right-0 bottom-0' : 'right-10 bottom-10 rounded-lg'}  flex flex-col items-center justify-center z-10 p-6 px-4 min-w-[400px] max-w-[400px] transition-all duration-300 ease-in-out ${openManager ? 'pointer-events-auto' : 'pointer-events-none'}`}
      style={{
        background: openManager ? colors.cardBackground : 'transparent', color: colors.textPrimary,
        border: (() => {
          if (navigationMode === 'fixed') return '1px solid transparent';
          return openManager ? `1px solid ${colors.border}` : 'none';
        })(),
        boxShadow: openManager ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none',
      }}
        
    >
      <div style={{ transform: `${openManager ? 'scaleY(1)' : 'scaleY(0)'}` }} className={`flex flex-col items-start justify-start w-full  p-4 px-0 transition-all duration-300 ease-in-out`}>
        <h1 className={`text-xl font-bold mb-4 pb-2 w-full`} style={{ borderBottom: `0.75px solid ${colors.border}` }}>Preferences Manager</h1>
        <div className={`flex flex-col space-y-4 w-full`}>

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
      </div>
      <button onClick={() => setOpenManager(!openManager)} className={`font-semibold mt-4 px-4 py-2 rounded-md w-full select-none pointer-events-auto`} style={{ background: colors.backgroundTertiary, color: colors.textPrimary, border: `1px solid ${colors.border}` }}>
        {openManager ? 'Close Preferences' : 'Open Preferences'}
      </button>
    </div>
  )
}

export default PreferencesManager