import React from 'react'
import { useTheme } from '../utils/ThemeContext'
import { Link } from 'react-router-dom'

const Navigator = () => {
    const { navigationMode, colors } = useTheme();

    return (
        <div
            className={`absolute ${navigationMode === 'fixed' ? 'bottom-0 left-0' : 'bottom-16 left-16'} flex items-center justify-between p-4 transition-all duration-200 ease-in-out z-10`}
            style={{
                background: colors.backgroundTertiary,
                borderBottom: `1px solid ${colors.border}`,
            }}
        >
            <Link to="/day1" style={{ color: colors.textPrimary, marginRight: 16 }}>
                Day 1
            </Link>
            <Link to="/day2" style={{ color: colors.textPrimary, marginRight: 16 }}>
                Day 2
            </Link>
            <Link to="/day3" style={{ color: colors.textPrimary }}>
                Day 3
            </Link>
        </div>
    )
}

export default Navigator