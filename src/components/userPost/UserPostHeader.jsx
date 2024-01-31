import React from 'react'
import Avatar from '../avatar/Avatar'

const UserPostHeader = ({ username }) => {
    return (
        <>
            <div className=" flex items-center justify-between p-1 mb-2">
                <div className=" flex items-center gap-2">
                    <Avatar img="./img1.png" />

                    <h1 className='text-sm font-medium text-black hover:cursor-pointer md:text-xl'>{username}</h1>
                    <h2 className='text-sm text-gray-400 hidden md:flex'> . 2d ago </h2>
                </div>

                <div className='text-xs md:text-base font-medium text-black hover:text-red-500 hover:cursor-pointer'>
                    Unfollow
                </div>

            </div>
        </>
    )
}

export default UserPostHeader