import { useEffect, useState } from 'react'
import {
    ModalComp,
    SubmitButton
} from '@/components/common'
import {
    FormContainer,
    TextInput
} from '@/components/account'
import { UpdateTrackFormI } from '@/interfaces'

const UpdateTrackForm = ({
    title,
    artist,
    startTime,
    endTime,
    album,
    year,
    youtubeLink,
    submitHandler
}: UpdateTrackFormI) => {
    const [ edit, setEdit ] = useState(false)
    const [ isSubmitted, setSubmit ] = useState(false)
    const [ errorsPresent, setErrorsPresent ] = useState(0)

    const [ songObj, setSongObj ] = useState({
        songTitle: title,
        songArtist: artist,
        songStartTime: startTime,
        songEndTime: endTime,
        songAlbum: album,
        songYear: year,
        songLink: youtubeLink
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
        setSubmit(true)
        setEdit(!edit)
        submitHandler(event, songObj)
    }

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.persist()
        setSongObj({
            ...songObj,
            [event.target.name]: event.target.value
        })
    }

    return(
    <ModalComp
        shouldCloseOnOverlayClick={false}
        shouldCloseOnEsc={false}
        onClick={toggleEditForm}
        render={edit}
        setRender={setEdit}
        text="Edit"
        bgColor='ceruleanBlue'
    >
        <FormContainer
            onSubmit={toggleEditForm}
        >
            <TextInput
                name='songTitle'
                labelText='Song title'
                fieldRequired
                value={songObj?.songTitle || ''}
                placeholder={songObj?.songTitle || ''}
                onChange={handleOnChange}
                // isSubmitted={isSubmitted}
                setErrorsPresent={setErrorsPresent}
                errorsPresent={errorsPresent}
            />
            <TextInput
                name='songArtist'
                labelText='Song artist'
                fieldRequired
                placeholder={songObj?.songArtist || ''}
                value={songObj?.songArtist || ''}
                onChange={handleOnChange}
                // isSubmitted={isSubmitted}
                setErrorsPresent={setErrorsPresent}
                errorsPresent={errorsPresent}
            />
            {/* <TextInput
                name='songLink'
                labelText='Song link'
                fieldRequired
                placeholder={songObj?.songLink || ''}
                value={songObj?.songLink || ''}
                onChange={handleOnChange}
                // isSubmitted={isSubmitted}
                // inputRule={{
                //     type: 'textFormat',
                //     regExPattern: "youtube.com/watch\\?v=",
                //     example: 'https://www.youtube.com/watch?v=QGnkTQikhsE'
                // }}
                setErrorsPresent={setErrorsPresent}
                errorsPresent={errorsPresent}
            /> */}
            <TextInput
                name='songAlbum'
                labelText='Song album'
                fieldRequired
                placeholder={songObj?.songAlbum || ''}
                value={songObj?.songAlbum || ''}
                onChange={handleOnChange}
                // isSubmitted={isSubmitted}
                setErrorsPresent={setErrorsPresent}
                errorsPresent={errorsPresent}
            />
            {/* <TextInput
                name='songYear'
                labelText='Song year'
                fieldRequired
                placeholder={songObj?.songYear || ''}
                value={songObj?.songYear || ''}
                onChange={handleOnChange}
                // isSubmitted={isSubmitted}
                setErrorsPresent={setErrorsPresent}
                errorsPresent={errorsPresent}
            /> */}
            {/* <TextInput
                name='songStartTime'
                labelText='Song start time'
                fieldRequired
                placeholder={songObj?.songStartTime || ''}
                value={songObj?.songStartTime || ''}
                onChange={handleOnChange}
                // isSubmitted={isSubmitted}
                setErrorsPresent={setErrorsPresent}
                errorsPresent={errorsPresent}
            /> */}
            {/* <TextInput
                name='songEndTime'
                labelText='Song end time'
                fieldRequired
                placeholder={songObj?.songEndTime || ''}
                value={songObj?.songEndTime || ''}
                onChange={handleOnChange}
                // isSubmitted={isSubmitted}
                setErrorsPresent={setErrorsPresent}
                errorsPresent={errorsPresent}
            /> */}
            <SubmitButton
                bgColor='vermillion'
                disabled={errorsPresent !== 0}
            />
            <div className="py-3">
            </div>
        </FormContainer>
    </ModalComp>
    )
}

export default UpdateTrackForm