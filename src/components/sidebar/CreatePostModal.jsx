import React, { useState } from 'react'
import usePreviewImg from '../../hooks/usePreviewImg'
import useAuthStore from "../../store/useAuthStore";
import usePostStore from "../../store/postStore";
import useUserProfileStore from "../../store/userProfileStore";
import { useLocation } from "react-router-dom";
import { addDoc, arrayUnion, collection, doc, updateDoc } from "firebase/firestore";
import { firestore, storage } from "../../firebase/firebase";
import { getDownloadURL, ref, uploadString } from "firebase/storage";


const CreatePostModal = () => {

    const { selectedFile, handleImgChange, setSelectedFile } = usePreviewImg();
    const [caption, setCaption] = useState("");
    const { isLoading, handleCreatePost } = useCreatePost();

    const handlePostCreation = async () => {
        try {
            await handleCreatePost(selectedFile, caption);
            setCaption("");
            setSelectedFile(null);
        } catch (error) {
            alert("Error in creating post");
        }
    };

    return (
        <div className="">
            <div className="flex flex-col w-30 text-xs md:w-96">

                <div className="w-full text-xs p-6">


                    <div className="">
                        <label className="text-base font-semibold text-gray-600 mb-5">Post <abbr title="required">*</abbr></label>

                        <div className="flex flex-col gap-2 md:gap-4">

                            <div className="flex h-32 items-center">

                                <label className="cursor-pointer">
                                    <div className="mr-4 flex-none border overflow-hidden">
                                        <img className="w-24 h-24 object-cover"
                                            src={selectedFile || "./avatarImg.png"}
                                            alt="Upload Image" required="required" />
                                    </div>
                                    <input type="file" className='hidden'
                                        // ref={imageRef}
                                        onChange={handleImgChange} />
                                </label>
                            </div>

                            <textarea placeholder="Enter caption" className="appearance-none block w-48 md:w-64 bg-grey-lighter text-grey-darker border border-grey-lighter  h-10 px-4" required="required" type="text"
                                value={caption}
                                onChange={(e) => setCaption(e.target.value)}
                            />

                            <div className="">
                                <button className='text-sm font-medium bg-slate-200 px-3 py-2 rounded-md hover:bg-slate-300'
                                    onClick={handlePostCreation}
                                >Post</button>
                            </div>
                        </div>
                    </div>




                </div>

            </div>
        </div>
    )
}

export default CreatePostModal


function useCreatePost() {
    const [isLoading, setIsLoading] = useState(false);
    const authUser = useAuthStore((state) => state.user);
    const createPost = usePostStore((state) => state.createPost);
    const addPost = useUserProfileStore((state) => state.addPost);
    const userProfile = useUserProfileStore((state) => state.userProfile);
    const { pathname } = useLocation();

    const handleCreatePost = async (selectedFile, caption) => {
        if (isLoading) return;
        if (!selectedFile) throw new Error("Please select an image");
        setIsLoading(true);
        const newPost = {
            caption: caption,
            likes: [],
            comments: [],
            createdAt: Date.now(),
            createdBy: authUser.uid,
        };

        try {
            const postDocRef = await addDoc(collection(firestore, "posts"), newPost);
            const userDocRef = doc(firestore, "users", authUser.uid);
            const imageRef = ref(storage, `posts/${postDocRef.id}`);

            await updateDoc(userDocRef, { posts: arrayUnion(postDocRef.id) });
            await uploadString(imageRef, selectedFile, "data_url");
            const downloadURL = await getDownloadURL(imageRef);

            await updateDoc(postDocRef, { imageURL: downloadURL });

            newPost.imageURL = downloadURL;

            if (userProfile.uid === authUser.uid) createPost({ ...newPost, id: postDocRef.id });

            if (pathname !== "/" && userProfile.uid === authUser.uid) addPost({ ...newPost, id: postDocRef.id });

            alert("Post added successfully");
        } catch (error) {
            alert(error);
        } finally {
            setIsLoading(false);
        }
    };

    return { isLoading, handleCreatePost };
}