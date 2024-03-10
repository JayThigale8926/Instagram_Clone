import React, { useState } from 'react'
import useAuthStore from '../../store/useAuthStore'
import usePreviewImg from '../../hooks/usePreviewImg'
import useEditProfile from '../../hooks/useEditProfile'

const ProfileEdit = ({ handleModal }) => {

    const userProfileDetails = useAuthStore((state) => state.user)
    const { selectedFile, handleImgChange, setSelectedFile } = usePreviewImg();
    const { editProfile, isUpdating } = useEditProfile()

    const [inputs, setInputs] = useState({
        fullname: "",
        username: "",
        bio: ""
    })

    const handleModalClose = () => {
        handleModal();
    }

    const handleEditProfile = async () => {
        try {
            await editProfile(inputs, selectedFile)
            setSelectedFile(null);
            handleModal();
        }
        catch (error) {
            alert("Error while updating in ProfileEdit")
        }
    }

    return <>
        <div className="">


            <div className="w-60 flex flex-col items-center p-6 m-6 md:w-[500px]">
                <div className='flex p-2 mb-3 items-center '>
                    <div className="mr-4 flex-none rounded-full border overflow-hidden">
                        <img className="w-24 h-24 object-cover"
                            src={selectedFile || userProfileDetails.profilePicUrl}
                            alt="Avatar Upload" />
                    </div>
                    <label className="cursor-pointer ">
                        <span className="focus:outline-none text-white text-sm py-2 px-4 rounded-full bg-blue-400 hover:bg-blue-600 hover:shadow-lg">Browse</span>
                        <input type="file" className='hidden' onChange={handleImgChange} />
                    </label>

                </div>

                <div className="flex flex-col  h-56 w-52 text-xs md:w-72">

                    <div className=" w-full text-xs mb-4">
                        <label className="font-semibold text-gray-600">Fullname <abbr title="required">*</abbr></label>
                        <input placeholder="Enter fullname" className="appearance-none block w-52 md:w-64 bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" required="required" type="text"
                            value={inputs.fullname || userProfileDetails.fullName}
                            onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })} />
                    </div>

                    <div className=" w-full text-xs mb-4">
                        <label className="font-semibold text-gray-600">Username <abbr title="required">*</abbr></label>
                        <input placeholder="Enter username" className="appearance-none block w-52 md:w-64 bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" required="required" type="text"
                            value={inputs.username || userProfileDetails.userName}
                            onChange={(e) => setInputs({ ...inputs, username: e.target.value })} />
                    </div>

                    <div className=" w-full text-xs mb-4">
                        <label className="font-semibold text-gray-600" >Bio <abbr title="required">*</abbr></label>
                        <input placeholder="Enter bio" className="appearance-none block w-52 md:w-64 bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" required="required" type="text"
                            value={inputs.bio || userProfileDetails.bio}
                            onChange={(e) => setInputs({ ...inputs, bio: e.target.value })} />
                    </div>

                </div>


                <div className="mt-5 text-right flex gap-6">
                    <button className="mb-2  bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
                        onClick={handleModalClose}> Cancel </button>

                    <button className="mb-2  bg-blue-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg  hover:bg-blue-600"
                        onClick={handleEditProfile}>Save</button>
                </div>

            </div>



        </div>
    </>
}

export default ProfileEdit