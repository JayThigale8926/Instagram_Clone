import { useEffect, useState } from "react"
import useAuthStore from "../store/useAuthStore"
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import useUserProfileStore from "../store/userProfileStore"


const useFollowUnfollowUser = (userId) => {
    const [isFollowing, setIsFollowing] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);
    const authUser = useAuthStore((state) => state.user)
    const setAuthUser = useAuthStore((state) => state.setUser)
    const { userProfile, setUserProfile } = useUserProfileStore();



    const handleFollowUnfollowUser = async () => {
        setIsUpdating(true);
        try {
            const currUser = doc(firestore, "users", authUser.uid);
            const userToFollowOrUnfollow = doc(firestore, "users", userId)

            //For Auth user
            await updateDoc(currUser,
                { following: isFollowing ? arrayRemove(userId) : arrayUnion(userId) });

            //For user to follow or unfollow
            await updateDoc(userToFollowOrUnfollow,
                { followers: isFollowing ? arrayRemove(authUser.uid) : arrayUnion(authUser.uid) });

            if (isFollowing) {
                setAuthUser({ ...authUser, following: authUser.following.filter((uid) => uid !== userId) })
                if (userProfile) {
                    setUserProfile({ ...userProfile, following: userProfile.following.filter((uid) => uid !== authUser.uid) })
                }

                localStorage.setItem(
                    "user-info",
                    JSON.stringify({
                        ...authUser,
                        following: authUser.following.filter((uid) => uid !== userId),
                    })
                );
                setIsFollowing(false);
            }
            else {
                // follow
                setAuthUser({
                    ...authUser,
                    following: [...authUser.following, userId],
                });

                if (userProfile) {
                    setUserProfile({
                        ...userProfile,
                        followers: [...userProfile.followers, authUser.uid],
                    });

                }
                localStorage.setItem(
                    "user-info",
                    JSON.stringify({
                        ...authUser,
                        following: [...authUser.following, userId],
                    })
                );
                setIsFollowing(true);
            }

        }
        catch (error) {
            alert("Error while following user")

        }
        finally {
            setIsUpdating(false);
        }
    }

    useEffect(() => {
        if (authUser) {
            const isFollowing = authUser.following.includes(userId)
            setIsFollowing(isFollowing);
        }
    }, [userId])

    return { isUpdating, isFollowing, handleFollowUnfollowUser }
}

export default useFollowUnfollowUser