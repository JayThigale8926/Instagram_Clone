import { auth } from "../firebase/firebase";
import { useSignOut } from 'react-firebase-hooks/auth';
import useAuthStore from "../store/useAuthStore";
import { useNavigate } from "react-router-dom"

const useLogOut = () => {
    const [signOut, error] = useSignOut(auth);
    const logoutUser = useAuthStore(state => state.logout);
    const navigate = useNavigate();

    const handleLogOut = async () => {
        try {
            await signOut();
            localStorage.removeItem("user-info")
            logoutUser();
            navigate("/");
        }
        catch (error) {
            alert(`${error}`)
        }
    }

    return { handleLogOut, error }
}

export default useLogOut