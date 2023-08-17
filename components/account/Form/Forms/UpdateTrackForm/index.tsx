import { useState } from 'react'
import {
    ModalComp,
    SubmitButton
} from '@/components/common'
import {
    FormContainer,
    Input
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
    const [ errors, setErrors ] = useState({})
    
    const [ songObj, setSongObj ] = useState({
        songTitle: title,
        songArtist: artist,
        songStartTime: startTime,
        songEndTime: endTime,
        songAlbum: album,
        songYear: year,
        songLink: youtubeLink
    })
    
    const toggleEditForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.stopPropagation()
        event.preventDefault()
        setSubmit(true)
        if (Object.keys(errors).length === 0 && isSubmitted) {
            setEdit(!edit)
            submitHandler(event, songObj)
        }
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
            <Input
                name='songTitle'
                labelText='Song title'
                type='text'
                fieldRequired
                // defaultValue={title}
                value={songObj?.songTitle || ''}
                placeholder={songObj?.songTitle || ''}
                onChange={handleOnChange}
                errors={errors}
                isSubmitted={isSubmitted}
                inputRule={{
                    type: 'fieldRequired'
                }}
            />
            <Input
                name='songArtist'
                labelText='Song artist'
                type='text'
                fieldRequired
                // defaultValue={artist}
                placeholder={songObj?.songArtist || ''}
                value={songObj?.songArtist || ''}
                onChange={handleOnChange}
                errors={errors}
                isSubmitted={isSubmitted}
                inputRule={{
                    type: 'fieldRequired'
                }}
            />
            <Input
                name='songLink'
                labelText='Song link'
                type='text'
                fieldRequired
                // defaultValue={youtubeLink}
                placeholder={songObj?.songLink || ''}
                value={songObj?.songLink || ''}
                onChange={handleOnChange}
                errors={errors}
                isSubmitted={isSubmitted}
                inputRule={{
                    type: 'textFormat',
                    regExPattern: "youtube.com/watch\\?v=",
                    example: 'https://www.youtube.com/watch?v=QGnkTQikhsE'
                }}
            />
            <Input
                name='songAlbum'
                labelText='Song album'
                type='text'
                fieldRequired
                // defaultValue={album}
                placeholder={songObj?.songAlbum || ''}
                value={songObj?.songAlbum || ''}
                onChange={handleOnChange}
                errors={errors}
                isSubmitted={isSubmitted}
                inputRule={{
                    type: 'fieldRequired'
                }}
            />
            <Input
                name='songYear'
                labelText='Song year'
                type='number'
                fieldRequired
                // defaultValue={year}
                placeholder={songObj?.songYear || ''}
                value={songObj?.songYear || ''}
                onChange={handleOnChange}
                errors={errors}
                isSubmitted={isSubmitted}
                inputRule={{
                    type: 'lenLimit',
                    min: 4,
                    max: 4
                }}
            />
            <Input
                name='songStartTime'
                labelText='Song start time'
                type='text'
                fieldRequired
                // defaultValue={startTime}
                placeholder={songObj?.songStartTime || ''}
                value={songObj?.songStartTime || ''}
                onChange={handleOnChange}
                errors={errors}
                isSubmitted={isSubmitted}
                inputRule={{
                    type: 'fieldRequired'
                }}
            />
            <Input
                name='songEndTime'
                labelText='Song end time'
                type='text'
                fieldRequired
                // defaultValue={endTime}
                placeholder={songObj?.songEndTime || ''}
                value={songObj?.songEndTime || ''}
                onChange={handleOnChange}
                errors={errors}
                isSubmitted={isSubmitted}
                inputRule={{
                    type: 'fieldRequired'
                }}
            />
            <div className="py-3">
                <SubmitButton
                    bgColor='vermillion'
                />
            </div>
        </FormContainer>
    </ModalComp>
    )
}

export default UpdateTrackForm