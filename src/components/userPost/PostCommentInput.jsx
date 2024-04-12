import React, { useState } from 'react'
import usePostComment from '../../hooks/usePostComment'

const PostCommentInput = ({ post }) => {

    const [comment, setComment] = useState("")
    const { handlePostComment } = usePostComment();

    const handleAddComment = async () => {
        await handlePostComment(post.id, comment)
        setComment("");
    }

    return (
        <>
            <div className="">
                <div className="relative">
                    <div className="text-black">
                        <input className="w-full h-12 text-black text-xs outline-none border-b-2 border-gray-200 md:text-base" type="text" placeholder='Post comment...'
                            onChange={(e) => (setComment(e.target.value))} />
                    </div>
                    <div className="">
                        <div className=" absolute top-2 right-2">
                            <button className='text-black text-xs font-medium p-1 px-3 rounded-md hover:bg-gray-200 md:text-base' onClick={handleAddComment}>Post</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostCommentInput