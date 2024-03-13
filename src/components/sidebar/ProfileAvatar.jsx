import React from 'react'
import useAuthStore from '../../store/useAuthStore';
import { Link } from 'react-router-dom';
import { RxAvatar } from "react-icons/rx";

const ProfileAvatar = () => {

    const userDetails = useAuthStore((state) => state.user)

    return (
        <>
            <Link to={`/${userDetails?.userName}`} className="w-[10px] lg:w-56 flex justify-center lg:justify-start gap-2 my-3  p-2 hover:bg-gray-200 hover:rounded-lg">
                <div className='items-center flex justify-center md:text-3xl'> <RxAvatar /> </div>
                <div className='text-base font-medium hidden lg:flex '> Profile </div>
            </Link>
        </>
    )
}

export default ProfileAvatar