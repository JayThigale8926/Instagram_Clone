import { useEffect, useState } from "react"
import useUserProfileStore from "../store/userProfileStore"
import { collection, getDocs, query, where } from "firebase/firestore"
import { firestore } from "../firebase/firebase"


const useGetUserProfileByUsername = (username) => {

    const { userProfile, setUserProfile } = useUserProfileStore()
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getUserProfile = async () => {
            try {

                const q = query(collection(firestore, "users"), where("userName", "==", username));
                const userSnapshot = await getDocs(q);

                if (userSnapshot.empty) {
                    setUserProfile(null);
                    return
                }

                let userDoc;
                userSnapshot.forEach((doc) => {
                    userDoc = doc.data();
                });
                setUserProfile(userDoc);


            }
            catch (error) {
                return console.log(error)
            }
            finally {
                setIsLoading(false)
            }
        }
        getUserProfile();
    }, [setUserProfile, username])

    return { userProfile, isLoading }
}

export default useGetUserProfileByUsername