import React, { useEffect } from 'react'
import UserPostHeader from './UserPostHeader'
import UserPostFooter from './UserPostFooter'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useState } from 'react'

const UserPost = ({ username, caption, img }) => {

    const [isloading, setIsLoading] = useState(true);

    useEffect(() => {

        setTimeout(() => (setIsLoading(!isloading)), 1500)

    }, [])

    return (
        <>
            {
                isloading ?
                    (
                        <div className="my-5 mb-10" >

                            <div className="flex items-center gap-2 mb-3">
                                <Skeleton className='h-[30px] w-[30px] md:h-[50px] md:w-[50px] rounded-full' />
                                <Skeleton className='w-28 md:w-36' />
                            </div>

                            <div className='mb-3'>
                                <Skeleton className='rounded-md h-72 w-56 md:h-96 md:w-72' />
                            </div>

                            <div className=''>
                                <Skeleton className='w-10 md:w-20' />
                                <Skeleton className='w-16 md:w-32' />
                                <Skeleton className='w-28 md:w-48' />
                            </div>

                        </div>
                    )
                    :
                    (
                        <div className="my-5 mb-10" >
                            <UserPostHeader username={username} />
                            <div className='mb-3'>
                                <img className='rounded-md ' src={img} alt="" />
                            </div>
                            <UserPostFooter username={username} caption={caption} />

                        </div>
                    )
            }


        </>
    )
}

export default UserPost



{/* <div className="my-5 mb-10" >
                <UserPostHeader username={username} />
                <div className='mb-3'>
                    <img className='rounded-md ' src={img} alt="" />
                </div>
                <UserPostFooter username={username} caption={caption} />

            </div> */}