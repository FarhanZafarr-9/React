import { useEffect, useState } from 'react'

const InputForm = ({ isDarkMode }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        setMessage('');
    }, [name, email, age, phone, address, city, country]);

    function validator() {
        const specialChars = /[!@#$\/%^&*(),.?":{}|<>]/;
        const emailPattern = /^[A-Za-z0-9._%+-]+@(gmail)\.com$/;

        if (!name || /[0-9]/.test(name) || specialChars.test(name)) {
            setMessage('Name can only have valid characters.');
            return;
        }
        if (!email || !emailPattern.test(email)) {
            setMessage('Email must be a valid gmail.com address.');
            return;
        }
        if (!country || /[0-9]/.test(country) || specialChars.test(country)) {
            setMessage('Country can only have valid characters.');
            return;
        }
        if (!city || /[0-9]/.test(city) || specialChars.test(city)) {
            setMessage('City can only have valid characters.');
            return;
        }
        if (!address || specialChars.test(address)) {
            setMessage('Address can only have valid characters.');
            return;
        }
        if (!phone || /[a-z]/.test(phone) || /[A-Z]/.test(phone) || specialChars.test(phone)) {
            setMessage('Phone can only have valid characters.');
            return;
        }
        setMessage('Passed');
    }

    return (
        <div className={`flex flex-col min-w-[300px] py-2 px-4 rounded-lg border-[0.75px] ${isDarkMode ? 'bg-[#181818] border-[#555555] text-white' : 'bg-[#e0e0e0] border-[#aaa] text-black'}`}>
            <span className='text-md font-semibold my-2 border-b-2 border-b-[#55555555] pb-3 '>
                Input Form
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
            <div className='flex w-full gap-[5%] justify-around items-center'>
                <input
                    type='text'
                    className={` outline-none focus:outline-none flex items-center justify-between gap-2 rounded-md border-[0.75px] ${isDarkMode ? 'bg-[#222222] border-[#555555] text-white' : 'bg-[#e0e0e0] border-[#aaa] text-black'} px-3 py-2 my-4 w-[55%]`}
                    onChange={e => setAddress(e.target.value)}
                    placeholder='Address'
                />
                <input
                    type='text'
                    className={` outline-none focus:outline-none flex items-center justify-between gap-2 rounded-md border-[0.75px] ${isDarkMode ? 'bg-[#222222] border-[#555555] text-white' : 'bg-[#e0e0e0] border-[#aaa] text-black'} px-3 py-2 my-4 w-[40%]`}
                    onChange={e => setPhone(e.target.value)}
                    placeholder='Ph No.'
                />
            </div>

            {message.length > 0 && <p className={`flex border-[0.75px] px-2 justify-center items-center rounded-md py-1 mt-4 ${message === "Passed" ? 'bg-green-900/30 text-green-500' : 'bg-red-900/30 text-red-500 border-red-600/40'}`} >{message}</p>}
            <button className={`flex justify-center items-center rounded-md  w-full ${!isDarkMode ? 'bg-[#181818] border-[#555555] text-white' : 'bg-[#e0e0e0] border-[#aaa] text-black'} font-semibold py-1 mt-4 mb-2`}
                onClick={() => validator()}
            >
                Submit
            </button>
        </div >
    )
}

export default InputForm