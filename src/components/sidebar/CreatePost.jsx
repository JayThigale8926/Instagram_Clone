import React from 'react'
import { RiAddBoxLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const CreatePost = () => {
    return <>
        <Link to={"/home"} className="w-[10px] lg:w-56 flex justify-center lg:justify-start gap-2 my-3  p-2 hover:bg-gray-200 hover:rounded-lg">
            <div className='items-center flex justify-center md:text-3xl'> <RiAddBoxLine /> </div>
            <div className='text-base font-medium hidden lg:flex '> Create </div>
        </Link>
    </>
}

export default CreatePost