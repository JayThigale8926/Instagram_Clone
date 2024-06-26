import { useState } from "react";
import useAuthStore from "../store/useAuthStore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { firestore, storage } from "../firebase/firebase";
import { doc, updateDoc } from "firebase/firestore";
import useUserProfileStore from "../store/userProfileStore";

const useEditProfile = () => {
    const [isUpdating, setIsUpdating] = useState(false);

    const authUser = useAuthStore((state) => state.user);
    const setAuthUser = useAuthStore((state) => state.setUser);
    const setUserProfile = useUserProfileStore((state) => state.setUserProfile);
    // console.log("Auth user : " + authUser.posts)


    const editProfile = async (inputs, selectedFile) => {
        if (isUpdating || !authUser) return;
        setIsUpdating(true);

        const storageRef = ref(storage, `profilePics/${authUser.uid}`);
        const userDocRef = doc(firestore, "users", authUser.uid);

        let URL = "";
        try {
            if (selectedFile) {
                await uploadString(storageRef, selectedFile, "data_url");
                URL = await getDownloadURL(ref(storage, `profilePics/${authUser.uid}`));
            }

            const updatedUser = {
                ...authUser,
                fullName: inputs.fullname || authUser.fullName,
                userName: inputs.username || authUser.username,
                bio: inputs.bio || authUser.bio,
                profilePicUrl: URL || authUser.profilePicUrl,
            };

            await updateDoc(userDocRef, updatedUser);
            localStorage.setItem("user-info", JSON.stringify(updatedUser));
            setAuthUser(updatedUser);
            setUserProfile(updatedUser);
            // console.log("updated user : " + updatedUser.posts)
            alert("Profile updated successfully");
        }
        catch (error) {
            alert("Error while updating profile");
        }
    };

    return { editProfile, isUpdating };
};

export default useEditProfile;