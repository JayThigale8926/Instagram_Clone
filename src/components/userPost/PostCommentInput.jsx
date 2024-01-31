import React from 'react'

const PostCommentInput = () => {
    return (
        <>
            <div className="relative ">
                <div className="text-black">
                    <input className="w-full h-12 text-black text-sm outline-none border-b-2 border-gray-200 md:text-base" type="text" placeholder='Post comment...' />
                </div>
                <div className="">
                    <div className=" absolute top-2 right-2">
                        <button className='text-black text-sm font-medium p-1 px-3 rounded-md hover:bg-gray-200 md:text-base'>Post</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostCommentInput