import React from 'react'
import UserPost from '../userPost/UserPost'


const HomePage = () => {
    return (
        <>
            <div className='my-5'>
                <div className="flex ">

                    <div className="lg:mx-52">
                        <div className=" max-w-[500px] px-5 ">
                            <UserPost username={"Jay Thigale"} caption={"This is my first post!!!!"} />
                        </div>
                        <div className=" max-w-[500px] px-5 ">
                            <UserPost username={"Jay Thigale"} caption={"hiii"} />
                        </div>
                        <div className=" max-w-[500px] px-5 ">
                            <UserPost username={"Jay Thigale"} caption={"hiii"} />
                        </div>
                        <div className=" max-w-[500px] px-5 ">
                            <UserPost username={"Jay Thigale"} caption={"hiii"} />
                        </div>

                    </div>

                    <div className="hidden md:flex">Suggestions</div>

                </div>
            </div>
        </>
    )
}

export default HomePage