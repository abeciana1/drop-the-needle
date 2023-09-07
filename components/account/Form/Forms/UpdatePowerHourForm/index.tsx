import { useEffect, useState, useMemo } from 'react'
import {
    ModalComp,
    SubmitButton
} from '@/components/common'
import {
    FormContainer,
    Input,
    LenLimitInput
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
    const [ errorsPresent, setErrorsPresent ] = useState(0)
    console.log('errorsPresent', errorsPresent)

    const [ playlist, setPlaylist ] = useState({
        title: title,
        description: description,
        coverImage: coverImage,
        dateTime: dateTime,
        privateStatus: privateStatus,
        publishStatus: publishStatus,
        songLimit: songLimit
    })

    // const errorFinding = useMemo(() => {
    //     if(edit) {
    //         let errorList: NodeListOf<Element> = document.querySelectorAll('[data-error="true"]')
    //         if (errorList?.length < 1) {
    //             setErrorsPresent(0)
    //         }
    //     }
    // }, [errorsPresent])
    
    useEffect(() => {
        findErrorsInForm()
    }, [errorsPresent])

    // console.log(errorFinding)
    const findErrorsInForm = () => {
        let errorList: NodeListOf<Element> = document.querySelectorAll('[data-error="true"]')
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
            <FormContainer onSubmit={toggleEditForm}>
                <Input
                    name='title'
                    labelText='Power Hour title'
                    fieldRequired
                    value={playlist?.title}
                    placeholder={playlist?.title}
                    onChange={handleOnChange}
                    setErrorsPresent={setErrorsPresent}
                    errorsPresent={errorsPresent}
                />
                <Input
                    name='songLimit'
                    type='number'
                    labelText='Song limit'
                    fieldRequired
                    placeholder={playlist?.songLimit}
                    value={playlist?.songLimit}
                    onChange={handleOnChange}
                    setErrorsPresent={setErrorsPresent}
                    errorsPresent={errorsPresent}
                    min={0}
                    max={99}
                />
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