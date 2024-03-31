import React, { useState } from 'react'
import { CommentLogo, NotificationsLogo, UnlikeLogo } from '../../assets/constants';
import { RiDeleteBin6Line } from "react-icons/ri";
import PostCommentInput from './PostCommentInput';
import useUserProfileStore from '../../store/userProfileStore';
import useAuthStore from '../../store/useAuthStore';
import usePostStore from '../../store/postStore';
import { deleteObject, ref } from 'firebase/storage';
import { firestore, storage } from '../../firebase/firebase';
import { arrayRemove, deleteDoc, doc, updateDoc } from 'firebase/firestore';


const UserPostFooter = ({ username, caption, isProfilePost, post }) => {

    const [isNotLiked, setIsNotLiked] = useState(true);
    const [likes, setLikes] = useState(10);
    const userProfile = useUserProfileStore((state) => state.userProfile);
    const authUser = useAuthStore((state) => state.user);
    const [isDeleting, setIsDeleting] = useState(false);
    const deletePost = usePostStore((state) => state.deletePost);
    const decrementPostsCount = useUserProfileStore((state) => state.deletePost);




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

    const handleDeletePost = async () => {
        if (!window.confirm("Are you sure you want to delete this post?")) return;
        if (isDeleting) return;

        try {
            const imageRef = ref(storage, `posts/${post.id}`);
            await deleteObject(imageRef);
            const userRef = doc(firestore, "users", authUser.uid);
            await deleteDoc(doc(firestore, "posts", post.id));

            await updateDoc(userRef, {
                posts: arrayRemove(post.id),
            });

            deletePost(post.id);
            decrementPostsCount(post.id);
            alert("Post deleted successfully");
        } catch (error) {
            alert("Error in deleting post");
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <>
            {
                isProfilePost ?
                    (
                        <div className="bg-white p-2">
                            <div className="flex gap-3">
                                <div className="hover:cursor-pointer" onClick={handleLike}>
                                    {isNotLiked ? (< NotificationsLogo />) : (<UnlikeLogo />)}
                                </div>

                                <div className="hover:cursor-pointer">
                                    <CommentLogo />
                                </div>
                                {
                                    authUser?.uid === userProfile.uid && (
                                        <RiDeleteBin6Line
                                            className='text-xl hover:text-rose-600'
                                            onClick={handleDeletePost}

                                        />
                                    )
                                }
                            </div>
                            <div className="">
                                <h1 className='text-black text-xs font-medium md:text-base '>{likes} likes</h1>
                            </div>

                            <div className="">
                                <PostCommentInput />
                            </div>

                        </div>
                    )
                    :
                    (
                        <>
                            <div className="">
                                <div className="flex gap-3">
                                    <div className="hover:cursor-pointer" onClick={handleLike}>
                                        {isNotLiked ? (< NotificationsLogo />) : (<UnlikeLogo />)}
                                    </div>

                                    <div className="hover:cursor-pointer">
                                        <CommentLogo />
                                    </div>

                                    <div className="hover:cursor-pointer">
                                        <RiDeleteBin6Line />
                                    </div>

                                </div>
                                <div className="">
                                    <h1 className='text-black text-xs font-medium md:text-base '>{likes} likes</h1>
                                </div>


                                <div className="text-black max-w-[400px] overflow-hidden flex gap-2 ">
                                    <h1 className='text-sm font-medium text-black hover:cursor-pointer md:text-lg'>{username}
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
        </>
    )
}

export default UserPostFooter