import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

// Web storage keys
const THEME_STORAGE_KEY = 'userThemePreference';
const NAVIGATION_MODE_KEY = 'navigationModePreference';
const HEADER_MODE_KEY = 'headerModePreference';
const VALID_THEMES = ['light', 'dark', 'system'];

const palettes = {
    light: {
        // Background colors
        backgroundPrimary: '#ffffff',
        backgroundSecondary: '#f5f5f5',
        backgroundTertiary: '#eeeeee',
        backgroundContrast: '#181818', // For dark elements on light theme

        // Card colors
        cardBackground: '#ffffff',
        cardBackgroundSecondary: '#f8f8f8',
        cardBorder: 'rgba(0, 0, 0, 0.08)',
        cardContrast: '#202020', // For dark cards on light theme

        // Text colors
        textPrimary: '#181818',
        textSecondary: '#444444',
        textTertiary: '#888888',
        textInverted: '#ffffff',
        textContrast: '#fefefe', // For light text on dark elements

        // Button colors - Standard
        buttonNeutral: '#f5f5f5',
        buttonNeutralText: '#181818',
        buttonNeutralBorder: '#e0e0e0',

        buttonPositive: 'rgba(34, 197, 94, 0.12)',
        buttonPositiveText: '#166534',
        buttonPositiveBorder: 'rgba(34, 197, 94, 0.24)',

        buttonNegative: 'rgba(239, 68, 68, 0.12)',
        buttonNegativeText: '#991b1b',
        buttonNegativeBorder: 'rgba(239, 68, 68, 0.24)',

        // Button colors - Contrast (dark buttons)
        buttonContrast: '#181818',
        buttonContrastText: '#fefefe',
        buttonContrastBorder: '#555555',

        // UI elements
        divider: 'rgba(0, 0, 0, 0.08)',
        border: '#e0e0e0',
        highlight: 'rgba(0, 0, 0, 0.04)',
        subtleBorder: '#aaa', // For subtle borders like in your component

        // Modal
        modalBackground: '#ffffff',
        modalBackdrop: 'rgba(0, 0, 0, 0.5)',

        // Snackbar
        snackbarBackground: '#f8f8f8',
        snackbarText: '#181818',

        // Switch
        switchTrack: '#e0e0e0',
        switchTrackActive: '#888888',
        switchThumb: '#ffffff',

        // Specific colors from your component
        searchBackground: '#e0e0e0',
        searchBorder: '#aaa',
        filterActiveBg: '#181818',
        filterActiveText: '#ffffff',
        quantityIndicator: 'rgba(0, 0, 0, 0.2)'
    },
    dark: {
        // Background colors
        backgroundPrimary: '#121212',
        backgroundSecondary: '#1e1e1e',
        backgroundTertiary: '#242424',
        backgroundContrast: '#f5f5f5', // For light elements on dark theme

        // Card colors
        cardBackground: '#181818',
        cardBackgroundSecondary: '#202020',
        cardBorder: 'rgba(255, 255, 255, 0.08)',
        cardContrast: '#e0e0e0', // For light cards on dark theme

        // Text colors
        textPrimary: '#fefefe',
        textSecondary: '#bbbbbb',
        textTertiary: '#888888',
        textInverted: '#181818',
        textContrast: '#181818', // For dark text on light elements

        // Button colors - Standard
        buttonNeutral: '#2a2a2a',
        buttonNeutralText: '#fefefe',
        buttonNeutralBorder: '#3a3a3a',

        buttonPositive: 'rgba(74, 222, 128, 0.12)',
        buttonPositiveText: '#86efac',
        buttonPositiveBorder: 'rgba(74, 222, 128, 0.24)',

        buttonNegative: 'rgba(252, 165, 165, 0.12)',
        buttonNegativeText: '#fca5a5',
        buttonNegativeBorder: 'rgba(252, 165, 165, 0.24)',

        // Button colors - Contrast (light buttons)
        buttonContrast: '#fefefe',
        buttonContrastText: '#181818',
        buttonContrastBorder: '#e0e0e0',

        // UI elements
        divider: 'rgba(255, 255, 255, 0.08)',
        border: '#55555555',
        highlight: 'rgba(255, 255, 255, 0.04)',
        subtleBorder: '#555555', // For subtle borders like in your component

        // Modal
        modalBackground: '#1e1e1e',
        modalBackdrop: 'rgba(0, 0, 0, 0.7)',

        // Snackbar
        snackbarBackground: '#242424',
        snackbarText: '#fefefe',

        // Switch
        switchTrack: '#444444',
        switchTrackActive: '#888888',
        switchThumb: '#f5f5f5',

        // Specific colors from your component
        searchBackground: '#222222',
        searchBorder: '#555555',
        filterActiveBg: '#dfdfdf',
        filterActiveText: '#000000',
        quantityIndicator: 'rgba(255, 255, 255, 0.2)',
        highlightBg: '#fefefe', // For highlighted text background
        highlightText: '#000000' // For highlighted text
    }
};

