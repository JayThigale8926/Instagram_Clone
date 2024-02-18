import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase';
import { firestore } from '../firebase/firebase';
import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore';
import { useState } from 'react';
import useAuthStore from '../store/useAuthStore';

const useSignUpWithEmailAndPassword = () => {
    const loginUser = useAuthStore(state => state.login)

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const signUp = async (inputs) => {
        if (!inputs.email || !inputs.password || !inputs.fullName || !inputs.userName) {
            alert("Enter all details")
            return
        }

        const usersRef = collection(firestore, "users");
        const q = query(usersRef, where("userName", "==", inputs.userName));
        const querySnapShot = await getDocs(q);

        if (!querySnapShot.empty) {
            alert("User already exists");
            return;
        }

        try {

            const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password);

            if (!newUser && error) {
                alert(`${error}`)
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
                loginUser(userDoc);

            }

        } catch (e) {
            console.log(e)
        }

    }

    return { loading, error, signUp }

}

export default useSignUpWithEmailAndPassword