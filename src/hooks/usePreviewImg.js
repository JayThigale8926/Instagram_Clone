import React, { useState } from 'react'

const usePreviewImg = () => {

    const [selectedFile, setSelectedFile] = useState(null)
    const fileMaxSizeInMB = 2 * 1024 * 1024;  // 2MB

    const handleImgChange = (e) => {
        const file = e.target.files[0]

        if (file && file.type.startsWith("image/")) {
            if (file.size > fileMaxSizeInMB) {
                alert("File size must be less than 2MB")
                setSelectedFile(null);
                return;
            }

            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedFile(reader.result)
            }

            reader.readAsDataURL(file);

        }
        else {
            alert("Select an image file")
            setSelectedFile(null);
        }
    }

    return { selectedFile, handleImgChange, setSelectedFile }
}

export default usePreviewImg