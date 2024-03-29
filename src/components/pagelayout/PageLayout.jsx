import React from 'react'
import SideBar from "../sidebar/SideBar"
import { useLocation } from "react-router-dom"

const PageLayout = ({ children }) => {
    const { pathname } = useLocation();
    return (
        <>
            <div className={`flex ${pathname === "/" ? `justify-center` : ""}`}>
                <div className="flex ">
                    {/* ----------------SideBar--------------- */}
                    {
                        pathname !== "/" ? <div className='w-16 lg:w-60'> <SideBar /> </div> : null
                    }

                    {/* ----------------Home Page--------------    */}
                    <div className="flex w-[calc(100% - 64px) ] lg:w-[calc(100% - 240px)]">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageLayout