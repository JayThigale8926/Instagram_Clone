import { collection, getDocs, query, where } from 'firebase/firestore';
import { useState } from 'react'
import { firestore } from '../firebase/firebase';

const useSearchUser = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null)

    const getUserByProfile = async (username) => {

        try {

            const q = query(collection(firestore, "users"), where("userName", "==", username));
            const querySnapshot = await getDocs(q);

            if (querySnapshot.empty) {
                return alert("User not found")
            }
            querySnapshot.forEach((doc) => { setUser(doc.data()) })

        }
        catch (error) {
            alert(error)
        }
        finally {
            setIsLoading(false)
        }
    }

    return { isLoading, getUserByProfile, user, setUser }
}

export default useSearchUser