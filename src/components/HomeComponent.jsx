import React, { useState } from 'react'
import DayHeader from './DayHeader'
import { useTheme } from '../utils/ThemeContext'
import { useData } from '../utils/DataContext'
import profile from '../assets/logo.png'
import { RiEditFill, RiAddFill, RiCloseFill } from "react-icons/ri";
import Modal from 'react-modal'

const HomeComponent = () => {
    const { isDarkMode, colors } = useTheme();
    const {
        userData,
        setName,
        setProfession,
        addHobby,
        removeHobby,
        updateHobby,
        clearHobbies,
        hasHobby,
        hobbies
    } = useData();

    const [editingName, setEditingName] = useState(false);
    const [editingProfession, setEditingProfession] = useState(false);
    const [hobbyModalOpen, setHobbyModalOpen] = useState(false);
    const [editingHobby, setEditingHobby] = useState(null);
    const [hobbyInput, setHobbyInput] = useState('');

    const handleAddHobby = () => {
        if (hobbyInput.trim()) {
            addHobby(hobbyInput.trim());
            setHobbyInput('');
            setHobbyModalOpen(false);
        }
    };

    const handleEditHobby = (hobby) => {
        setEditingHobby(hobby);
        setHobbyInput(hobby);
        setHobbyModalOpen(true);
    };

    const handleUpdateHobby = () => {
        if (hobbyInput.trim() && editingHobby) {
            updateHobby(editingHobby, hobbyInput.trim());
            setHobbyInput('');
            setEditingHobby(null);
            setHobbyModalOpen(false);
        }
    };

    const handleDeleteHobby = (hobby) => {
        removeHobby(hobby);
    };

    const closeHobbyModal = () => {
        setHobbyModalOpen(false);
        setEditingHobby(null);
        setHobbyInput('');
    };

    return (
        <div className="relative flex flex-col items-center justify-center h-screen w-screen transition-all duration-300 ease-in-out">
            <DayHeader isDarkMode={isDarkMode} num={'Home'} />

            <div
                className="flex flex-col max-w-[500px] min-w-[500px] items-center border-[0.75px] rounded-lg p-6 shadow-lg"
                style={{ background: colors.cardBackground, borderColor: colors.border }}
            >
                {/* Profile Picture Section */}
                <div className="flex items-center w-full justify-center p-4 border-b-[0.75px] mb-6" style={{ borderColor: colors.border }}>
                    <img
                        src={profile}
                        alt="Profile"
                        className="w-24 h-24 rounded-full shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                    />
                </div>

                {/* Name Section */}
                <div className="flex items-center justify-between w-full p-3 rounded-lg select-none mb-4 hover:bg-opacity-50 transition-all"
                    style={{ backgroundColor: colors.backgroundSecondary }}>
                    {editingName ? (
                        <>
                            <input
                                value={userData.name}
                                onChange={(e) => setName(e.target.value)}
                                className="tracking-wider text-2xl font-bold w-[80%] px-2 py-1 focus:outline-none bg-transparent border-b-2 border-dashed"
                                style={{ color: colors.textPrimary, borderColor: colors.border }}
                                autoFocus
                            />
                            <button
                                onClick={() => setEditingName(false)}
                                className="cursor-pointer w-[20%] flex items-center justify-center font-semibold pl-2 border-l-2 hover:opacity-80 transition-opacity"
                                style={{ color: colors.textTertiary, borderColor: colors.border }}
                            >
                                Save
                            </button>
                        </>
                    ) : (
                        <>
                            <span className="text-2xl font-bold px-2 tracking-wider" style={{ color: colors.textPrimary }}>
                                {userData.name}
                            </span>
                            <RiEditFill
                                onClick={() => setEditingName(true)}
                                className="cursor-pointer hover:scale-110 transition-transform"
                                color={colors.textTertiary}
                                size={20}
                            />
                        </>
                    )}
                </div>

                {/* Profession Section */}
                <div className="flex items-center justify-between w-full p-3 rounded-lg select-none mb-6 hover:bg-opacity-50 transition-all"
                    style={{ backgroundColor: colors.backgroundSecondary }}>
                    {editingProfession ? (
                        <>
                            <input
                                value={userData.profession}
                                onChange={(e) => setProfession(e.target.value)}
                                className="tracking-wider text-md font-semibold w-[80%] px-2 focus:outline-none bg-transparent border-b-2 border-dashed"
                                style={{ color: colors.textSecondary, borderColor: colors.border }}
                                autoFocus
                            />
                            <button
                                onClick={() => setEditingProfession(false)}
                                className="cursor-pointer w-[20%] flex items-center justify-center font-semibold pl-2 border-l-2 hover:opacity-80 transition-opacity"
                                style={{ color: colors.textTertiary, borderColor: colors.border }}
                            >
                                Save
                            </button>
                        </>
                    ) : (
                        <>
                            <span className="text-md font-semibold px-2 py-1 tracking-wider" style={{ color: colors.textSecondary }}>
                                {userData.profession}
                            </span>
                            <RiEditFill
                                onClick={() => setEditingProfession(true)}
                                className="cursor-pointer hover:scale-110 transition-transform"
                                color={colors.textTertiary}
                                size={18}
                            />
                        </>
                    )}
                </div>

                {/* Hobbies Section */}
                <div className="w-full">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold" style={{ color: colors.textPrimary }}>
                            Hobbies
                        </h3>
                        <button
                            onClick={() => setHobbyModalOpen(true)}
                            className="flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium hover:opacity-80 transition-opacity"
                            style={{
                                backgroundColor: colors.buttonContrast,
                                color: colors.buttonContrastText,
                                border: `1px solid ${colors.border}`
                            }}
                        >
                            <RiAddFill size={16} />
                            Add Hobby
                        </button>
                    </div>

                    <div className="flex flex-wrap gap-2 min-h-[50px] p-3 rounded-lg" style={{ backgroundColor: colors.backgroundSecondary }}>
                        {hobbies.length > 0 ? (
                            hobbies.map((hobby, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium group hover:translate-0.5 transition-transform"
                                    style={{
                                        backgroundColor: colors.buttonContrast,
                                        color: colors.buttonContrastText,
                                        border: `1px solid ${colors.border}`
                                    }}
                                >
                                    <span
                                        className="cursor-pointer"
                                        onClick={() => handleEditHobby(hobby)}
                                    >
                                        {hobby}
                                    </span>
                                    <RiCloseFill
                                        size={16}
                                        className="cursor-pointer hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                                        onClick={() => handleDeleteHobby(hobby)}
                                    />
                                </div>
                            ))
                        ) : (
                            <span className="text-sm italic" style={{ color: colors.textTertiary }}>
                                No hobbies added yet. Click "Add Hobby" to get started!
                            </span>
                        )}
                    </div>

                    {hobbies.length > 0 && (
                        <button
                            onClick={clearHobbies}
                            className="mt-3 px-4 py-2 text-sm font-medium rounded-lg hover:opacity-80 transition-opacity"
                            style={{
                                backgroundColor: colors.backgroundTertiary,
                                color: colors.textSecondary,
                                border: `1px solid ${colors.border}`
                            }}
                        >
                            Clear All Hobbies
                        </button>
                    )}
                </div>
            </div>

            {/* Hobby Modal */}
            <Modal
                isOpen={hobbyModalOpen}
                onRequestClose={closeHobbyModal}
                className="outline-none"
                overlayClassName="fixed inset-0 bg-[rgba(0,0,0,0.5)] bg-opacity-50 flex items-center justify-center z-50"
                contentLabel={editingHobby ? "Edit Hobby" : "Add Hobby"}
            >
                <div
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full mx-4"
                    style={{
                        backgroundColor: colors.cardBackground,
                        border: `1px solid ${colors.border}`
                    }}
                >
                    <div className="p-6">
                        <h2
                            className="text-xl font-bold mb-4 pb-2 w-full"
                            style={{
                                color: colors.textPrimary,
                                borderBottom: `0.75px solid ${colors.border}`
                            }}
                        >
                            {editingHobby ? 'Edit Hobby' : 'Add New Hobby'}
                        </h2>

                        <div className="mb-6">
                            <label
                                className="block mb-2 font-semibold text-sm"
                                style={{ color: colors.textSecondary }}
                            >
                                Hobby Name
                            </label>
                            <input
                                type="text"
                                value={hobbyInput}
                                onChange={(e) => setHobbyInput(e.target.value)}
                                className="w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                style={{
                                    backgroundColor: colors.backgroundSecondary,
                                    color: colors.textPrimary,
                                    borderColor: colors.border
                                }}
                                placeholder="Enter hobby name..."
                                autoFocus
                            />
                        </div>

                        <div className="flex gap-3 justify-between w-full">
                            <button
                                onClick={closeHobbyModal}
                                className="px-4 py-2 font-medium rounded-lg hover:opacity-80 transition-opacity"
                                style={{
                                    backgroundColor: colors.backgroundSecondary,
                                    color: colors.textSecondary,
                                    border: `1px solid ${colors.border}`
                                }}
                            >
                                Cancel
                            </button>
                            <button
                                onClick={editingHobby ? handleUpdateHobby : handleAddHobby}
                                className="px-4 py-2 font-medium rounded-lg hover:opacity-80 transition-opacity w-full"
                                style={{
                                    backgroundColor: colors.buttonContrast,
                                    color: colors.buttonContrastText,
                                    border: `1px solid ${colors.border}`
                                }}
                                disabled={!hobbyInput.trim()}
                            >
                                {editingHobby ? 'Update' : 'Add'} Hobby
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default HomeComponent