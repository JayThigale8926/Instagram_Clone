import { auth } from "../firebase/firebase";
import { useSignOut } from 'react-firebase-hooks/auth';
import useAuthStore from "../store/useAuthStore";

const useLogOut = () => {
    const [signOut, error] = useSignOut(auth);
    const logoutUser = useAuthStore(state => state.logout);

    const handleLogOut = async () => {
        try {
            await signOut();
            localStorage.removeItem("user-info")
            logoutUser();
        }
        catch (error) {
            alert(`${error}`)
        }
    }

    return { handleLogOut, error }
}

export default useLogOut