import React from 'react'
import Avatar from "../avatar/Avatar"

const Comment = ({ img, createdAt, userName, userComment }) => {
    return (
        <>

            <div className="">
                <div className="flex p-3 gap-2 items-center">
                    <Avatar img={img} />
                    <div className="">
                        <h1 className='text-xs font-medium text-black md:text-sm'>{userName}</h1>
                        <p className='text-[10px] text-gray-400 md:text-xs md:flex'>{createdAt}</p>
                    </div>
                    <div className="text-sm font-medium">{userComment}</div>

                </div>




            </div>
        </>
    )
}

export default Comment