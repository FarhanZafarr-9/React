import React, { useEffect, useState } from 'react'
import { FaEye, FaEyeSlash, FaCheck } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const PasswordValidator = ({ isDarkMode }) => {

    const [eyeOff, setEyeOff] = useState(true);
    const [password, setPassword] = useState('');
    const [minLen, setMinLen] = useState(false);
    const [special, setSpecial] = useState(false);
    const [capital, setCapital] = useState(false);
    const [number, setNumber] = useState(false);
    const [message, setMessage] = useState('');

    const cName = `flex items-center justify-start gap-4`;
    const iconCross = <RxCross1 color='red' size={12} />;
    const iconTick = <FaCheck color='green' size={12} />

    useEffect(() => {
        const minLenValid = password.length >= 8;
        const specialValid = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        const capitalValid = /[A-Z]/.test(password);
        const numberValid = /[0-9]/.test(password);

        setMinLen(minLenValid);
        setSpecial(specialValid);
        setCapital(capitalValid);
        setNumber(numberValid);
        setMessage('')

    }, [password]);

    return (
        <div className={`flex flex-col min-w-[300px] py-2 px-4 rounded-lg border-[0.75px] ${isDarkMode ? 'bg-[#181818] border-[#555555] text-white' : 'bg-[#e0e0e0] border-[#aaa] text-black'}`}>
            <span className='text-md font-semibold my-2 border-b-2 border-b-[#55555555] pb-3 '>
                Password Validator
            </span>
            <div className={`flex w-full items-center justify-between gap-2 rounded-md border-[0.75px] ${isDarkMode ? 'bg-[#222222] border-[#555555] text-white' : 'bg-[#e0e0e0] border-[#aaa] text-black'} px-3 py-2 my-4`}>
                <input
                    type={eyeOff ? 'password' : 'text'}
                    className="border-transparent outline-none focus:outline-none"
                    onChange={e => setPassword(e.target.value)}
                />
                {!eyeOff && <FaEye onClick={() => setEyeOff(!eyeOff)} />}
                {eyeOff && <FaEyeSlash onClick={() => setEyeOff(!eyeOff)} />}
            </div>
            <ul className='pl-2'>
                <li className={cName}>{minLen ? iconTick : iconCross} 8 chcracters minimum</li>
                <li className={cName}>{special ? iconTick : iconCross} 1 special character</li>
                <li className={cName}>{capital ? iconTick : iconCross} 1 capital letter</li>
                <li className={cName}>{number ? iconTick : iconCross} 1 number</li>
            </ul>
            {message.length > 0 && password && <p className={`flex border-[0.75px] px-2 justify-center items-center rounded-md py-1 mt-4 ${message === "Passed" ? 'bg-green-900/30 text-green-500' : 'bg-red-900/30 text-red-500 border-red-600/40'}`} >{message}</p>}
            <button className={`flex justify-center items-center rounded-md  w-full ${!isDarkMode ? 'bg-[#181818] border-[#555555] text-white' : 'bg-[#e0e0e0] border-[#aaa] text-black'} font-semibold py-1 mt-4`}
                onClick={() => setMessage(minLen && special && capital && number ? 'Passed' : 'Failed')}
            >
                Verify
            </button>
        </div >
    )
}

export default PasswordValidator