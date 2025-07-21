import React, { useEffect, useState } from 'react'
import { FaEye, FaEyeSlash, FaCheck } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import DayHeader from '../components/DayHeader';
import { signupUser } from '../utils/fucntions'

const SignUp = ({ isDarkMode }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [message, setMessage] = useState('');

    const [eyeOff, setEyeOff] = useState(true);
    const [password, setPassword] = useState('');
    const [minLen, setMinLen] = useState(false);
    const [special, setSpecial] = useState(false);
    const [capital, setCapital] = useState(false);
    const [number, setNumber] = useState(false);
    const [strengthColor, setStrengthColor] = useState(isDarkMode ? 'bg-[#282828]' : 'bg-[#e0e0e0]')
    const [strength, setStrength] = useState('');
    const [status, setStatus] = useState('success');

    const cName = `flex items-center justify-start gap-4`;
    const iconCross = <RxCross1 color={isDarkMode ? '#FF6B6B' : '#D00000'} size={12} />;
    const iconTick = <FaCheck color={isDarkMode ? '#63E6BE' : '#1E7F5C'} size={12} />;

    useEffect(() => {
        setMessage('');
    }, [name, email, age, city, country]);

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
            else if (strength === 3) { setStrengthColor('bg-yellow-600/90'); setStrength('Medium'); }
            else if (strength === 2) { setStrengthColor('bg-orange-600/90'); setStrength('Weak'); }
            else if (strength === 1) { setStrengthColor('bg-red-600/90'); setStrength('Too Weak'); }
        } else {
            setStrengthColor(isDarkMode ? 'bg-[#282828]' : 'bg-[#e0e0e0]');
            setStrength('');
        }

    }, [password]);

    function validator() {
        const specialChars = /[!@#$\/%^&*(),.?":{}|<>]/;
        const emailPattern = /^[A-Za-z0-9._%+-]+@(gmail)\.com$/;

        if (!name || /[0-9]/.test(name) || specialChars.test(name)) {
            setStatus('error');
            setMessage('Name can only have valid characters.');
            return false;
        }
        if (!email || !emailPattern.test(email)) {
            setStatus('error');
            setMessage('Email must be a valid gmail.com address.');
            return false;
        }
        if (!country || /[0-9]/.test(country) || specialChars.test(country)) {
            setStatus('error');
            setMessage('Country can only have valid characters.');
            return false;
        }
        if (!city || /[0-9]/.test(city) || specialChars.test(city)) {
            setStatus('error');
            setMessage('City can only have valid characters.');
            return false;
        }
        if (!password || !minLen || !special || !capital || !number) {
            setStatus('error');
            setMessage('Password does not satisfy all conditions.');
            return false;
        }
        return true;
    }


    const handleSignUp = async () => {
        const user = { name, age, email, country, city, password };
        const res = await signupUser(user);

        if (res.success) {
            setStatus('success');
            setMessage('SignUp successful!');
        } else {
            setStatus('error');
            if (res.error === 'User already exists') {
                setMessage('Account already exists with this email.');
            } else {
                setMessage(res.error || 'Signup failed. Please try again.');
            }
        }
    };

    return (
        <div className={`relative flex flex-col items-center justify-center h-screen w-screen max-w-screen ${isDarkMode ? 'bg-[#121212]' : 'bg-[#dedede]'} transition-all duration-300 ease-in-out`}>

            <DayHeader isDarkMode={isDarkMode} num={'SignUp'} />
            <div className='flex w-screen justify-center items-center gap-8 '>
                <div className={`flex flex-col min-w-[300px] py-2 px-4 rounded-lg border-[0.75px] ${isDarkMode ? 'bg-[#181818] border-[#555555] text-white' : 'bg-[#e0e0e0] border-[#aaa] text-black'}`}>
                    <span className='text-md font-semibold my-2 border-b-2 border-b-[#55555555] pb-3 '>
                        SignUp
                    </span>
                    <div className='flex w-full gap-[5%] justify-around items-center'>
                        <input
                            type='text'
                            className={` outline-none focus:outline-none flex items-center justify-between gap-2 rounded-md border-[0.75px] ${isDarkMode ? 'bg-[#222222] border-[#555555] text-white' : 'bg-[#e0e0e0] border-[#aaa] text-black'} px-3 py-2 my-4  w-[70%]`}
                            onChange={e => setName(e.target.value)}
                            placeholder='Name'
                        />
                        <input
                            type='number'
                            className={` outline-none focus:outline-none flex items-center justify-between gap-2 rounded-md border-[0.75px] ${isDarkMode ? 'bg-[#222222] border-[#555555] text-white' : 'bg-[#e0e0e0] border-[#aaa] text-black'} px-3 py-2 my-4 w-[25%]`}
                            onChange={e => {
                                if (e.target.value >= 0 && e.target.value <= 100) {
                                    setAge(e.target.value);
                                }
                            }}
                            placeholder='Age'
                            min={0}
                            max={100}
                        />
                    </div>
                    <input
                        type='text'
                        className={` outline-none focus:outline-none flex w-full items-center justify-between gap-2 rounded-md border-[0.75px] ${isDarkMode ? 'bg-[#222222] border-[#555555] text-white' : 'bg-[#e0e0e0] border-[#aaa] text-black'} px-3 py-2 my-4`}
                        onChange={e => setEmail(e.target.value)}
                        placeholder='Email'
                    />
                    <div className='flex w-full gap-5 justify-around items-center'>
                        <input
                            type='text'
                            className={` outline-none focus:outline-none flex w-full items-center justify-between gap-2 rounded-md border-[0.75px] ${isDarkMode ? 'bg-[#222222] border-[#555555] text-white' : 'bg-[#e0e0e0] border-[#aaa] text-black'} px-3 py-2 my-4`}
                            onChange={e => setCountry(e.target.value)}
                            placeholder='Country'
                        />
                        <input
                            type='text'
                            className={` outline-none focus:outline-none flex w-full items-center justify-between gap-2 rounded-md border-[0.75px] ${isDarkMode ? 'bg-[#222222] border-[#555555] text-white' : 'bg-[#e0e0e0] border-[#aaa] text-black'} px-3 py-2 my-4`}
                            onChange={e => setCity(e.target.value)}
                            placeholder='City'
                        />
                    </div>

                    <div className={`flex w-full items-center justify-between gap-2 rounded-md border-[0.75px] ${isDarkMode ? 'bg-[#222222] border-[#555555] text-white' : 'bg-[#e0e0e0] border-[#aaa] text-black'} px-3 py-2 mt-4 mb-4`}>
                        <input
                            type={eyeOff ? 'password' : 'text'}
                            className={`border-transparent outline-none focus:outline-none ${isDarkMode ? ' text-white' : ' text-black'}`}
                            onChange={e => setPassword(e.target.value)}
                            placeholder='Password'
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


                    {message.length > 0 && (
                        <p
                            className={`flex border-[0.75px] px-2 justify-center items-center rounded-md py-1 mt-4 
                                ${status === 'success'
                                    ? 'bg-green-900/30 text-green-500 border-green-600/40'
                                    : 'bg-red-900/30 text-red-500 border-red-600/40'
                                }`}
                        >
                            {message}
                        </p>
                    )}

                    <button className={`flex justify-center items-center rounded-md  w-full ${!isDarkMode ? 'bg-[#181818] border-[#555555] text-white' : 'bg-[#e0e0e0] border-[#aaa] text-black'} font-semibold py-1 mt-4 mb-2`}
                        onClick={() => {
                            if (validator()) {
                                handleSignUp();
                                setMessage('Signing Up...');
                            }
                        }}
                    >
                        SignUp
                    </button>
                </div >

            </div>
        </div>
    )
}

export default SignUp;