import React, { useState } from 'react'
import useSignUpWithEmailAndPassword from '../../hooks/useSignUpWithEmailAndPassword';
import { FiEyeOff } from "react-icons/fi";
import { FiEye } from "react-icons/fi";

const Signup = () => {

    const [isLogin, setIsLogin] = useState(true);
    const [inputs, setInputs] = useState({
        email: "",
        userName: "",
        fullName: "",
        password: ""
    });

    const [showPassword, setShowPassword] = useState(false);
    const { loading, error, signUp } = useSignUpWithEmailAndPassword();

    return <>

        <img className='' src="./logo.png" alt="" />

        <input className='bg-transparent h-10 w-[280px] mb-3 rounded-md px-5 py-2 border-2 border-gray-400 focus:outline-none focus:border-blue-400 
                dark:border-gray-700 dark:text-gray-400 dark:focus:border-blue-400' type="text"
            placeholder='Email'
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
        />

        <input className='bg-transparent h-10 w-[280px] mb-3 rounded-md px-5 py-2 border-2 border-gray-400 focus:outline-none focus:border-blue-400 
                dark:border-gray-700 dark:text-gray-400 dark:focus:border-blue-400' type="text" placeholder='Username'
            value={inputs.userName}
            onChange={(e) => setInputs({ ...inputs, userName: e.target.value })}
        />
        <input className='bg-transparent h-10 w-[280px] mb-3 rounded-md px-5 py-2 border-2 border-gray-400 focus:outline-none focus:border-blue-400 
                dark:border-gray-700 dark:text-gray-400 dark:focus:border-blue-400' type="text" placeholder='Full name'
            value={inputs.fullName}
            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
        />

        <div className="relative">

            <input className='bg-transparent h-10 w-[280px] mb-3 rounded-md px-5 py-2 border-2 border-gray-400 focus:outline-none focus:border-blue-400 
                dark:border-gray-700 dark:text-gray-400 dark:focus:border-blue-400'
                type={showPassword ? ("text") : ("password")} placeholder='Password'
                value={inputs.password}
                onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            />

            <div className='absolute p-2 top-1 right-4 hover:cursor-pointer'
                onClick={() => setShowPassword(!showPassword)}>
                {
                    showPassword ? (<FiEye />) : (<FiEyeOff />)
                }

            </div>
        </div>


        {isLogin ? "" : <input className='bg-transparent h-10 w-[280px] mb-3 rounded-md px-5 py-2 border-2 border-gray-400 focus:outline-none focus:border-blue-400 
                                    dark:border-gray-700 dark:text-gray-400 dark:focus:border-blue-400' type="password" placeholder='Confirm Password'
            value={inputs.confirmPassword}
            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
        />
        }

        <button className='h-10 w-[280px] mb-3 rounded-md px-5 py-2 bg-blue-400 text-lg font-semibold text-white hover:bg-blue-500 duration-100' onClick={() => signUp(inputs)}> Sign up </button>

    </>
}

export default Signup