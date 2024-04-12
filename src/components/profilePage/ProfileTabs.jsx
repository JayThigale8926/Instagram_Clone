import { GrGrid } from "react-icons/gr";
import { FaRegBookmark } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";

const ProfileTabs = () => {
    return (
        <>
            <div className="w-full border-t-2 border-gray-400">
                <div className=" flex gap-4 justify-center">
                    <button className='text-black flex items-center gap-1 border-t-2 border-gray-500'> <GrGrid /> <span className=''>Posts</span> </button>
                    <button className='text-black flex items-center gap-1'> <FaRegBookmark /> <span className=''>Saved</span> </button>
                    <button className='text-black flex items-center gap-1'> <FaRegHeart /> <span className="">Likes</span> </button>
                </div>
            </div>
        </>
    )
}

export default ProfileTabs