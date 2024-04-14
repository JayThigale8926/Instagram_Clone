import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../firebase/firebase';
import useAuthStore from '../store/useAuthStore';
import { doc, getDoc } from 'firebase/firestore';

const useLogIn = () => {

    const [
        signInWithEmailAndPassword,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const loginUser = useAuthStore((state) => state.login);

    const handleLogin = async (inputs) => {



        if (!inputs.email || !inputs.password) {
            alert("Enter all details")
            return
        }

        try {
            const userCred = await signInWithEmailAndPassword(inputs.email, inputs.password);
            if (userCred) {
                const docRef = doc(firestore, "users", userCred.user.uid);
                const docSnap = await getDoc(docRef);
                localStorage.setItem("user-info", JSON.stringify(docSnap.data()))
                loginUser(docSnap.data())

            }
            else {
                alert("Invalid Email Or Password")
            }
        }
        catch (error) {
            alert(`Error : ${error}`);
        }
    }

    return { handleLogin }
}

export default useLogIn