const variables = {
    spacing: { xs: 4, sm: 8, md: 16, lg: 24, xl: 32, xxl: 48 },
    radius: { xs: 4, sm: 8, md: 12, lg: 16, xl: 24, circle: 999 },
    borderWidth: { thin: 0.5, regular: 1, thick: 2 },
    shadow: {
        sm: {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.1,
            shadowRadius: 2,
        },
        md: {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.15,
            shadowRadius: 6,
        },
        lg: {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 8 },
            shadowOpacity: 0.2,
            shadowRadius: 12,
        }
    },
    fontSizes: { xs: 12, sm: 14, md: 16, lg: 20, xl: 24, xxl: 32 },
    fontWeights: { regular: 400, medium: 500, bold: 700 },
    transitions: {
        fast: 'all 0.15s ease',
        normal: 'all 0.3s ease',
        slow: 'all 0.5s ease'
    }
};

const ThemeContext = createContext(null);

const normalizeTheme = (theme) => {
    if (typeof theme === 'string' && VALID_THEMES.includes(theme)) {
        return theme;
    }
    return 'system';
};

const normalizeNavigationMode = (mode) => {
    if (['floating', 'fixed', 'side'].includes(mode)) {
        return mode;
    }
    return 'floating';
};

const normalizeHeaderMode = (mode) => {
    if (['collapsible', 'fixed', 'floating'].includes(mode)) {
        return mode;
    }
    return 'floating';
};

const getSystemTheme = () => {
    // For web, check prefers-color-scheme media query
    if (typeof window !== 'undefined' && window.matchMedia) {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
};

export const ThemeProvider = ({ children }) => {
    const [themeMode, setThemeModeState] = useState('system');
    const [navigationMode, setNavigationMode] = useState('floating');
    const [headerMode, setHeaderMode] = useState('floating');
    const [theme, setTheme] = useState(getSystemTheme());
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;

        const loadTheme = async () => {
            try {
                // Using localStorage for web instead of AsyncStorage
                const [storedTheme, storedNavMode, storedHeaderMode] = [
                    localStorage.getItem(THEME_STORAGE_KEY),
                    localStorage.getItem(NAVIGATION_MODE_KEY),
                    localStorage.getItem(HEADER_MODE_KEY)
                ];

                if (isMounted) {
                    const loadedTheme = storedTheme && VALID_THEMES.includes(storedTheme) ? storedTheme : 'system';
                    const loadedFloatingNav = storedNavMode !== null ? storedNavMode : 'floating';
                    const loadedHeaderMode = storedHeaderMode !== null ? storedHeaderMode : 'floating';

                    setThemeModeState(loadedTheme);
                    setNavigationMode(loadedFloatingNav);
                    setHeaderMode(loadedHeaderMode);

                    // Set initial theme based on loaded preference
                    setTheme(loadedTheme === 'system' ? getSystemTheme() : loadedTheme);
                    setIsLoading(false);
                }
            } catch (e) {
                console.warn('Failed to load theme mode from storage:', e);
                if (isMounted) {
                    setIsLoading(false);
                }
            }
        };

        loadTheme();

        return () => {
            isMounted = false;
        };
    }, []);

    useEffect(() => {
        if (!isLoading) {
            try {
                localStorage.setItem(THEME_STORAGE_KEY, themeMode);
            } catch (e) {
                console.warn('Failed to save theme mode to storage:', e);
            }
        }
    }, [themeMode, isLoading]);

    useEffect(() => {
        if (!isLoading) {
            try {
                localStorage.setItem(NAVIGATION_MODE_KEY, navigationMode);
            } catch (e) {
                console.warn('Failed to save navigation mode preference:', e);
            }
        }
    }, [navigationMode, isLoading]);

    useEffect(() => {
        if (!isLoading) {
            try {
                localStorage.setItem(HEADER_MODE_KEY, headerMode);
            } catch (e) {
                console.warn('Failed to save header mode preference:', e);
            }
        }
    }, [headerMode, isLoading]);

    useEffect(() => {
        const handleSystemThemeChange = (e) => {
            if (themeMode === 'system') {
                setTheme(e.matches ? 'dark' : 'light');
            }
        };

        let mediaQuery;

        if (themeMode === 'system') {
            // Set up media query listener for system theme changes
            mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            mediaQuery.addEventListener('change', handleSystemThemeChange);
            setTheme(getSystemTheme());
        } else {
            setTheme(themeMode);
        }

        return () => {
            if (mediaQuery) {
                mediaQuery.removeEventListener('change', handleSystemThemeChange);
            }
        };
    }, [themeMode]);

    useEffect(() => {
        const Navigation = normalizeNavigationMode(navigationMode);
        if (Navigation !== navigationMode) {
            setNavigationMode(Navigation);
        }
    }, [navigationMode]);

    useEffect(() => {
        const header = normalizeHeaderMode(headerMode);
        if (header !== headerMode) {
            setHeaderMode(header);
        }
    }, [headerMode]);

    const setThemeMode = useCallback((mode) => {
        setThemeModeState(normalizeTheme(mode));
    }, []);

    const colors = palettes[theme] || palettes.light;

    const contextValue = {
        theme,
        themeMode,
        setThemeMode,
        colors,
        variables,
        navigationMode,
        isDarkMode: theme === 'dark',
        setNavigationMode,
        headerMode,
        setHeaderMode,
        isLoading,
    };

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
