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

    const [ songObj, setSongObj ] = useState({
        songTitle: title,
        songArtist: artist,
        songStartTime: startTime,
        songEndTime: endTime,
        songAlbum: album,
        songYear: year,
        songLink: youtubeLink
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
            onSubmit={(e) => {
                submitHandler(e, songObj)
                setEdit(false)
            }}
        >
            <Input
                name='songTitle'
                labelText='Song title'
                type='text'
                value={songObj?.songTitle}
                fieldRequired
                placeholder={songObj?.songTitle}
                onChange={onChangeHandler}
            />
            <Input
                name='songArtist'
                labelText='Song artist'
                type='text'
                value={songObj?.songArtist}
                fieldRequired
                placeholder={songObj?.songArtist}
                onChange={onChangeHandler}
            />
            <Input
                name='songLink'
                labelText='Song link'
                type='text'
                value={songObj?.songLink}
                fieldRequired
                placeholder={songObj?.songLink}
                onChange={onChangeHandler}
            />
            <Input
                name='songAlbum'
                labelText='Song album'
                type='text'
                value={songObj?.songAlbum}
                fieldRequired
                placeholder={songObj?.songAlbum}
                onChange={onChangeHandler}
            />
            <Input
                name='songYear'
                labelText='Song year'
                type='number'
                value={songObj?.songYear}
                fieldRequired
                placeholder={songObj?.songYear}
                onChange={onChangeHandler}
            />
            <Input
                name='songStartTime'
                labelText='Song start time'
                type='text'
                value={songObj?.songStartTime}
                fieldRequired
                placeholder={songObj?.songStartTime}
                onChange={onChangeHandler}
            />
            <Input
                name='songEndTime'
                labelText='Song end time'
                type='text'
                value={songObj?.songEndTime}
                fieldRequired
                placeholder={songObj?.songEndTime}
                onChange={onChangeHandler}
            />
            <SubmitButton
                bgColor='vermillion'
            />
        </FormContainer>
    </ModalComp>
    )
}

export default UpdateTrackForm