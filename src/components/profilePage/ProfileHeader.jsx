import React, { useState } from 'react'
import Modal from '../modal/Modal';
import ProfileEdit from './ProfileEdit';
import { useParams } from "react-router-dom"
import useAuthStore from '../../store/useAuthStore';


const ProfileHeader = ({ username, imgURL, posts, followers, following, bio }) => {

    const [isVisible, setIsVisible] = useState(false);
    const currentUser = useAuthStore((state) => state.user)

    const { user } = useParams();

    const isCurrUser = currentUser.userName === user;

    const handleModal = () => {
        setIsVisible(!isVisible);
    }

    return (
        <>
            <div className="flex flex-col gap-4 p-4 items-center md:flex-row">

                <img className='rounded-full h-24 w-24 object-cover border-[3px] border-gray-500' src={imgURL} alt="Avatar" />


                <div className="flex flex-col gap-3">
                    <div className="flex gap-2 justify-center md:justify-start">
                        <h1 className='text-base font-semibold '>{username}</h1>

                        {isCurrUser ?
                            (<button className='text-sm font-medium bg-slate-200 p-1 rounded-md hover:bg-slate-300' onClick={handleModal}>Edit Profile</button>)
                            :
                            (<button className='text-sm font-medium bg-slate-200 p-1 rounded-md hover:bg-slate-300'>Follow</button>)
                        }


                        <Modal visible={isVisible} closeModal={() => setIsVisible(!isVisible)}>
                            <ProfileEdit handleModal={handleModal} />

                        </Modal>

                    </div>

                    <div className="flex flex-row gap-2 justify-center md:justify-start">
                        <p className='text-sm font-medium'> {posts} posts</p>
                        <p className='text-sm font-medium'> {followers} followers</p>
                        <p className='text-sm font-medium'> {following} following </p>
                    </div>

                    <div className=''>
                        <p className='text-base font-medium text-wrap flex justify-center md:justify-start'>{bio}</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProfileHeader