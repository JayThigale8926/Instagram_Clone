import React, { useState } from 'react'
import Login from './Login';
import GoogleAuth from './GoogleAuth';
import Signup from './Signup';


const LoginLogoutPage = () => {

    const [isLogin, setIsLogin] = useState(true);



    return (
        <>
            <div className="h-screen flex items-center justify-center ">

                <div className="h-[610px] flex">


                    <div className="hidden md:flex">
                        <img src="./auth.png" alt="" />
                    </div>

                    <div className="flex flex-col w-[310px] mt-5">
                        <div className="w-[310px] flex flex-col items-center  border-2 border-gray-700 rounded-md">
                            {/* <img className='' src="./logo.png" alt="" />


                            <input className='bg-transparent h-10 w-[280px] mb-3 rounded-md px-5 py-2 border-2 border-gray-400 focus:outline-none focus:border-blue-400 
                                dark:border-gray-700 dark:text-gray-400 dark:focus:border-blue-400' type="text"
                                placeholder='Email'
                                value={inputs.email}
                                onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                            />

                            <input className='bg-transparent h-10 w-[280px] mb-3 rounded-md px-5 py-2 border-2 border-gray-400 focus:outline-none focus:border-blue-400 
                                dark:border-gray-700 dark:text-gray-400 dark:focus:border-blue-400' type="password" placeholder='Password'
                                value={inputs.password}
                                onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                            /> */}
                            {isLogin ?
                                (<Login />)
                                :
                                (<Signup />)
                            }


                            {/* {isLogin ? "" : <input className='bg-transparent h-10 w-[280px] mb-3 rounded-md px-5 py-2 border-2 border-gray-400 focus:outline-none focus:border-blue-400 
                                    dark:border-gray-700 dark:text-gray-400 dark:focus:border-blue-400' type="password" placeholder='Confirm Password'
                                value={inputs.confirmPassword}
                                onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                            />
                            } */}

                            <GoogleAuth />

                        </div>

                        <div className="hover:cursor-pointer text-black dark:text-white border-2 border-gray-700 w-[310px] flex justify-center rounded-md p-2 my-4 ">
                            <div className="">
                                {
                                    isLogin ? "Don't have an account?" : "Already have an account?"
                                }
                            </div>

                            <div className=" text-blue-600 ml-1 " onClick={() => setIsLogin(!isLogin)}>

                                {isLogin ? "Sign up" : "Log in"}
                            </div>
                        </div>


                        {/* ------------------------------------------------------------------------- */}
                        <div className="dark:text-white flex flex-col items-center gap-1 ">

                            <h1 className='text-lg'>Get the app.</h1>

                            <div className="flex gap-5">
                                <img className='h-10 w-40' src="./playstore.png" alt="playstoreImg" />
                                <img className='h-10 w-40' src="./microsoft.png" alt="MicrosoftImg" />
                            </div>
                        </div>

                    </div>



                </div>
            </div>
        </>
    )
}

export default LoginLogoutPage



// const [isLogin, setIsLogin] = useState(true);
// const [inputs, setInputs] = useState({
//     email: "",
//     password: "",
//     confirmPassword: ""
// });



// return (
//     <>
//         <div className="h-screen flex items-center justify-center ">

//             <div className="h-[610px] flex">


//                 <div className="hidden md:flex">
//                     <img src="./auth.png" alt="" />
//                 </div>

//                 <div className="flex flex-col w-[310px] mt-5">
//                     <div className="w-[310px] flex flex-col items-center  border-2 border-gray-700 rounded-md">
//                         <img className='' src="./logo.png" alt="" />


//                         <input className='bg-transparent h-10 w-[280px] mb-3 rounded-md px-5 py-2 border-2 border-gray-400 focus:outline-none focus:border-blue-400
//                             dark:border-gray-700 dark:text-gray-400 dark:focus:border-blue-400' type="text"
//                             placeholder='Email'
//                             value={inputs.email}
//                             onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
//                         />

//                         <input className='bg-transparent h-10 w-[280px] mb-3 rounded-md px-5 py-2 border-2 border-gray-400 focus:outline-none focus:border-blue-400
//                             dark:border-gray-700 dark:text-gray-400 dark:focus:border-blue-400' type="password" placeholder='Password'
//                             value={inputs.password}
//                             onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
//                         />

//                         {isLogin ? "" : <input className='bg-transparent h-10 w-[280px] mb-3 rounded-md px-5 py-2 border-2 border-gray-400 focus:outline-none focus:border-blue-400
//                                 dark:border-gray-700 dark:text-gray-400 dark:focus:border-blue-400' type="password" placeholder='Confirm Password'
//                             value={inputs.confirmPassword}
//                             onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
//                         />
//                         }

//                         <button onClick={handleAuth} className='h-10 w-[280px] mb-3 rounded-md px-5 py-2 bg-blue-400 text-lg font-semibold text-white hover:bg-blue-500 duration-100'>Log in</button>


//                         <div className="flex items-center">
//                             <div className="h-0 w-[110px] border border-gray-700"></div>
//                             <h1 className="p-2 dark:text-gray-400">OR</h1>
//                             <div className="h-0 w-[110px] border border-gray-700"></div>
//                         </div>

//                         <div className="flex items-center gap-2 my-5 ">
//                             <img className='h-5 w-5' src="./google.png" alt="" />
//                             <a className='text-blue-600' href="">Log in with Google</a>
//                         </div>

//                     </div>

//                     <div className="hover:cursor-pointer text-black dark:text-white border-2 border-gray-700 w-[310px] flex justify-center rounded-md p-2 my-4 ">
//                         <div className="">
//                             {
//                                 isLogin ? "Don't have an account?" : "Already have an account?"
//                             }
//                         </div>

//                         <div className=" text-blue-600 ml-1 " onClick={() => setIsLogin(!isLogin)}>

//                             {isLogin ? "Sign up" : "Log in"}
//                         </div>
//                     </div>

//                     <div className="dark:text-white flex flex-col items-center gap-1 ">

//                         <h1 className='text-lg'>Get the app.</h1>

//                         <div className="flex gap-5">
//                             <img className='h-10 w-40' src="./playstore.png" alt="playstoreImg" />
//                             <img className='h-10 w-40' src="./microsoft.png" alt="MicrosoftImg" />
//                         </div>
//                     </div>

//                 </div>



//             </div>
//         </div>
//     </>
// )