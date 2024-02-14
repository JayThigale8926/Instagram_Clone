import React, { useState } from 'react'
import { FiEyeOff } from "react-icons/fi";
import { FiEye } from "react-icons/fi";

const Login = () => {

    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    });

    const [showPassword, setShowPassword] = useState(false);

    return <>
        <img className='' src="./logo.png" alt="" />


        <input className='bg-transparent h-10 w-[280px] mb-3 rounded-md px-5 py-2 border-2 border-gray-400 focus:outline-none focus:border-blue-400 
                dark:border-gray-700 dark:text-gray-400 dark:focus:border-blue-400' type="text"
            placeholder='Email'
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
        />

        <div className='relative'>

            <input className=' bg-transparent h-10 w-[280px] mb-3 rounded-md px-5 py-2 border-2 border-gray-400 focus:outline-none focus:border-blue-400 
                dark:border-gray-700 dark:text-gray-400 dark:focus:border-blue-400'
                type={showPassword ? ("text") : ("password")} placeholder='Password'
                value={inputs.password}
                onChange={(e) => setInputs({ ...inputs, password: e.target.value })} />

            <div className='absolute p-2 top-1 right-4 hover:cursor-pointer'
                onClick={() => setShowPassword(!showPassword)}>
                {
                    showPassword ? (<FiEye />) : (<FiEyeOff />)
                }

            </div>
        </div>


        <button className='h-10 w-[280px] mb-3 rounded-md px-5 py-2 bg-blue-400 text-lg font-semibold text-white hover:bg-blue-500 duration-100'>Log in</button>


        <div className="flex items-center">
            <div className="h-0 w-[110px] border border-gray-700"></div>
            <h1 className="p-2 dark:text-gray-400">OR</h1>
            <div className="h-0 w-[110px] border border-gray-700"></div>
        </div>
    </>
}

export default Login