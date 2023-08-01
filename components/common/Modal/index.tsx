import React, { useEffect } from 'react'
import { OnClickButton } from '@/components/common'
import { ModalI } from '@/interfaces'
import Modal from 'react-modal'

const ModalComp: React.FC<any> = ({
    text,
    bgColor,
    children,
    shouldCloseOnEsc = true,
    shouldCloseOnOverlayClick = true,
    render,
    setRender
}: ModalI) => {
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
        setRender(!render)
    }

    useEffect(() => {
        if(document) {
            if(render) {
                document.body.style.overflow = 'hidden'
            } else {
                document.body.style.overflow = 'unset'
            }
        }
    }, [render])

    return (
        <>
            <OnClickButton
                text={text}
                bgColor={bgColor}
                onClick={toggleModal}
                ctaArrow={false}
            />
            <Modal
                isOpen={render} 
                onRequestClose={() => setRender(false)} 
                style={customStyles}
                shouldCloseOnEsc={shouldCloseOnEsc}
                shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
            >
                <button onClick={() => setRender(false)}>Close Modal</button>
                { children }
            </Modal>
        </>
    )
}

export default ModalComp