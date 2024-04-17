import { arrayUnion, doc, updateDoc } from 'firebase/firestore'
import useAuthStore from '../store/useAuthStore'
import { firestore } from '../firebase/firebase'
import usePostStore from "../store/postStore"
import { useState } from 'react'

const usePostComment = () => {

    const authUser = useAuthStore((state) => state.user)
    const addComment = usePostStore((state) => state.addComment)

    const [isLoading, setIsLoading] = useState(false);

    const handlePostComment = async (postId, comment) => {
        setIsLoading(true);
        const newComment = {
            comment,
            createdAt: Date.now(),
            createdBy: authUser.uid,
            postId
        }

        try {
            await updateDoc(doc(firestore, "posts", postId), {
                comments: arrayUnion(newComment)
            });
            addComment(postId, newComment)

        }
        catch (error) {
            alert("Unable to post comment");
        }
        finally {
            setIsLoading(false)
        }

    }

    return { handlePostComment, isLoading }
}

export default usePostComment