import React from 'react'
import UserPostHeader from './UserPostHeader'
import UserPostFooter from './UserPostFooter'

const UserPost = ({ username, caption }) => {
    return (
        <>

            <div className="my-5 mb-10 max-w-[450px]" >
                <UserPostHeader username={username} />
                <div className='mb-3'>
                    <img className='rounded-md ' src="./img1.png" alt="" />
                </div>
                <UserPostFooter username={username} caption={caption} />

            </div>
        </>
    )
}

export default UserPost