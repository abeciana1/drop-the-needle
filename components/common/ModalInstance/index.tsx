import Modal from 'react-modal'
import {
    useAppSelector,
    useAppDispatch
} from '@/redux/hooks'
import {
    LoadingInstance,
    ExpandBtn
} from '@/components/common'
import { AiOutlineClose } from 'react-icons/ai'
import { clearInstance } from '@/redux/slices/instanceSlice'
import {
    UpdateTrackForm,
    AddTrackForm,
    UpdateCoverImageForm,
    AddPowerHourForm
} from '@/components/account'

const ModalInstance = () => {
    Modal.setAppElement('#modals')
    const isLoading = useAppSelector(state => state.loading.isLoading)
    const instanceState = useAppSelector(state => state.instance)
    const dispatch = useAppDispatch()

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

    const closeModal = () => {
        dispatch(clearInstance())
    }

    return (
        <>
            {(isLoading && instanceState.display === false) &&
                <LoadingInstance isLoading={isLoading} />
            }
            {(instanceState.display && isLoading === false && !!instanceState.data) &&
                <Modal
                    isOpen={instanceState.display} 
                    onRequestClose={closeModal} 
                    style={customStyles}
                    shouldCloseOnEsc={false}
                    shouldCloseOnOverlayClick={false}
                >
                    <div className="flex justify-end">
                        <ExpandBtn
                            text="Close"
                            icon={AiOutlineClose}
                            backgroundColor='vermillion'
                            size={7}
                            onClick={closeModal}
                        />
                    </div>
                    {instanceState.name === 'updateTrack' &&
                        <UpdateTrackForm
                            title={instanceState.data?.title}
                            artist={instanceState.data?.artist}
                            startTime={instanceState.data?.startTime}
                            endTime={instanceState.data?.endTime}
                            album={instanceState.data?.album}
                            year={instanceState.data?.year}
                            youtubeLink={instanceState.data.youtubeLink}
                            submitHandler={instanceState?.data.updateSubmitHandler}
                        />
                    }
                    {instanceState.name === 'addTrack' &&
                        <AddTrackForm
                            submitHandler={instanceState.data.submitHandler}
                        />
                    }
                    {instanceState.name === 'updateCoverImg' &&
                        <UpdateCoverImageForm
                            coverImage={instanceState.data.coverImage}
                        />
                    }
                    {instanceState.name === 'phCreateor' &&
                        <AddPowerHourForm/>
                    }
                </Modal>
            }
        </>
    )
    
}

export default ModalInstance