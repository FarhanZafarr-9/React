import React from 'react'

const ContactCrad = ({ className, contacts, onclick }) => {
  return (
    <div className={`${className} flex flex-col justify-center items-center overflow-hidden
    p-4`} onClick={onclick}>

      <h1 className={`text-xl font-medium italic items-start flex px-2 mt-2 h-auto w-full border-b-2 pb-2 mb-1 border-[#55555555]`}>
        Contact Info:
      </h1>
      <ul className="flex flex-row gap-4 w-full flex-wrap">

        {contacts.map((contact) => (
          <li
            key={contact.name}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex before:content-['•'] before:mr-2 before:text-lg gap-2 text-sm"
          >
            <a href={contact.link} className='flex items-center hover:underline gap-2'>
              <contact.icon size={18} />{contact.value}
            </a>

          </li>
        ))}
      </ul>
    </div>
  )
}

export default ContactCrad

