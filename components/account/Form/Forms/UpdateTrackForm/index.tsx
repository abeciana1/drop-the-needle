import { useState } from 'react'
import {
    ModalComp,
    SubmitButton
} from '@/components/common'
import {
    FormContainer
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
    
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.persist()
        setSongObj({
            ...songObj,
            [event.target.name]: event.target.value
        })
    }
    
    const toggleEditForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.stopPropagation()
        event.preventDefault()
        setEdit(!edit)
        submitHandler(event, songObj)
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
            <div className="py-3">
                <SubmitButton
                    bgColor='vermillion'
                    // disabled={errorsPresent !== 0}
                />
            </div>
        </FormContainer>
    </ModalComp>
    )
}

export default UpdateTrackForm