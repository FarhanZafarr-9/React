import React from 'react'
import { useTheme } from '../utils/ThemeContext'
import { Link, useLocation } from 'react-router-dom'

const Navigator = () => {
    const { navigationMode, colors, isDarkMode } = useTheme();
    const location = useLocation();

    const [expanded, setExpanded] = React.useState(false);
    const cName = `${isDarkMode ? '' : ''} rounded-md p-2 my-3 w-full text-sm font-semibold transition-all duration-200`;

    // Get the current path segment (e.g., 'day1', 'day2', etc.)
    const currComponent = location.pathname.split('/').filter(Boolean).pop() || '';

    function activeLinkStyle(link) {
        if (link === '' && location.pathname === '/') {
            return { background: colors.textPrimary, color: colors.backgroundPrimary };
        }
        // For other links, match the last segment
        return currComponent === link
            ? { background: colors.textPrimary, color: colors.backgroundPrimary }
            : { background: colors.backgroundTertiary, color: colors.textPrimary };
    }

    return (
        <div
            className={`absolute  ${navigationMode === 'fixed' ? 'bottom-0 left-0' : 'bottom-10 left-10 rounded-lg'} ${expanded ? 'pointer-events-auto' : 'pointer-events-none'}  max-w-[200px] min-w-[200px] flex flex-col items-center justify-between p-4 transition-all duration-200 ease-in-out z-10`}
            style={{
                background: expanded ? colors.cardBackground : 'transparent',
                border: (() => {
                    if (navigationMode === 'fixed') return '1px solid transparent';
                    return expanded ? `1px solid ${colors.border}` : 'none';
                })(),
                boxShadow: expanded ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none',
            }}
        >
            <div className='flex flex-col items-center w-full justify-center' style={{ transform: expanded ? 'scaleY(1)' : 'scaleY(0)', transition: 'transform 0.3s ease-in-out' }}>
                <Link to="/" className={cName} style={activeLinkStyle('')}>
                    Home
                </Link>
                <Link to="/day1" className={cName} style={activeLinkStyle('day1')}>
                    Day 1
                </Link>
                <Link to="/day2" className={cName} style={activeLinkStyle('day2')}>
                    Day 2
                </Link>
                <Link to="/day3" className={cName} style={activeLinkStyle('day3')}>
                    Day 3
                </Link>
            </div>
            <button onClick={() => setExpanded(!expanded)} className={`font-semibold mt-4 px-4 py-2 rounded-md w-full select-none pointer-events-auto`} style={{ background: colors.backgroundSecondary, color: colors.textPrimary, border: `1px solid ${colors.border}` }}>
                Navigation
            </button>
        </div>
    )
}

export default Navigator