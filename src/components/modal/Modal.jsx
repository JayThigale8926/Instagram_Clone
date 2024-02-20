import React from 'react'

const Modal = ({ visible, closeModal, children }) => {
    if (!visible) {
        return null;
    }

    const handleCloseModal = (e) => {
        if (e.target.id === "wrapper") {
            closeModal();
        }
    }

    return (
        <>
            <div id='wrapper' className="z-50 overflow-y-auto fixed bg-black bg-opacity-5 inset-0 backdrop-blur-2xl flex flex-col justify-center items-center" onClick={handleCloseModal}>

                <div className="w-auto">
                    <div className="w-full">
                        {/* <div className="ml-auto w-5 text-lg font-bold text-black hover:cursor-pointer p-1 text-right"
                            onClick={closeModal}>X</div> */}
                    </div>
                    <div className="w-full bg-gray-50 text-black">
                        {children}
                        {/* Modal */}
                    </div>

                </div>

            </div>
        </>
    )
}

export default Modal