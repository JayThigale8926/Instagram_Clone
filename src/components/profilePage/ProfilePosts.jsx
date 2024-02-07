import React, { useState } from 'react'
import { CommentLogo, NotificationsLogo, UnlikeLogo } from '../../assets/constants'
import Modal from '../modal/Modal';
import Comment from '../comment/Comment';
import PostCommentInput from '../userPost/PostCommentInput';

const ProfilePosts = () => {

    const [isNotLiked, setIsNotLiked] = useState(true);
    const [likes, setLikes] = useState(10);
    const [isVisible, setIsVisible] = useState(false);


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

    const handleModal = () => {
        setIsVisible(!isVisible);
    }

    return (
        <>
            <div className="w-[250px]">
                <div className="">
                    <img className='w-[250px] h-[250px] object-cover rounded-md overflow-hidden  hover:cursor-pointer' onClick={handleModal} src="./img1.png" alt="" />
                </div>


                {/*----------------------Modal---------------------- */}
                <div className="">
                    <Modal visible={isVisible} closeModal={() => setIsVisible(!isVisible)}>

                        <div className="">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="flex flex-col">

                                    <div className='relative w-[300px] h-[250px] md:w-[400px] md:h-[600px] '>
                                        <img className=" w-[300px] h-[250px] p-2 md:w-[400px] md:h-[500px] object-contain" src="./img1.png" alt="" />

                                        <div className="flex absolute top-0 right-0 ml-auto w-5 text-lg font-bold text-black hover:cursor-pointer p-1 text-right md:hidden"
                                            onClick={handleModal} >X
                                        </div>
                                    </div>
                                </div>

                                <div className='relative w-[300px] h-[300px] md:w-[400px] md:h-[550px] overflow-y-auto px-2'>
                                    <div className="hidden sticky top-0 right-0 ml-auto w-5 text-lg font-bold text-black hover:cursor-pointer p-1 text-right md:flex"
                                        onClick={handleModal} >X</div>

                                    <div className='flex flex-col'>
                                        <Comment img={"./img1.png"} userName={"Jay8926"} createdAt={"2d ago"} userComment={"Nice Pic !!!"} />
                                        <Comment img={"./img2.png"} userName={"asd"} createdAt={"3d ago"} userComment={"Nice Pic !!!"} />
                                        <Comment img={"./img2.png"} userName={"asd"} createdAt={"3d ago"} userComment={"Nice Pic !!!"} />
                                        <Comment img={"./img2.png"} userName={"asd"} createdAt={"3d ago"} userComment={"Nice Pic !!!"} />
                                        <Comment img={"./img2.png"} userName={"asd"} createdAt={"3d ago"} userComment={"Nice Pic !!!"} />
                                        <Comment img={"./img2.png"} userName={"asd"} createdAt={"3d ago"} userComment={"Nice Pic !!!"} />
                                        <Comment img={"./img2.png"} userName={"asd"} createdAt={"3d ago"} userComment={"Nice Pic !!!"} />
                                        <Comment img={"./img2.png"} userName={"asd"} createdAt={"3d ago"} userComment={"Nice Pic !!!"} />
                                        <Comment img={"./img2.png"} userName={"asd"} createdAt={"3d ago"} userComment={"Nice Pic !!!"} />
                                        <Comment img={"./img2.png"} userName={"asd"} createdAt={"3d ago"} userComment={"Nice Pic !!!"} />
                                        <Comment img={"./img2.png"} userName={"asd"} createdAt={"3d ago"} userComment={"Nice Pic !!!"} />
                                        <Comment img={"./img2.png"} userName={"asd"} createdAt={"3d ago"} userComment={"Nice Pic !!!"} />
                                    </div>

                                    <div className="sticky bottom-0 w-full">
                                        <PostCommentInput />
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

{/* <div className="flex gap-3 p-2">
                                            <div className="hover:cursor-pointer" onClick={handleLike}>
                                                {isNotLiked ? (< NotificationsLogo />) : (<UnlikeLogo />)}
                                                <h1 className='text-black text-xs font-medium md:text-base '>{likes} likes</h1>
                                            </div>

                                            <div className="hover:cursor-pointer" >
                                                <CommentLogo />
                                            </div>

                                        </div> */}



//     <div className='relative w-[300px] h-[250px] md:h-[500px] '>
//     <img className=" w-[300px] h-[250px] p-2 md:h-[400px] object-contain" src="./img1.png" alt="" />

//     <div className="flex absolute top-0 right-0 ml-auto w-5 text-lg font-bold text-black hover:cursor-pointer p-1 text-right md:hidden"
//         onClick={handleModal} >X
//     </div>
// </div>