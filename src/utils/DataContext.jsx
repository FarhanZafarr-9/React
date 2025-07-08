import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

// Storage keys
const USER_DATA_KEY = 'userData';

// Initial data structure
const initialUserData = {
    name: '',
    profession: '',
    hobbies: []
};

const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
    const [userData, setUserData] = useState(initialUserData);
    const [isLoading, setIsLoading] = useState(true);

    // Load data from localStorage on initial render
    useEffect(() => {
        const loadData = async () => {
            try {
                const storedData = localStorage.getItem(USER_DATA_KEY);
                if (storedData) {
                    const parsedData = JSON.parse(storedData);
                    setUserData({
                        ...initialUserData,
                        ...parsedData,
                        // Ensure hobbies is an array even if corrupted data was stored
                        hobbies: Array.isArray(parsedData.hobbies) ? parsedData.hobbies : []
                    });
                }
                setIsLoading(false);
            } catch (e) {
                console.warn('Failed to load user data from storage:', e);
                setIsLoading(false);
            }
        };

        loadData();
    }, []);

    // Save data to localStorage whenever it changes
    useEffect(() => {
        if (!isLoading) {
            try {
                localStorage.setItem(USER_DATA_KEY, JSON.stringify(userData));
            } catch (e) {
                console.warn('Failed to save user data to storage:', e);
            }
        }
    }, [userData, isLoading]);

    // Update entire data object
    const updateUserData = useCallback((newData) => {
        setUserData(prev => ({
            ...prev,
            ...newData,
            // Ensure hobbies remains an array
            hobbies: Array.isArray(newData.hobbies) ? newData.hobbies : prev.hobbies
        }));
    }, []);

    // Update specific fields
    const setName = useCallback((name) => {
        setUserData(prev => ({ ...prev, name }));
    }, []);

    const setProfession = useCallback((profession) => {
        setUserData(prev => ({ ...prev, profession }));
    }, []);

    // Hobby helper functions
    const addHobby = useCallback((hobby) => {
        if (!hobby) return;
        setUserData(prev => ({
            ...prev,
            hobbies: [...prev.hobbies, hobby]
        }));
    }, []);

    const removeHobby = useCallback((hobbyToRemove) => {
        setUserData(prev => ({
            ...prev,
            hobbies: prev.hobbies.filter(hobby => hobby !== hobbyToRemove)
        }));
    }, []);

    const updateHobby = useCallback((oldHobby, newHobby) => {
        if (!newHobby) return;
        setUserData(prev => ({
            ...prev,
            hobbies: prev.hobbies.map(hobby =>
                hobby === oldHobby ? newHobby : hobby
            )
        }));
    }, []);

    const clearHobbies = useCallback(() => {
        setUserData(prev => ({ ...prev, hobbies: [] }));
    }, []);

    const hasHobby = useCallback((hobby) => {
        return userData.hobbies.includes(hobby);
    }, [userData.hobbies]);

    const contextValue = {
        userData,
        isLoading,
        updateUserData,
        setName,
        setProfession,
        // Hobby helpers
        addHobby,
        removeHobby,
        updateHobby,
        clearHobbies,
        hasHobby,
        hobbies: userData.hobbies
    };

    return (
        <DataContext.Provider value={contextValue}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
};