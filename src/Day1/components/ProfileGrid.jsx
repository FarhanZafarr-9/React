import React, { useState } from 'react'
import ProfileCard from './ProfileCard'
import SkillsCard from './SkillsCard'
import SocialsCard from './SocialsCard'
import IntroCard from './IntroCard'
import ContactCrad from './ContactCrad'
import HobbiesCard from './HobbiesCard'
import ProjectsCard from './ProjectsCard'
import QuoteCard from './QuoteCard'
import { projects, info, languages, contacts } from './Data'

const ProfileGrid = ({ isDarkMode, onclick }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const hover = ` shadow-lg hover:translate-x-2`;

    const hide = ` ${isExpanded ? 'opacity-100' : 'opacity-0'} `

    const cName = ` border-[0.75px] ${isDarkMode ? 'border-[#55555555] bg-[#181818] text-white' : 'border-[#aaaaaa] bg-[#d0d0d0] text-black'} rounded-lg 
    transition-all duration-300 ease-in-out` + hover;

    return (

        <div className="grid grid-cols-[repeat(5,15vw)] grid-rows-[repeat(4,15vh)] gap-6 p-4  rounded-2xl">
            <SocialsCard
                className={"col-span-1 row-span-1" + cName - hover + hide}
                isDarkMode={isDarkMode}
                hover={hover}
                socials={contacts}
                onclick={onclick}
            />
            <IntroCard
                className={"col-span-4 row-span-1" + cName + hide}
                info={info}
                onclick={onclick}
            />
            <SkillsCard
                className={"col-span-2 row-span-1" + cName + hide}
                languages={languages}
                onclick={onclick}
            />
            <ProfileCard
                className={"col-span-1 row-span-2" + cName}
                isDarkMode={isDarkMode}
                isExpanded={isExpanded}
                onclick={() => { setIsExpanded(!isExpanded); onclick() }}
            />
            <ProjectsCard
                className={"col-span-2 row-span-3" + cName + hide}
                projects={projects}
                onclick={onclick}
            />
            <HobbiesCard
                className={"col-span-1 row-span-2" + cName + hide}
                onclick={onclick}
            />
            <QuoteCard
                className={"col-span-1 row-span-1" + cName + hide}
                onclick={onclick}
            />
            <ContactCrad
                className={"col-span-2 row-span-1" + cName + hide}
                contacts={contacts}
                onclick={onclick}
            />
        </div>
    )
}

export default ProfileGrid;