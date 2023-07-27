import React, { useEffect, useState } from 'react'
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
        transform: 'translate(-50%, -50%)',
        borderRadius: '0.5rem',
        border: '2px solid #343434',
        width: 'auto'
        }
    }

    const toggleModal = () => {
        setIsOpen(true)
        onClick()
    }

    useEffect(() => {
        if(document) {
            if(isOpen) {
                document.body.style.overflow = 'hidden'
            } else {
                document.body.style.overflow = 'unset'
            }
        }
    }, [isOpen])

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
                preventScroll
            >
                <button onClick={() => setIsOpen(false)}>Close Modal</button>
                { children }
            </Modal>
        </>
    )
}

export default ModalComp