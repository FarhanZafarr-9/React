import React, { useState } from 'react'
import DayHeader from './DayHeader'
import { useTheme } from '../utils/ThemeContext'
import { useData } from '../utils/DataContext'
import profile from '../assets/logo.png'
import { Input } from 'postcss'
import { RiEditFill } from "react-icons/ri";

const HomeComponent = () => {

    const { isDarkMode, colors, } = useTheme();
    const { userData, setName, setProfession } = useData();
    const [editingName, setEditingName] = useState(false);
    const [editingProfession, setEditingProfession] = useState(false);

    return (
        <div className={`relative flex flex-col  items-center justify-center h-screen w-screen transition-all duration-300 ease-in-out`}>

            <DayHeader isDarkMode={isDarkMode} num={'Home'} />

            <div className='flex flex-col max-w-[100px] justify-center min-w-[400px] items-center border-[0.75px] rounded-lg p-2'
                style={{ background: colors.cardBackground, borderColor: colors.border }}
            >
                <div className='flex items-center w-full justify-between p-2 border-b-[0.75px] mb-2' style={{ borderColor: colors.border }}>
                    <img src={profile} alt="Profile" height={100} width={100} style={{ borderRadius: '50%', cursor: 'pointer' }} />
                    
                </div>
                <div className='flex items-center justify-between w-full p-2 rounded-lg select-none'>
                    {editingName ? (
                        <>
                            <input value={userData.name} onChange={(e) => setName(e.target.value)} className='tracking-wider text-2xl font-bold w-[80%] px-1 focus:outline-none' style={{ color: colors.textPrimary }} />
                            <span onClick={() => setEditingName(false)} className='cursor-pointer w-[20%] flex items-center justify-center font-semibold pl-2 border-l-2' style={{ color: colors.textTertiary }}>save</span>
                        </>
                    ) : (
                        <>
                            <span className='text-2xl font-bold px-1 tracking-wider' style={{ color: colors.textPrimary }}> {userData.name}</span>
                                <RiEditFill onClick={() => setEditingName(true)} className='cursor-pointer' color={colors.textTertiary} />
                        </>
                    )}
                </div>
                <div className='flex items-center justify-between w-full p-2 rounded-lg select-none'>
                    {editingProfession ? (
                        <>
                            <input value={userData.profession} onChange={(e) => setProfession(e.target.value)} className='tracking-wider text-md font-semibold w-[80%] px-1 focus:outline-none' style={{ color: colors.textSecondary }} />
                            <span onClick={() => setEditingProfession(false)} className='cursor-pointer w-[20%] flex items-center justify-center font-semibold  pl-2 border-l-2' style={{ color: colors.textTertiary }}>save</span>
                        </>
                    ) : (
                        <>
                            <span className='text-md font-semibold px-1 tracking-wider' style={{ color: colors.textSecondary }}> {userData.profession}</span>
                                <RiEditFill onClick={() => setEditingProfession(true)} className='cursor-pointer' color={colors.textTertiary} />
                        </>
                    )}
                </div>
            </div>

        </div>
    )
}

export default HomeComponent