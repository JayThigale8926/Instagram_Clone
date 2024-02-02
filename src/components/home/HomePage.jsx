import React from 'react'
import UserPost from '../userPost/UserPost'
import SuggestedUsers from '../suggestedUsers/SuggestedUsers'


const HomePage = () => {
    return (
        <>
            <div className='my-5'>
                <div className="flex ">

                    <div className="lg:mx-32">
                        <div className=" max-w-[500px] px-5 ">
                            <UserPost username={"Jay Thigale"} caption={"This is my first post!!!!"} img={"./img1.png"} />
                        </div>
                        <div className=" max-w-[500px] px-5 ">
                            <UserPost username={"Jay Thigale"} caption={"hiii"} img={"./img2.png"} />
                        </div>
                        <div className=" max-w-[500px] px-5 ">
                            <UserPost username={"Jay Thigale"} caption={"hiii"} img={"./img3.png"} />
                        </div>
                        <div className=" max-w-[500px] px-5 ">
                            <UserPost username={"Jay Thigale"} caption={"hiii"} img={"./img4.png"} />
                        </div>

                    </div>

                    <div className="hidden md:flex md:flex-col p-1">

                        <div className=''>
                            <div className="flex justify-between">
                                <p className='text-sm font-medium'>Suggested for you</p>
                                <p className='self-end text-sm font-medium hover:cursor-pointer'>See all</p>
                            </div>
                        </div>

                        <SuggestedUsers followers={1000} name={"Jay Thigale"} img={"./img3.png"} />
                        <SuggestedUsers followers={1000} name={"Sankalpa Thigale"} img={"./img1.png"} />
                        <SuggestedUsers followers={1000} name={"Champaklal"} img={"./img4.png"} />
                    </div>

                </div>
            </div>
        </>
    )
}

export default HomePage