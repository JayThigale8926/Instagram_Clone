import UserPost from '../userPost/UserPost'
import SuggestedUsers from '../suggestedUsers/SuggestedUsers'
import useGetSuggestedUser from '../../hooks/useGetSuggestedUser'
import useGetFeedPosts from '../../hooks/useGetFeedPost'

const HomePage = () => {

    const { suggestedUsers } = useGetSuggestedUser();
    const { isLoading, posts } = useGetFeedPosts();

    if (isLoading) {
        return null;
    }

    return (
        <>
            <div className='my-5'>
                <div className="flex ">

                    <div className="lg:mx-32">
                        <div className=" max-w-[500px] px-5 ">
                            {
                                posts.length === 0 && <BlankHome />
                            }
                            {!isLoading && posts.length > 0 && posts.map((post) =>
                                <ul key={post.id}>
                                    <UserPost post={post} />
                                </ul>
                            )}
                        </div>


                    </div>

                    <div className="hidden md:flex md:flex-col p-1">

                        <div className=''>
                            <div className="flex justify-between">
                                <p className='text-sm font-medium'>Suggested for you</p>
                                <p className='self-end text-sm font-medium hover:cursor-pointer'>See all</p>
                            </div>
                        </div>

                        {
                            suggestedUsers.map(user => (
                                <>
                                    <ul key={user.uid}>
                                        <SuggestedUsers user={user} />
                                    </ul>
                                </>

                            ))
                        }

                    </div>

                </div>
            </div>
        </>
    )
}

export default HomePage

const BlankHome = () => {
    return (
        <div className='max-w-[500px] px-5'>
            <h1 className='text-red-500 font-medium text-xl'>Looks like you don't have any friends. <br /> Let's make some new friends!!!  </h1>

        </div>
    )
}