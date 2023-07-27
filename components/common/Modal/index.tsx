import React, { useState } from 'react'
import { OnClickButton } from '@/components/common'
import { ModalI } from '@/interfaces'
import Modal from 'react-modal'

const ModalComp: React.FC<any> = ({
    text,
    bgColor,
    onClick,
    children,
    shouldCloseOnEsc = true,
    shouldCloseOnOverlayClick = true
}: ModalI) => {
    const [ isOpen, setIsOpen ] = useState(false)
    Modal.setAppElement('#modals')
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

    const toggleModal = () => {
        setIsOpen(true)
        onClick()
    }

    return (
        <>
            <OnClickButton
                text={text}
                bgColor={bgColor}
                onClick={toggleModal}
                ctaArrow={false}
            />
            <Modal
                isOpen={isOpen} 
                onRequestClose={() => setIsOpen(false)} 
                style={customStyles}
                shouldCloseOnEsc={shouldCloseOnEsc}
                shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
            >
                <button onClick={() => setIsOpen(false)}>Close Modal</button>
                { children }
            </Modal>
        </>
    )
}

export default ModalComp