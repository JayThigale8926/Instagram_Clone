import React from 'react'
import Avatar from '../avatar/Avatar'
import { timeAgo } from '../../utils/timeAgo'
import useFollowUnfollowUser from '../../hooks/useFollowUnfollowUser'
import { Link } from 'react-router-dom'


const UserPostHeader = ({ userProfile, post }) => {

    const { isFollowing, handleFollowUnfollowUser } = useFollowUnfollowUser(post.createdBy);

    return (
        <>
            <div className=" flex items-center justify-between p-1 mb-2">
                <div className=" flex items-center gap-2">
                    <Link to={`/${userProfile?.userName}`}>
                        <div className="flex items-center gap-2">
                            <Avatar img={userProfile?.profilePicUrl} />

                            <div className="">
                                <h1 className='text-sm font-medium text-black hover:cursor-pointer md:text-xl'>{userProfile?.userName}</h1>
                                <h2 className='text-[12px]  text-gray-400  md:flex'>
                                    {timeAgo(post.createdAt)}
                                </h2>
                            </div>

                        </div>
                    </Link>
                </div>

                <button className='text-sm font-medium text-black hover:text-red-500 hover:cursor-pointer' onClick={handleFollowUnfollowUser}>
                    {
                        isFollowing ? ("Unfollow") : ("Follow")
                    }
                </button>

            </div>
        </>
    )
}

export default UserPostHeader