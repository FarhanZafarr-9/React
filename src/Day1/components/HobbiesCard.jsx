import React from 'react'

const HobbiesCard = ({ className, onclick }) => {

  return (
    <div className={`${className} flex flex-col justify-center items-center overflow-hidden
    p-4`} onClick={onclick}>

      <h1 className={`text-xl font-medium italic items-start flex px-2 py-2 h-auto w-full border-b-2 pb-4 border-[#55555555]`}>
        Hobbies:
      </h1>
      
      <p className={`flex flex-col w-full text-sm p-2 text-justify items-center italic font-semibold mt-4`}>
        I have always been fascinated by how things look and work in an elegant way. inspiring my interest towards:
        <br />
        <br />

        <ul className="list-disc w-full space-y-2 px-4 my-1">
          <li> Games</li>
          <li> Coding</li>
          <li> Mathematics</li>
          <li> Solving Puzzles</li>
        </ul>
      </p>
    </div>
  )
}

export default HobbiesCard