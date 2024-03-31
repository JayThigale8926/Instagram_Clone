import useSearchUser from "../../hooks/useSearchUser";
import { useRef, useState } from "react";
import SuggestedUser from "../suggestedUsers/SuggestedUser";

const SearchByUsername = () => {

    const { isLoading, getUserByProfile, user, setUser } = useSearchUser()
    const searchRef = useRef(null)

    const SearchUser = async (e) => {
        e.preventDefault();
        getUserByProfile(searchRef.current.value)
    }


    return <>
        <div className="">
            <div className="flex flex-col w-30 text-xs md:w-96">

                <div className="w-full text-xs p-6">
                    <form onSubmit={SearchUser}>
                        <div className="">
                            <label className="text-base font-semibold text-gray-600">Search <abbr title="required">*</abbr></label>
                            <div className="flex gap-2 md:gap-4">
                                <input placeholder="Enter Username" className="appearance-none block w-48 md:w-64 bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" required="required" type="text" ref={searchRef} />

                                <button className='text-sm font-medium bg-slate-200 p-1 rounded-md hover:bg-slate-300' type="submit">Search</button>
                            </div>
                        </div>
                    </form>

                    {user && (<SuggestedUser user={user} setUser={setUser} />)}

                </div>

            </div>
        </div>
    </>
}

export default SearchByUsername