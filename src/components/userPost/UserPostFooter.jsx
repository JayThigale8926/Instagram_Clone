import React, { useState } from 'react'
import { CommentLogo, NotificationsLogo, UnlikeLogo } from '../../assets/constants';
import PostCommentInput from './PostCommentInput';

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
            <div className="">
                <div className="flex gap-3">
                    <div className="hover:cursor-pointer" onClick={handleLike}>
                        {isNotLiked ? (< NotificationsLogo />) : (<UnlikeLogo />)}
                    </div>

                    <div className="hover:cursor-pointer">
                        <CommentLogo />
                    </div>
                </div>
                <div className="">
                    <h1 className='text-black text-xs font-medium md:text-base '>{likes} likes</h1>
                </div>

                <div className="text-black max-w-[400px] overflow-hidden flex gap-2 ">
                    <h1 className='text-sm font-medium text-black hover:cursor-pointer md:text-lg'>{username}
                        {/* <span className='text-xs font-normal text-black md:text-sm'>{caption}</span> */}
                    </h1>
                    <h4 className="text-xs font-normal text-black flex items-center md:text-base">{caption}</h4>
                </div>

                <div className="">
                    <h2 className='text-xs text-gray-400 hover:cursor-pointer md:text-base'>View all comments...</h2>
                </div>

                <div className="">
                    <PostCommentInput />
                </div>

            </div>
        </>
    )
}

export default UserPostFooter