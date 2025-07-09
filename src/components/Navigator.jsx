import React from 'react'
import { useTheme } from '../utils/ThemeContext'
import { Link, useLocation } from 'react-router-dom'
import { PiNavigationArrowFill } from "react-icons/pi";
import Modal from 'react-modal'

const Navigator = () => {
    const { navigationMode, colors, isDarkMode } = useTheme();
    const location = useLocation();

    const [expanded, setExpanded] = React.useState(false);
    const cName = `${isDarkMode ? '' : ''} rounded-md p-2 my-3 w-full text-sm font-semibold transition-all duration-200 hover:opacity-80`;

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
            className={`absolute ${navigationMode === 'fixed' ? 'bottom-0 left-0' : 'bottom-10 left-10 rounded-lg'} ${expanded ? 'pointer-events-auto' : 'pointer-events-none'} flex flex-col items-center justify-between p-4 transition-all duration-200 ease-in-out z-10`}
        >
            <Modal
                isOpen={expanded}
                onRequestClose={() => setExpanded(false)}
                className="outline-none"
                overlayClassName="fixed inset-0 bg-[rgba(0,0,0,0.5)] bg-opacity-50 flex items-center justify-center z-50"
                contentLabel="Navigation Menu"
            >
                <div
                    className="rounded-lg shadow-xl max-w-md min-w-[300px] w-full mx-4 max-h-[90vh] overflow-y-auto"
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
                            Navigation Menu
                        </h1>

                        <div className="flex flex-col space-y-2 w-full">
                            <Link
                                to="/"
                                className={cName}
                                style={activeLinkStyle('')}
                                onClick={() => setExpanded(false)}
                            >
                                Home
                            </Link>
                            <Link
                                to="/day1"
                                className={cName}
                                style={activeLinkStyle('day1')}
                                onClick={() => setExpanded(false)}
                            >
                                Day 1
                            </Link>
                            <Link
                                to="/day2"
                                className={cName}
                                style={activeLinkStyle('day2')}
                                onClick={() => setExpanded(false)}
                            >
                                Day 2
                            </Link>
                            <Link
                                to="/day3"
                                className={cName}
                                style={activeLinkStyle('day3')}
                                onClick={() => setExpanded(false)}
                            >
                                Day 3
                            </Link>
                        </div>

                        <div className="mt-6 pt-4" style={{ borderTop: `1px solid ${colors.border}` }}>
                            <button
                                onClick={() => setExpanded(false)}
                                className="font-semibold px-4 py-2 rounded-md w-full select-none hover:opacity-80 transition-opacity"
                                style={{
                                    background: colors.backgroundTertiary,
                                    color: colors.textPrimary,
                                    border: `1px solid ${colors.border}`
                                }}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>

            <button
                onClick={() => setExpanded(!expanded)}
                className="font-semibold mt-4 px-4 py-2 rounded-md w-full select-none pointer-events-auto hover:opacity-80 transition-opacity"
                style={{
                    background: colors.buttonNeutralText,
                    color: colors.buttonNeutral,
                    border: `1px solid ${colors.border}`
                }}
            >
                <PiNavigationArrowFill/>
            </button>
        </div>
    )
}

export default Navigator