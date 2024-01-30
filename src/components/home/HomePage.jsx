import React from 'react'
import UserPost from '../userPost/UserPost'


const HomePage = () => {
    return (
        <>
            <div className='my-5 '>
                <div className="flex  max-w-[450px] ">


                    <div className="">
                        <UserPost username={"Sankalpa Gaidhane"} caption={"Main hu dukkar!!!!!"} />
                        <UserPost username={"Sankalpa Gaidhane"} caption={"Chota Don"} />
                        <UserPost username={"Sankalpa Gaidhane"} caption={"sdfasdfsdf"} />
                        <UserPost username={"Sankalpa Gaidhane"} caption={"sdfasdfsdf"} />

                    </div>

                    <div className="w-[200px] overflow-hidden hidden lg:flex">Suggestions</div>

                </div>
            </div>
        </>
    )
}

export default HomePage