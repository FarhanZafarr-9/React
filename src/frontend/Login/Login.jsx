import DayHeader from '../components/DayHeader'
import { useState } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { signinUser } from '../utils/fucntions'

const Login = ({ isDarkMode }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [eyeOff, setEyeOff] = useState(true);
    const [message, setMessage] = useState('');

    const handleSignIn = async () => {

        try {
            const data = await signinUser({ email, password });
            if (data?.success) {
                setMessage("Login successful");
                console.log("Redirecting...", data); // Replace with navigation
            } else {
                setMessage(data?.message || "Login failed");
            }
        } catch (error) {
            setMessage("Something went wrong");
            console.error(error);
        }
    };

    return (
        <div className={`relative flex flex-col items-center justify-center h-screen w-screen max-w-screen ${isDarkMode ? 'bg-[#121212]' : 'bg-[#dedede]'} transition-all duration-300 ease-in-out`}>
            <DayHeader isDarkMode={isDarkMode} num={'Login'} />
            <div className='flex w-screen justify-center items-center gap-8 '>
                <div className={`flex flex-col min-w-[300px] py-2 px-4 rounded-lg border-[0.75px] ${isDarkMode ? 'bg-[#181818] border-[#555555] text-white' : 'bg-[#e0e0e0] border-[#aaa] text-black'}`}>

                    <span className='text-md font-semibold my-2 border-b-2 border-b-[#55555555] pb-3 '>
                        Login
                    </span>

                    <input
                        type='text'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        aria-label='email'
                        placeholder='Email'
                        className={`flex w-full items-center justify-between gap-2 rounded-md border-[0.75px] ${isDarkMode ? 'bg-[#222222] border-[#555555] text-white' : 'bg-[#e0e0e0] border-[#aaa] text-black'} px-3 py-2 mt-4 mb-4 outline-none focus:outline-none`}
                    />

                    <div className={`flex w-full items-center justify-between gap-2 rounded-md border-[0.75px] ${isDarkMode ? 'bg-[#222222] border-[#555555] text-white' : 'bg-[#e0e0e0] border-[#aaa] text-black'} px-3 py-2 mt-4 mb-4`}>
                        <input
                            type={eyeOff ? 'password' : 'text'}
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            aria-label='password'
                            placeholder='Password'
                            className="flex-1 bg-transparent outline-none focus:outline-none"
                        />
                        {eyeOff
                            ? <FaEyeSlash onClick={() => setEyeOff(!eyeOff)} className='cursor-pointer' />
                            : <FaEye onClick={() => setEyeOff(!eyeOff)} className='cursor-pointer' />
                        }
                    </div>

                    {message && (
                        <p className={`flex border-[0.75px] px-2 justify-center items-center rounded-md py-1 mt-4 ${message === "Login successful" ? 'bg-green-900/30 text-green-500' : 'bg-red-900/30 text-red-500 border-red-600/40'}`}>
                            {message}
                        </p>
                    )}

                    <button
                        className={`flex justify-center items-center rounded-md w-full ${!isDarkMode ? 'bg-[#181818] border-[#555555] text-white' : 'bg-[#e0e0e0] border-[#aaa] text-black'} font-semibold py-1 mt-4`}
                        onClick={handleSignIn}
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login;
