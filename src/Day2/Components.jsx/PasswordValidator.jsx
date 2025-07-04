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
    const [strengthColor, setStrengthColor] = useState(isDarkMode ? 'bg-[#282828]' : 'bg-[#e0e0e0]')
    const [strength, setStrength] = useState('');

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

        const strength = minLenValid + specialValid + capitalValid + numberValid;
        if (strength > 0) {
            if (strength === 4) { setStrengthColor('bg-green-600/90'); setStrength('Strong'); }
            else if (strength === 3) {setStrengthColor('bg-yellow-600/90'); setStrength('Medium'); }
            else if (strength === 2) {setStrengthColor('bg-orange-600/90'); setStrength('Weak'); }
            else if (strength === 1) {setStrengthColor('bg-red-600/90'); setStrength('Too Weak'); }
        } else {
            setStrengthColor(isDarkMode ? 'bg-[#282828]' : 'bg-[#e0e0e0]');
            setStrength('');
        }

    }, [password]);

    return (
        <div className={`flex flex-col min-w-[300px] py-2 px-4 rounded-lg border-[0.75px] ${isDarkMode ? 'bg-[#181818] border-[#555555] text-white' : 'bg-[#e0e0e0] border-[#aaa] text-black'}`}>

            <span className='text-md font-semibold my-2 border-b-2 border-b-[#55555555] pb-3 '>
                Password Validator
            </span>

            <div className={`flex w-full items-center justify-between gap-2 rounded-md border-[0.75px] ${isDarkMode ? 'bg-[#222222] border-[#555555] text-white' : 'bg-[#e0e0e0] border-[#aaa] text-black'} px-3 py-2 mt-4 mb-4`}>
                <input
                    type={eyeOff ? 'password' : 'text'}
                    className="border-transparent outline-none focus:outline-none"
                    onChange={e => setPassword(e.target.value)}
                />
                {!eyeOff && <FaEye onClick={() => setEyeOff(!eyeOff)} />}
                {eyeOff && <FaEyeSlash onClick={() => setEyeOff(!eyeOff)} />}
            </div>

            <div className='flex justify-between items-center w-full px-1 mb-2'>
                {Array.from({ length: 3 }).map((_, idx) => (
                    <p key={idx} className={`flex w-[32%] rounded-lg ${strengthColor} h-1`} />
                ))}
            </div>

            <p className={`flex items-center justify-end mb-4 ${strength ? 'opacity-100' : 'opacity-0'} text-sm font-semibold px-3`}>{strength}</p>

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