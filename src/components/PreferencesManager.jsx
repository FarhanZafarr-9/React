import React from 'react'
import { useTheme } from '../utils/ThemeContext'
import CustomPicker from './CustomPicker'
import { themes, navigationModes, headerModes } from '../Day3/Data'
import { IoSettingsSharp } from "react-icons/io5";
import Modal from 'react-modal'

const PreferencesManager = () => {

  const { colors,
    theme, setThemeMode,
    headerMode, setHeaderMode,
    navigationMode, setNavigationMode,
  } = useTheme()

  const [openManager, setOpenManager] = React.useState(false);

  return (
    <div className={`absolute ${navigationMode === 'fixed' ? 'right-0 bottom-0' : 'right-10 bottom-10 rounded-lg'}  flex flex-col items-center justify-center z-10 p-6 px-4 transition-all duration-300 ease-in-out `}
    >
      <Modal
        isOpen={openManager}
        onRequestClose={() => setOpenManager(false)}
        className="outline-none"
        overlayClassName="fixed inset-0 bg-[rgba(0,0,0,0.5)] bg-opacity-50 flex items-center justify-center z-50"
        contentLabel="Preferences Manager"
      >
        <div
          className=" rounded-lg shadow-xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto"
          style={{
            backgroundColor: colors.cardBackground,
            border: `1px solid ${colors.border}`
          }}
        >
          <div className="p-6">
            <h1
              className="text-xl font-bold mb-4 pb-2 w-full"
              style={{
                color: colors.textPrimary,
                borderBottom: `0.75px solid ${colors.border}`
              }}
            >
              Preferences Manager
            </h1>

            <div className="flex flex-col space-y-4 w-full">
              <div>
                <label
                  className="block mb-2 font-semibold"
                  style={{ color: colors.textPrimary }}
                >
                  Theme Mode
                </label>
                <CustomPicker
                  onChange={(e) => setThemeMode(e.target.value)}
                  defaultValue={'dark'}
                  options={themes}
                  currValue={theme}
                />
              </div>

              <div>
                <label
                  className="block mb-2 font-semibold"
                  style={{ color: colors.textPrimary }}
                >
                  Header Mode
                </label>
                <CustomPicker
                  onChange={(e) => setHeaderMode(e.target.value)}
                  defaultValue={'fixed'}
                  options={headerModes}
                  currValue={headerMode}
                />
              </div>

              <div>
                <label
                  className="block mb-2 font-semibold"
                  style={{ color: colors.textPrimary }}
                >
                  Navigation Mode
                </label>
                <CustomPicker
                  onChange={(e) => setNavigationMode(e.target.value)}
                  defaultValue={'side'}
                  options={navigationModes}
                  currValue={navigationMode}
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <button
        onClick={() => setOpenManager(!openManager)}
        className="font-semibold mt-4 px-4 py-2 rounded-md w-full select-none pointer-events-auto hover:opacity-80 transition-opacity"
        style={{
          background: colors.buttonContrast,
          color: colors.buttonContrastText,
          border: `1px solid ${colors.border}`
        }}
      >
        <IoSettingsSharp className="inline-block" />
      </button>
    </div>
  )
}

export default PreferencesManager