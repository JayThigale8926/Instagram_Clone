import React from 'react'
import ProfilePosts from './ProfilePosts'

const ProfilePost = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center ">
                <ProfilePosts />
                <ProfilePosts />
                <ProfilePosts />
                <ProfilePosts />
            </div>
        </>
    )
}

export default ProfilePost