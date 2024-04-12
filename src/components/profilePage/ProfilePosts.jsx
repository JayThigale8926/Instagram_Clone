import React, { useState } from 'react'
import { CommentLogo, NotificationsLogo, UnlikeLogo } from '../../assets/constants'
import Modal from '../modal/Modal';
import Comment from '../comment/Comment';
import UserPostFooter from '../userPost/UserPostFooter';
import useUserProfileStore from '../../store/userProfileStore';
import Avatar from '../avatar/Avatar';

const ProfilePosts = ({ posts }) => {

    const [isNotLiked, setIsNotLiked] = useState(true);
    const [likes, setLikes] = useState(10);
    const [isVisible, setIsVisible] = useState(false);
    const userProfile = useUserProfileStore((state) => state.userProfile)

    const handleModal = () => {
        setIsVisible(!isVisible);
    }

    return (
        <>
            <div className="w-[250px]">
                <div className="">
                    <img className='w-[250px] h-[250px] object-cover rounded-md overflow-hidden transform transition duration-500 
                                hover:scale-110 hover:cursor-pointer '
                        onClick={handleModal}
                        src={posts.imageURL} alt="Post image" />
                </div>


                {/*----------------------Modal---------------------- */}
                <div className="">
                    <Modal visible={isVisible} closeModal={() => setIsVisible(!isVisible)}>

                        <div className="">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="flex flex-col">

                                    <div className='relative w-[300px] h-[250px] md:w-[400px] md:h-[600px] '>

                                        <img className=" w-[300px] h-[250px] p-2 md:w-[400px] md:h-[500px] object-contain" src={posts.imageURL} alt="Post image" />

                                        <div className="hidden md:flex">
                                            <div className="">
                                                <div className="flex p-3 gap-2 items-center">
                                                    <Avatar img={userProfile.profilePicUrl} />
                                                    <div className="">
                                                        <h1 className='text-xs font-medium text-black md:text-sm'>{userProfile.fullName}</h1>
                                                        <p className='text-[10px] text-gray-400 md:text-xs md:flex'>1d ago</p>
                                                    </div>
                                                    <div className="text-sm font-medium">{posts.caption}</div>

                                                </div>




                                            </div>
                                        </div>

                                        <div className="flex absolute top-0 right-0 ml-auto w-5 text-lg font-bold text-black hover:cursor-pointer p-1 text-right md:hidden"
                                            onClick={handleModal} >X
                                        </div>
                                    </div>
                                </div>

                                <div className='relative w-[300px] h-[300px] md:w-[400px] md:h-[550px] overflow-y-auto px-2'>
                                    <div className="hidden sticky top-0 right-0 ml-auto w-5 text-lg font-bold text-black hover:cursor-pointer p-1 text-right md:flex"
                                        onClick={handleModal} >X</div>

                                    <div className='flex flex-col'>

                                        {
                                            posts.comments.map((comment) => (
                                                <Comment comment={comment} key={comment.id} />
                                            ))
                                        }
                                    </div>

                                    <div className="sticky bottom-0 w-full">
                                        <UserPostFooter isProfilePost={true} post={posts} />
                                    </div>

                                </div>

                            </div>
                        </div>
                    </Modal>
                </div>

            </div>
        </>
    )
}

export default ProfilePosts