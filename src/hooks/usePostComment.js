import { arrayUnion, doc, updateDoc } from 'firebase/firestore'
import useAuthStore from '../store/useAuthStore'
import { firestore } from '../firebase/firebase'
import usePostStore from "../store/postStore"

const usePostComment = () => {

    const authUser = useAuthStore((state) => state.user)
    const addComment = usePostStore((state) => state.addComment)

    const handlePostComment = async (postId, comment) => {

        const newComment = {
            comment,
            createdAt: Date.now(),
            createdBy: authUser.uid,
            postId
        }

        try {
            await updateDoc(doc(firestore, "posts", postId), {
                comments: arrayUnion(newComment),
            });
            addComment(postId, comment)
        }
        catch (error) {
            alert("Unable to post comment");
        }

    }

    return { handlePostComment }
}

export default usePostComment