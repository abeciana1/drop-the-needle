import React, { useState } from 'react'
import { OnClickButton } from '@/components/common'
import { ModalI } from '@/interfaces'

const Modal: React.FC<any> = ({
    text,
    bgColor,
    onClick,
    children
}: ModalI) => {
    const [ isOpen, setIsOpen ] = useState(false)

    const customStyles = {
        overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)'
        },
        content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
        }
    }


    return (
        <>
            <OnClickButton
                text={text}
                bgColor={bgColor}
                onClick={onClick}
                ctaArrow={false}
            />
            <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={customStyles}>
                <button onClick={() => setIsOpen(false)}>Close Modal</button>
                { children }
            </Modal>
        </>
    )
}

export default Modal