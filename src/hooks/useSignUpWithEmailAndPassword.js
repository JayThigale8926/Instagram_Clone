import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { useState } from 'react';

const useSignUpWithEmailAndPassword = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const signUp = async (inputs) => {
        if (!inputs.email || !inputs.password || !inputs.fullName || !inputs.userName) {
            console.log("Enter all details")
            return
        }

        try {

            const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password);

            if (!newUser && error) {
                console.log(error)
                return
            }
            if (newUser) {
                const userDoc = {
                    uid: newUser.user.uid,
                    email: inputs.email,
                    fullName: inputs.fullName,
                    userName: inputs.userName,
                    bio: "",
                    profilePicUrl: "",
                    followers: [],
                    following: [],
                    posts: [],
                    createdAt: Date.now()
                }

                await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
                localStorage.setItem("user-info", JSON.stringify(userDoc));
            }

        } catch (e) {
            console.log(e)
        }

    }

    return { loading, error, signUp }

}

export default useSignUpWithEmailAndPassword