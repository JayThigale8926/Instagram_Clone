import { IoSearch } from 'react-icons/io5'
import SearchByUsername from './SearchByUsername'
import Modal from '../modal/Modal'
import { useState } from 'react'

const Search2 = () => {

    const [isVisible, setIsVisible] = useState(false);

    const handleModal = () => {
        setIsVisible(!isVisible);
    }

    return <>
        <div className="flex justify-center lg:justify-start cursor-pointer hover:rounded-lg  
                        text-sm font-medium bg-slate-200 p-1 rounded-md hover:bg-slate-300"
            onClick={handleModal}>
            <div className='items-center flex justify-center md:text-xl '> <IoSearch /> </div>
            <div className='text-base font-medium hidden lg:flex '> Search </div>
        </div>

        <Modal visible={isVisible} closeModal={() => setIsVisible(!isVisible)}>
            <SearchByUsername />

        </Modal>
    </>
}

export default Search2