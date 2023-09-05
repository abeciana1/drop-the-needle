import { useEffect, useState } from 'react'
import {
    ModalComp,
    SubmitButton
} from '@/components/common'
import {
    FormContainer,
    TextInput,
    LenLimitInput,
    TextFormatInput
} from '@/components/account'
import { UpdatePowerHourFormI } from '@/interfaces'

// {
//     "id": 1,
//     "title": "Power Hour 1",
//     "description": "Power Hour 1",
//     "cover_image": "https://media.graphassets.com/output=format:webp/HbyIN3qzSVGDqTAcN9iP",
//     "date_time": "2023-04-21T18:09:07.771Z",
//     "createdAt": "2023-04-21T18:09:07.775Z",
//     "privateStatus": false,
//     "publishStatus": false,
//     "songLimit": 5,
// }

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
    const [ errorsPresent, setErrorsPresent ] = useState(0)

    const [ playlist, setPlaylist ] = useState({
        playlistTitle: title,
        playlistDesc: description,
        playlistImg: coverImage,
        playlistDate: dateTime,
        playlistPrivacy: privateStatus,
        playlistPublish: publishStatus,
        playlistLimit: songLimit
    })

    useEffect(() => {
        if(edit) {
            findErrorsInForm()
        }
    }, [errorsPresent])

    const findErrorsInForm = async () => {
        let errorList: NodeListOf<Element> = document.querySelectorAll('div[data-error="true"]')
        if (errorList?.length < 1) {
            setErrorsPresent(0)
        }
    }

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
            {/* <FormContainer>
            </FormContainer> */}
        </ModalComp>
    )
}

export default UpdatePowerHourForm