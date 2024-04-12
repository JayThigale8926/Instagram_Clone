import React from 'react'
import UserPost from '../userPost/UserPost'
import SuggestedUsers from '../suggestedUsers/SuggestedUsers'
import useGetSuggestedUser from '../../hooks/useGetSuggestedUser'
import useGetFeedPosts from '../../hooks/useGetFeedPost'
import useGetUserProfileById from '../../hooks/useGetUserProfileById'


const HomePage = () => {

    const { suggestedUsers } = useGetSuggestedUser();
    const { isLoading, posts } = useGetFeedPosts();

    // posts.map(id => console.log(id.createdBy))



    if (isLoading) {
        return null;
    }

    return (
        <>
            <div className='my-5'>
                <div className="flex ">

                    <div className="lg:mx-32">
                        <div className=" max-w-[500px] px-5 ">
                            {!isLoading && posts.length > 0 && posts.map((post) => <UserPost key={post.id} post={post} />)}
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
                            suggestedUsers.map(user => (<SuggestedUsers user={user} key={user.uid} />))
                        }

                    </div>

                </div>
            </div>
        </>
    )
}

export default HomePage