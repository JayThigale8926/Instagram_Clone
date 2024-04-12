import ProfileHeader from './ProfileHeader'
import ProfileTabs from './ProfileTabs'
import ProfilePost from './ProfilePost'
import { Link, useParams } from "react-router-dom"
import useGetUserProfileByUsername from '../../hooks/useGetUserProfileByUsername'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import useUserProfileStore from '../../store/userProfileStore'


const ProfilePage = () => {

    const { user } = useParams();
    const { isLoading } = useGetUserProfileByUsername(user);
    const { userProfile } = useUserProfileStore();
    const userNotAvail = !userProfile && !isLoading;

    if (userNotAvail) {
        return <>
            <UserNotFound />
        </>

    }

    return (
        <div className='flex flex-col justify-center'>

            {
                isLoading ?
                    (<LoadingSkeleton />)
                    :
                    (
                        <>
                            <div className="">
                                <ProfileHeader
                                    username={userProfile.fullName}
                                    posts={userProfile.posts.length}
                                    followers={userProfile.followers.length}
                                    following={userProfile.following.length}
                                    imgURL={userProfile.profilePicUrl}
                                    bio={userProfile.bio}
                                />
                            </div>
                            <div className="flex flex-col gap-5">
                                <ProfileTabs />
                                <ProfilePost />

                            </div>
                        </>
                    )
            }


        </div >
    )


}

export default ProfilePage

const LoadingSkeleton = () => (
    <div className="my-5 mb-10" >

        <div className="flex items-center gap-2 mb-3">
            <Skeleton className='h-[30px] w-[30px] md:h-[50px] md:w-[50px] rounded-full' />
            <Skeleton className='w-28 md:w-36' />
        </div>

        <div className='mb-3 gap-3 flex'>
            <Skeleton className='rounded-md h-64 w-56' />
        </div>

    </div>
)

const UserNotFound = () => (
    <div className="flex flex-col text-black">
        <h1 className='text-xl font-semibold'>User not found </h1>
        <Link to={"/"} className=''>Go Home</Link>
    </div>
)

