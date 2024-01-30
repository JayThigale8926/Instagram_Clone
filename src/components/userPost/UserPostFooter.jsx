import React, { useState } from 'react'
import { CommentLogo, NotificationsLogo, UnlikeLogo } from '../../assets/constants';

const UserPostFooter = ({ username, caption }) => {

    const [isNotLiked, setIsNotLiked] = useState(true);
    const [likes, setLikes] = useState(10);

    const handleLike = () => {
        if (isNotLiked) {
            setIsNotLiked(!isNotLiked);  //To like a post
            setLikes(likes + 1);
        }
        else {
            setIsNotLiked(!isNotLiked);  //To dislike a post
            setLikes(likes - 1);
        }
    }

    return (
        <>
            <div className=" max-w-[450px]">
                <div className="flex gap-3">
                    <div className="hover:cursor-pointer " onClick={handleLike}>
                        {isNotLiked ? (< NotificationsLogo />) : (<UnlikeLogo />)}
                    </div>

                    <div className="hover:cursor-pointer">
                        <CommentLogo />
                    </div>
                </div>
                <div className="">
                    <h1 className='text-black'>{likes} likes</h1>
                </div>

                <div className="text-black max-w-[400px] overflow-hidden">
                    <h1 className='text-base font-medium text-black hover:cursor-pointer'>{username} <span className='text-sm font-normal text-black'>{caption}</span></h1>
                </div>

                <div className="">
                    <h2 className='text-sm text-gray-400 hover:cursor-pointer'>View all comments...</h2>
                </div>

            </div>
        </>
    )
}

export default UserPostFooter