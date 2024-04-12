import { doc, getDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { firestore } from '../firebase/firebase'

const useGetUserProfileById = (userId) => {

    const [userProfile, setUserProfile] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getUserProfile = async () => {
            setIsLoading(true)
            try {
                const userRef = await getDoc(doc(firestore, "users", userId));
                if (userRef.exists()) {
                    setUserProfile(userRef.data())
                }
            } catch (error) {
                alert("Cannot get profile picture of user cmt")
            }
            finally {
                setIsLoading(false)
            }
        }
        getUserProfile();
    }, [setUserProfile, userId])



    return { isLoading, userProfile, setUserProfile }

}

export default useGetUserProfileById