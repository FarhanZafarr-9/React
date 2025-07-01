import React from 'react'

const ProjectsCard = ({ className, projects, onclick }) => {
    return (
        <div className={`${className} flex flex-col justify-center items-center overflow-y-auto scrollbar-hidden
    p-4`} onClick={onclick}>

            <h1 className={`text-xl font-medium italic items-start flex px-2 mt-2 h-auto w-full border-b-2 pb-4 border-[#55555555]`}>
                Projects:
            </h1>

            <ul className="flex flex-row gap-4 w-full flex-wrap mt-2">

                {projects.map((project) => (
                    <>
                        <li
                            key={project.name}
                            className="flex w-full items-center before:content-['•'] before:text-lg gap-2 text-sm mr-4  "
                        >
                            <p className='flex justify-between w-full'>
                                <p>{`${project.name} `}</p>
                                <p className='tracking-wider'>
                                    {`( ${project.stack.join(", ")} )`}
                                </p>
                            </p>
                        </li>

                        <p className='italic text-sm text-justify' >
                            {`${project.desc}: `}
                        </p>
                    </>
                ))}
            </ul>
        </div>
    )
}

export default ProjectsCard