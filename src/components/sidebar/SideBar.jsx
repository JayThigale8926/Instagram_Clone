import React from 'react'

import { FaInstagram } from "react-icons/fa";
import { RiHome4Fill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiAddBoxLine } from "react-icons/ri";
import { RxAvatar } from "react-icons/rx";
import { TbLogout2 } from "react-icons/tb";

import { Link } from 'react-router-dom';
import useLogOut from '../../hooks/useLogOut';
import useAuthStore from '../../store/useAuthStore';

const SideBar = () => {

    const userId = useAuthStore(state => state.userId)
    console.log(userId)

    const sideBarIcons = [
        {
            icon: RiHome4Fill,
            name: "Home",
            link: "/home"
        },
        {
            icon: IoSearch,
            name: "Search",
            link: "/home"
        },
        {
            icon: IoMdNotificationsOutline,
            name: "Notifications",
            link: "/home"
        },
        {
            icon: RiAddBoxLine,
            name: "Create",
            link: "/home"
        },
        {
            icon: RxAvatar,
            name: "Profile",
            link: "/JayT"
        },

    ]

    const { handleLogOut, error } = useLogOut();


    return (
        <>

            <div className="h-full flex justify-center border-r-2 border-gray-200 relative mx-1">

                <div className="h-full flex flex-col items-center p-1 fixed top-0 ">

                    <Link to={'/home'} className="flex justify-center md:justify-start mb-2 w-[10px] md:w-56">
                        <div className='hidden lg:flex w-[150px]'> <img src="./Instagram-logo.svg" alt="Instagram logo" /> </div>
                        <div className='flex lg:hidden font-medium  justify-center '> <FaInstagram /></div>
                    </Link>


                    {
                        sideBarIcons.map((item, index) =>

                            <Link key={index} to={item.link} className="w-[10px] lg:w-56 flex justify-center lg:justify-start gap-2 my-3  p-2 hover:bg-gray-200 hover:rounded-lg">
                                <div className='items-center flex justify-center md:text-3xl'> <item.icon /> </div>
                                <div className='text-base font-medium hidden lg:flex '> {item.name} </div>
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
                    </Link>  */}

                    {/* <Link to={'/'} className="flex justify-center lg:justify-start gap-2 mt-auto w-[10px] lg:w-56 p-2 hover:bg-gray-200 hover:rounded-lg" >
                        <div className="flex justify-center md:text-3xl " > <TbLogout2 /> </div>
                        <div className='text-base font-medium hidden lg:flex'>Logout</div>
                    </Link> */}

                    <div className="flex justify-center lg:justify-start gap-2 mt-auto w-[10px] lg:w-56 p-2 hover:bg-gray-200 hover:rounded-lg hover:cursor-pointer" onClick={handleLogOut}>
                        <div className="flex justify-center md:text-3xl"> <TbLogout2 /> </div>
                        <div className='text-base font-medium hidden lg:flex'>Logout</div>

                    </div>

                </div>
            </div >

        </>
    )
}

export default SideBar



