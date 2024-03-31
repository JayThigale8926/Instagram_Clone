import React from 'react'
import ProfilePosts from './ProfilePosts'
import useGetUserPosts from '../../hooks/useGetUserPosts';

const ProfilePost = () => {

    const { isLoading, posts } = useGetUserPosts();
    const noPostsFound = !isLoading && posts.length === 0;
    if (noPostsFound) return <NoPostsFound />;

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center ">

                {!isLoading && (
                    <>
                        {posts.map((post) => (

                            <ProfilePosts posts={post} key={post.id} />

                        ))}
                    </>
                )}

            </div>
        </>
    )
}

export default ProfilePost

const NoPostsFound = () => {
    return (
        <div className='flex flex-col text-center mx-auto mt-10'>
            <h1 className='text-2xl'>No Posts Found🤔</h1>
        </div>
    );
};