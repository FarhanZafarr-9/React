import React from 'react'

const SkillsCard = ({ className, languages, onclick }) => {
  return (
    <div className={`${className} flex flex-col justify-center items-center overflow-hidden
    p-4`} onClick={onclick}>

      <h1 className={`text-xl font-medium italic items-start flex px-2 mt-2 h-auto w-full border-b-2 pb-4 border-[#55555555]`}>
        Programming Skills:
      </h1>

      <ul className="flex flex-row gap-4 w-full flex-wrap mt-2">

        {languages.map((language) => (
          <li
            key={language.name}
            className="flex items-center before:content-['•'] before:mr-2 before:text-lg gap-2 text-sm"
          >
            <language.icon size={18} />
            {language.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SkillsCard