import useFollowUnfollowUser from "../../hooks/useFollowUnfollowUser"
import useAuthStore from "../../store/useAuthStore";


const SuggestedUser = ({ user, setUser }) => {

    const { isUpdating, isFollowing, handleFollowUnfollowUser } = useFollowUnfollowUser(user.uid);
    const authUser = useAuthStore(state => state.user)

    const handleFollowUnfollow = async () => {
        await handleFollowUnfollowUser();
        setUser({
            ...user,
            followers: isFollowing ?
                user.followers.filter((follower) => follower.uid !== authUser.uid)
                : [...user.followers, authUser]

        })
    }

    return (
        <>
            <div className="md:w-30 flex justify-between p-2 sm:flex-col md:flex-row">
                <div className="flex gap-2">
                    <img className='rounded-full w-10 h-10 object-cover' src={user.profilePicUrl} alt="" />
                    <div className="p-1">
                        <p className="text-base font-medium"> {user.fullName} </p>
                        <p className=" text-[10px] font-medium "> {user.followers.length} followers </p>
                    </div>
                </div>

                {
                    authUser.uid !== user.uid
                    &&
                    (<button className=' text-[0.75rem] font-medium  text-gray-400 hover:text-black hover:cursor-pointer' onClick={handleFollowUnfollow}>
                        {isFollowing ? "UnFollow" : "Follow"}
                    </button>)
                }


            </div>

        </>
    )
}

export default SuggestedUser