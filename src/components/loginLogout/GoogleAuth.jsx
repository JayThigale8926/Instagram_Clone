import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../../firebase/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import useAuthStore from '../../store/useAuthStore';

const GoogleAuth = ({ isLogin }) => {

    const [signInWithGoogle, error] = useSignInWithGoogle(auth);
    const loginUser = useAuthStore((state) => state.login)

    const handleGoogleAuth = async () => {

        try {
            const newUser = await signInWithGoogle();

            if (!newUser && error) {
                alert(`Error : ${error}`)
                return
            }

            //Login
            const docRef = doc(firestore, "users", newUser.user.uid);
            const userSnap = await getDoc(docRef);
            if (userSnap.exists()) {
                const userDoc = userSnap.data();
                localStorage.setItem("user-info", JSON.stringify(userDoc));
                loginUser(userDoc);
            }

            //SignUp
            else {
                const userDoc = {
                    uid: newUser.user.uid,
                    email: newUser.user.email,
                    fullName: newUser.user.displayName,
                    userName: newUser.user.email.split("@")[0],
                    bio: "",
                    profilePicUrl: newUser.user.photoURL,
                    followers: [],
                    following: [],
                    posts: [],
                    createdAt: Date.now()
                }

                await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
                localStorage.setItem("user-info", JSON.stringify(userDoc));
                loginUser(userDoc);
            }

        }
        catch (error) {
            alert(`Error : ${error}`)

        }


    }

    return <>
        <div className="flex items-center gap-2 my-5 hover:cursor-pointer" onClick={handleGoogleAuth}>
            <img className='h-5 w-5' src="./google.png" alt="" />
            <p className='text-blue-600'> {isLogin ? ("Log in with Google") : ("Signup with Google")} </p>
        </div>
    </>
}

export default GoogleAuth