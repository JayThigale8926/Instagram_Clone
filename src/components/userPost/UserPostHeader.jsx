import React from 'react'
import Avatar from '../avatar/Avatar'

const UserPostHeader = ({ username }) => {
    return (
        <>
            <div className="max-w-[450px]  flex items-center justify-between p-1 mb-2">
                <div className=" flex items-center gap-2">
                    <Avatar img="./img1.png" />

                    <h1 className='text-base font-medium text-black hover:cursor-pointer'>{username}</h1>
                    <h2 className='text-xs text-gray-400 hidden md:flex'> . 2d ago </h2>
                </div>

                <div className='text-sm font-medium text-black hover:text-red-500 hover:cursor-pointer'>
                    Unfollow
                </div>

            </div>
        </>
    )
}

export default UserPostHeader