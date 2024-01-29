import React from 'react'

import { FaInstagram } from "react-icons/fa";
import { RiHome4Fill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiAddBoxLine } from "react-icons/ri";
import { RxAvatar } from "react-icons/rx";
import { TbLogout2 } from "react-icons/tb";

import { Link } from 'react-router-dom';

const SideBar = () => {

    // const sideBarIcons = ["FaInstagram", "RiHome4Fill", "IoSearch", "IoMdNotificationsOutline", "RiAddBoxLine", "RxAvatar", "TbLogout2"]

    return (
        <>

            <div className="h-screen">

                <div className="h-screen flex flex-col p-1">

                    <Link to={'/home'} className="flex justify-center md:justify-start m-1 ">
                        <div className='hidden md:flex w-[150px]'> <img src="./Instagram-logo.svg" alt="Instagram logo" /> </div>
                        <div className='flex md:hidden text-3xl font-medium'> <FaInstagram /></div>
                    </Link>



                    <Link to={'/home'} className=" flex justify-center md:justify-start gap-2 m-1 p-2 hover:bg-gray-200 hover:rounded-lg">
                        <div className='text-3xl'> <RiHome4Fill /></div>
                        <div className='text-base font-medium hidden md:flex' >Home</div>
                    </Link>
                    <Link to={'/home'} className="flex justify-center md:justify-start gap-2 m-1 p-2 hover:bg-gray-200 hover:rounded-lg">
                        <div className='text-3xl' > <IoSearch /></div>
                        <div className='text-base font-medium hidden md:flex'>Search</div>
                    </Link>
                    <Link to={'/home'} className="flex justify-center md:justify-start gap-2 m-1 p-2 hover:bg-gray-200 hover:rounded-lg">
                        <div className='text-3xl'> <IoMdNotificationsOutline /></div>
                        <div className='text-base font-medium hidden md:flex'>Notifications</div>
                    </Link>
                    <Link to={'/home'} className="flex justify-center md:justify-start gap-2 m-1 p-2 hover:bg-gray-200 hover:rounded-lg">
                        <div className='text-3xl'> <RiAddBoxLine /></div>
                        <div className='text-base font-medium hidden md:flex'>Create</div>
                    </Link>
                    <Link to={'/home'} className="flex justify-center md:justify-start gap-2 m-1 p-2 hover:bg-gray-200 hover:rounded-lg">
                        <div className="text-3xl" > <RxAvatar /> </div>
                        <div className='text-base font-medium hidden md:flex'>Profile</div>
                    </Link>


                    <Link to={'/'} className="flex justify-center md:justify-start gap-2 mt-auto m-1 p-2 hover:bg-gray-200 hover:rounded-lg">
                        <div className="text-3xl items-center" > <TbLogout2 /> </div>
                        <div className='text-base font-medium hidden md:flex'>Logout</div>
                    </Link>

                </div>
            </div >

        </>
    )
}

export default SideBar

