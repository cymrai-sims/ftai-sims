import React, {useState, useEffect} from 'react';

// Icons
import { BiMessage } from "react-icons/bi";
import { HiOutlineBell } from "react-icons/hi";
import { FaUserTie } from "react-icons/fa";
import { RiSearch2Line } from "react-icons/ri";
import { FaCaretDown } from "react-icons/fa";

const Navbar = () => {
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        fetch('/api/time')
            .then(res => res.json())
            .then(data => setCurrentTime(data.time))
            .catch(error => console.error('Error fetching time:', error));
    }, []);

    return (
        <div className='navbar fixed top-0 left-0 w-full h-30 bg-white text-black flex flex-row justify-between items-center px-10 shadow-md z-40 pl-[21rem]'>

        {/* Welcome Message */}
        <div className='name pl-10'>
            <p className='text-2xl font-light'>
                Welcome Back <span className='font-bold text-[var(--dark-main)]'>User Name</span>
                {/* {new Date(currentTime * 1000).toLocaleTimeString()} */}
            </p>
        </div>

        {/* Search Bar */}
        <div className='search w-[30%]'>
            <div className="relative flex items-center">
            <RiSearch2Line className="absolute left-3 text-gray-400 text-xl" />
            <input
                type="text"
                placeholder='Search...'
                className='w-full p-3 pl-10 rounded-md bg-white border border-[var(--dark-main)] text-black text-lg focus:outline-none focus:border-[var(--dark-main)] transition duration-300'
            />
            </div>
        </div>

        {/* Vertical Divider */}
        <div className='h-10 w-px bg-gray-300 mx-6'></div>

        {/* Notifications and User */}
        <div className='messages flex flex-row gap-15 items-center'>

            {/* Icons */}
            <div className="notifications flex flex-row gap-6">
            <BiMessage className='text-4xl text-[var(--dark-main-mid)] cursor-pointer hover:text-[var(--dark-main)]' />
            <HiOutlineBell className='text-4xl text-[var(--dark-main-mid)] cursor-pointer hover:text-[var(--dark-main)]' />
            </div>

            {/* User Info */}
            <div className='user flex flex-row gap-2 items-center'>
                <FaUserTie className='text-4xl text-[var(--dark-main-mid)] cursor-pointer hover:text-[var(--dark-main)]' />
                <a className='flex flex-row items-center gap-2' href="">
                    <div className='flex flex-col'>
                        <h5 className='text-[var(--dark-main)]'>User Name</h5>
                    </div>
                    <FaCaretDown className='text-2xl text-[var(--dark-main-mid)] cursor-pointer hover:text-[var(--dark-main)]' />
                </a>
            </div>
        </div>

        </div>
    );
};

export default Navbar;
