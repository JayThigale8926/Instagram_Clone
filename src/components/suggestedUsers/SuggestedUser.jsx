import React from 'react'
import Avatar from '../avatar/Avatar'

const SuggestedUser = ({ name, followers, img }) => {



    return (
        <>
            <div className="md:w-30 flex justify-between p-2 sm:flex-col md:flex-row">

                <div className="flex gap-2">
                    <img className='rounded-full w-10 h-10 object-cover' src={img} alt="" />
                    <div className="p-1">
                        <p className="text-base font-medium"> {name} </p>
                        <p className=" text-[10px] font-medium "> {followers} followers </p>
                    </div>
                </div>

                <button className=' text-[12px] font-medium  text-gray-400 hover:text-black hover:cursor-pointer'>Follow</button>

            </div>

        </>
    )
}

export default SuggestedUser