import React from 'react'

const Avatar = ({ img }) => {
    return (
        <>
            <div className=''>
                <img className='h-[30px] w-[30px] md:h-[50px] md:w-[50px] rounded-full object-cover' src={img} alt="Avatar" />
            </div>
        </>
    )
}

export default Avatar