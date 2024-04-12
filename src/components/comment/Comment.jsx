
import Avatar from "../avatar/Avatar"
import useGetUserProfileById from '../../hooks/useGetUserProfileById'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { timeAgo } from '../../utils/timeAgo'

const Comment = ({ comment }) => {

    const { userProfile, isLoading } = useGetUserProfileById(comment.createdBy)

    if (isLoading) return <CommentLoadingSkeleton />

    return (
        <>

            <div className="">
                <div className="flex p-3 gap-2 items-center">
                    <Avatar img={userProfile?.profilePicUrl} />
                    <div className="">
                        <h1 className='text-xs font-medium text-black md:text-sm'>
                            {userProfile?.userName}</h1>
                        <p className='text-[10px] text-gray-400 md:text-xs md:flex'>
                            {timeAgo(comment.createdAt)}</p>
                    </div>
                    <div className="text-sm font-medium">{comment.comment}</div>

                </div>




            </div>
        </>
    )
}

export default Comment

const CommentLoadingSkeleton = () => {
    return (
        <div className="">
            <Skeleton className='w-28 md:w-36' />

        </div>
    )
}