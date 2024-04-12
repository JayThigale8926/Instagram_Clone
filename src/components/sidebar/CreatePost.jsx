import { useState } from 'react'
import { RiAddBoxLine } from 'react-icons/ri'
import CreatePostModal from './CreatePostModal';
import Modal from '../modal/Modal';


const CreatePost = () => {

    const [isVisible, setIsVisible] = useState(false);

    const handleModal = () => {
        setIsVisible(!isVisible);
    }

    return <>
        <div className="w-[10px] lg:w-56 flex justify-center lg:justify-start gap-2 my-3  p-2 hover:bg-gray-200 hover:rounded-lg hover:cursor-pointer"
            onClick={handleModal}
        >
            <div className='items-center flex justify-center md:text-3xl'> <RiAddBoxLine /> </div>
            <div className='text-base font-medium hidden lg:flex'> Create </div>
        </div>

        <Modal visible={isVisible} closeModal={() => setIsVisible(!isVisible)}>
            <CreatePostModal />

        </Modal>

    </>
}

export default CreatePost


