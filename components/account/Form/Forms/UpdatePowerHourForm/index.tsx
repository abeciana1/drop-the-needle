import { useState } from 'react'
import {
    ModalComp,
    SubmitButton
} from '@/components/common'
import {
    FormContainer
} from '@/components/account'
import { UpdatePowerHourFormI } from '@/interfaces'

const UpdatePowerHourForm = ({
    title,
    description,
    coverImage,
    dateTime,
    privateStatus,
    publishStatus,
    songLimit,
    submitHandler
}: UpdatePowerHourFormI) => {
    const [ edit, setEdit ] = useState(false)

    const [ playlist, setPlaylist ] = useState({
        title: title,
        description: description,
        coverImage: coverImage,
        dateTime: dateTime,
        privateStatus: privateStatus,
        publishStatus: publishStatus,
        songLimit: songLimit
    })

    const toggleEditForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.stopPropagation()
        event.preventDefault()
        setEdit(!edit)
        submitHandler(event, playlist)
    }

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.persist()
        setPlaylist({
            ...playlist,
            [event.target.name]: event.target.value
        })
    }

    return (
        <ModalComp
            shouldCloseOnOverlayClick={false}
            shouldCloseOnEsc={false}
            text='Edit Power Hour'
            bgColor='ceruleanBlue'
            onClick={toggleEditForm}
            render={edit}
            setRender={setEdit}
        >
            <FormContainer onSubmit={toggleEditForm}>
                <div className="py-3">
                    <SubmitButton
                        bgColor='vermillion'
                        disabled={errorsPresent !== 0}
                    />
                </div>
            </FormContainer>
        </ModalComp>
    )
}

export default UpdatePowerHourForm