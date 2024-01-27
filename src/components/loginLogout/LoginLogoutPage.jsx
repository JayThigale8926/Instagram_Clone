import React from 'react'

const LoginLogoutPage = () => {
    return (
        <>
            <div className="h-screen flex items-center justify-center bg-slate-500 ">
                <div className="h-[550px] flex">


                    <div className="hidden md:flex">
                        <img src="./auth.png" alt="" />
                    </div>

                    <div className="flex border-2 border-gray-700 w-[310px]">
                        <div className="flex flex-col items-center">
                            <img className='' src="./logo.png" alt="" />
                            <input className='h-10 w-[280px] m-3' type="text" placeholder='Email' />
                            <input className='h-10 w-[280px] m-3' type="text" placeholder='Password' />



                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginLogoutPage