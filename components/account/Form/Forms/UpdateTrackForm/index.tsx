import { useState } from 'react'
import { ModalComp } from '@/components/common'
import {
    FormContainer,
    Input
} from '@/components/account'


const UpdateTrackForm = () => {
    const [ edit, setEdit ] = useState(false)
    const [ submitted, setSubmitted ] = useState(false)

    const [ songObj, setSongObj ] = useState({
        songTitle: title,
        songArtist: artist,
        songStartTime: startTime,
        songEndTime: endTime,
        songAlbum: '',
        songYear: ''
    })

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSongObj({
            ...songObj,
            [event.target.name]: event.target.value
        })
    }

    const toggleEditForm = () => {
        setEdit(!edit)
    }

    const updateSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        console.log(e)
        console.log('submit')
    }

    return(
    <ModalComp
        shouldCloseOnOverlayClick={false}
        shouldCloseOnEsc={false}
        onClick={toggleEditForm}
        text="Edit"
        bgColor='ceruleanBlue'
    >
        <FormContainer
            onSubmit={updateSubmitHandler}
        >
            <Input
                name='songTitle'
                labelText='Edit song title'
                type='text'
                value={songObj?.songTitle}
                fieldRequired
                placeholder={songObj?.songTitle}
                onChange={onChangeHandler}
            />
            <Input
                name='songArtist'
                labelText='Edit song title'
                type='text'
                value={songObj?.songArtist}
                fieldRequired
                placeholder={songObj?.songArtist}
                onChange={onChangeHandler}
            />
            <Input
                name='songAlbum'
                labelText='Edit song album'
                type='text'
                value={songObj?.songAlbum}
                fieldRequired
                placeholder={songObj?.songAlbum}
                onChange={onChangeHandler}
            />
            <Input
                name='songYear'
                labelText='Edit song year'
                type='number'
                value={songObj?.songYear}
                fieldRequired
                placeholder={songObj?.songYear}
                onChange={onChangeHandler}
            />
            <Input
                name='songStartTime'
                labelText='Edit song start time'
                type='text'
                value={songObj?.songStartTime}
                fieldRequired
                placeholder={songObj?.songStartTime}
                onChange={onChangeHandler}
            />
            <Input
                name='songEndTime'
                labelText='Edit song end time'
                type='text'
                value={songObj?.songEndTime}
                fieldRequired
                placeholder={songObj?.songEndTime}
                onChange={onChangeHandler}
            />
        </FormContainer>
    </ModalComp>
    )
}

export default UpdateTrackForm