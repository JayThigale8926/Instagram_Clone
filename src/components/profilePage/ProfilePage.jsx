import React from 'react'
import ProfileHeader from './ProfileHeader'
import ProfileTabs from './ProfileTabs'
import ProfilePost from './ProfilePost'
import useAuthStore from '../../store/useAuthStore'

const ProfilePage = () => {

    const userDetails = useAuthStore((state) => state.user)

    return (
        <div className='flex flex-col justify-center'>

            <div className="">
                <ProfileHeader username={userDetails.fullName} posts={7} followers={707} following={1000}
                    bio={"Fullstack developer | ReactJs | NodeJs | ExpressJs"} />

            </div>
            <div className="flex flex-col gap-5">

                <ProfileTabs />
                <ProfilePost />
            </div>
        </div>
    )
}

export default ProfilePage