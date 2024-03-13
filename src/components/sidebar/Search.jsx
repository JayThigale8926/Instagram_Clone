import { IoSearch } from 'react-icons/io5'
import SearchByUsername from './SearchByUsername'
import Modal from '../modal/Modal'
import { useState } from 'react'

const Search = () => {

    const [isVisible, setIsVisible] = useState(false);

    const handleModal = () => {
        setIsVisible(!isVisible);
    }

    return <>
        <div className="w-[10px] lg:w-56 flex justify-center lg:justify-start cursor-pointer gap-2 my-3  p-2 hover:bg-gray-200 hover:rounded-lg" onClick={handleModal}>
            <div className='items-center flex justify-center md:text-3xl'> <IoSearch /> </div>
            <div className='text-base font-medium hidden lg:flex '> Search </div>
        </div>

        <Modal visible={isVisible} closeModal={() => setIsVisible(!isVisible)}>
            <SearchByUsername handleModal={handleModal} />

        </Modal>
    </>
}

export default Search