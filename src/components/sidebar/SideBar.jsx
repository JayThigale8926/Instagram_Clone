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

    const sideBarIcons = [
        {
            icon: RiHome4Fill,
            name: "Home"
        },
        {
            icon: IoSearch,
            name: "Search"
        },
        {
            icon: IoMdNotificationsOutline,
            name: "Notifications"
        },
        {
            icon: RiAddBoxLine,
            name: "Create"
        },
        {
            icon: RxAvatar,
            name: "Profile"
        },

    ]

    return (
        <>

            <div className="h-full w-16 md:w-60 border-r-2  border-gray-200 fixed">

                <div className="h-screen flex flex-col p-1">

                    <Link to={'/home'} className="flex justify-center md:justify-start m-1 ">
                        <div className='hidden md:flex w-[150px]'> <img src="./Instagram-logo.svg" alt="Instagram logo" /> </div>
                        <div className='flex md:hidden font-medium w-5 h-5 items-end  justify-center'> <FaInstagram /></div>
                    </Link>


                    {
                        sideBarIcons.map((item, index) =>

                            <Link key={index} to={'/home'} className="flex justify-center md:justify-start gap-2  hover:bg-gray-200 hover:rounded-lg">
                                <div className='w-5 h-5 items-end flex justify-center'> <item.icon /> </div>
                                <div className='h-5 text-base font-medium hidden md:flex' > {item.name} </div>
                            </Link>
                        )
                    }


                    {/* <Link to={'/home'} className=" flex justify-center md:justify-start gap-2 m-1 p-2 hover:bg-gray-200 hover:rounded-lg">
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
                    </Link> */}


                    <Link to={'/'} className="w-5 flex justify-center md:justify-start gap-2 mt-auto m-1 p-2 hover:bg-gray-200 hover:rounded-lg">
                        <div className="w-5 h-5 items-end flex justify-center" > <TbLogout2 /> </div>
                        <div className='h-5 text-base font-medium hidden md:flex'>Logout</div>
                    </Link>

                </div>
            </div >

        </>
    )
}

export default SideBar

