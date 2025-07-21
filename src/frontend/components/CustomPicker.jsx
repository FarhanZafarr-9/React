import React from 'react'
import { useTheme } from '../utils/ThemeContext'

const CustomPicker = ({ onChange, defaultValue, options, currValue }) => {
    const { colors } = useTheme()

    return (
        <div
            className="relative w-full flex items-center p-1 px-4 justify-around flex-wrap gap-6 transition-all duration-200 ease-in-outl"
            style={{
                background: colors.backgroundTertiary,
                borderRadius: '8px',
                border: `0.75px solid ${colors.border}`
            }}
        >
            {options.map((opt) => (
                <span
                    className="flex items-center border-[0.75px] justify-between cursor-pointer rounded-md py-1 px-2 select-none transition-all duration-200 ease-in-out"
                    style={{ background: currValue === opt.value ? colors.textPrimary : 'transparent', color: currValue === opt.value ? colors.backgroundPrimary : colors.textSecondary, border: `${currValue === opt.value ? colors.border : 'transparent'} ` }}
                    onClick={() => onChange({ target: { value: opt.value } })}
                    key={opt.value}
                >
                    {opt.icon && <span className="mr-2">{opt.icon}</span>}
                    {opt.name && <span className="mr-2">{opt.name}</span>}
                </span>
            ))}
        </div>
    )
}

export default CustomPicker