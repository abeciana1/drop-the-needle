import { useContext } from 'react'
import { LoadingContext } from '@/context/loading-context'
import Modal from 'react-modal'

const LoadingInstance = () => {
    const { isLoading } = useContext(LoadingContext)

    Modal.setAppElement('#modals')
    const customStyles = {
        overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        zIndex: '9999'
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
        width: 'auto',
        maxHeight: '100vh'
        }
    }

    return (
        <>
        {isLoading &&
            <Modal
                isOpen={isLoading} 
                style={customStyles}
                shouldCloseOnEsc={false}
                shouldCloseOnOverlayClick={false}
            >
                <div/>
            </Modal>
        }
        </>
    )

}

export default LoadingInstance