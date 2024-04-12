import { useState } from "react";
import useAuthStore from "../store/useAuthStore";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

const useLikePost = (post) => {
    // console.log(post)
    const [isUpdating, setIsUpdating] = useState(false);
    const authUser = useAuthStore((state) => state.user);
    const [likes, setLikes] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(post.likes.includes(authUser?.uid));


    const handleLikePost = async () => {
        if (isUpdating) return;
        if (!authUser) return alert("You must be logged in to like a post");
        setIsUpdating(true);

        try {
            const postRef = doc(firestore, "posts", post.id);
            await updateDoc(postRef, {
                likes: isLiked ? arrayRemove(authUser.uid) : arrayUnion(authUser.uid),
            });

            setIsLiked(!isLiked);
            isLiked ? setLikes(likes - 1) : setLikes(likes + 1);
        } catch (error) {
            alert("Cannot like post");
        } finally {
            setIsUpdating(false);
        }
    };

    return { isLiked, likes, handleLikePost };
};

export default useLikePost;