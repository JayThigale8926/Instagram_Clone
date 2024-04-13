import { useState } from 'react'
import { CommentLogo, NotificationsLogo, UnlikeLogo } from '../../assets/constants';
import { RiDeleteBin6Line } from "react-icons/ri";
import PostCommentInput from './PostCommentInput';
import useUserProfileStore from '../../store/userProfileStore';
import useAuthStore from '../../store/useAuthStore';
import usePostStore from '../../store/postStore';
import { deleteObject, ref } from 'firebase/storage';
import { firestore, storage } from '../../firebase/firebase';
import { arrayRemove, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import useLikePost from '../../hooks/useLikePost';
import Modal from '../modal/Modal';
import { timeAgo } from '../../utils/timeAgo';
import useGetUserProfileById from '../../hooks/useGetUserProfileById';
import Avatar from '../avatar/Avatar';
import Comment from '../comment/Comment';


const UserPostFooter = ({ username, caption, isProfilePost, post }) => {

    const userProfilee = useUserProfileStore((state) => state.userProfile);
    const authUser = useAuthStore((state) => state.user);
    const [isDeleting, setIsDeleting] = useState(false);
    const deletePost = usePostStore((state) => state.deletePost);
    const decrementPostsCount = useUserProfileStore((state) => state.deletePost);
    const { handleLikePost, isLiked, likes } = useLikePost(post);
    const { userProfile } = useGetUserProfileById(post.createdBy)

    const [isVisible, setIsVisible] = useState(false);

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

    const handleModal = () => {
        setIsVisible(!isVisible);
    }

    return (
        <>
            {
                isProfilePost ?
                    (
                        <div className="bg-white p-2">
                            <div className="flex gap-3">
                                <div className="hover:cursor-pointer" onClick={handleLikePost}>
                                    {!isLiked ? (< NotificationsLogo />) : (<UnlikeLogo />)}
                                </div>

                                <div className="hover:cursor-pointer" onClick={handleModal}>
                                    <CommentLogo />
                                </div>
                                {
                                    authUser?.uid === userProfilee.uid && (
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



                        </div>
                    )
                    :
                    (
                        <>
                            <div className="">
                                <div className="flex gap-3">
                                    <div className="hover:cursor-pointer" onClick={handleLikePost} >
                                        {!isLiked ? (< NotificationsLogo />) : (<UnlikeLogo />)}
                                    </div>

                                    <div className="hover:cursor-pointer" onClick={handleModal}>
                                        <CommentLogo />
                                    </div>


                                </div>
                                <div className="">
                                    <h1 className='text-black text-xs font-medium md:text-base '>
                                        {likes} likes</h1>
                                </div>


                                <div className="text-black max-w-[400px] overflow-hidden flex gap-2 ">
                                    <h1 className='text-sm font-medium text-black hover:cursor-pointer md:text-lg'>{username}
                                    </h1>
                                    <h4 className="text-xs font-normal text-black flex items-center md:text-base">{caption}</h4>
                                </div>

                                <div className="">
                                    <h2 className='text-xs text-gray-400 hover:cursor-pointer md:text-base' onClick={handleModal}>View all comments...</h2>
                                </div>


                            </div>
                        </>
                    )



            }

            <div className="">
                <Modal visible={isVisible} closeModal={() => setIsVisible(!isVisible)}>

                    <div className="">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="flex flex-col">

                                <div className='relative w-[300px] h-[250px] md:w-[400px] md:h-[600px] '>

                                    <img className=" w-[300px] h-[250px] p-2 md:w-[400px] md:h-[500px] object-contain rounded-md" src={post.imageURL} alt="Post image" />

                                    <div className="hidden md:flex">
                                        <div className="flex gap-5 items-center">
                                            <div className="flex p-3 gap-2 items-center">
                                                <Avatar img={userProfile?.profilePicUrl} />
                                                <div className="">
                                                    <h1 className='text-xs font-medium text-black md:text-sm'>{userProfile?.fullName}</h1>
                                                    <p className='text-[10px] text-gray-600 md:text-xs md:flex'>{timeAgo(post.createdAt)}</p>
                                                </div>

                                            </div>

                                            <div className="max-w-48">
                                                <h1 className='text-xs font-medium'>{post.caption}</h1>
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

                                        post.comments.map((comment, id) => (<>
                                            <ol key={id}>
                                                <Comment comment={comment} />
                                            </ol>
                                        </>

                                        ))
                                    }
                                </div>

                                <div className="sticky bottom-0 w-full">
                                    <PostCommentInput post={post} />
                                </div>

                            </div>

                        </div>
                    </div>
                </Modal>
            </div>
        </>
    )
}

export default UserPostFooter