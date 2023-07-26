import { useState } from 'react'
import { TrackI } from '@/interfaces'
import {
    TrackPresent,
    FormContainer,
    TextInput
} from '@/components/account'
import {
    OnClickButton,
    ModalComp
} from '@/components/common'

const Track = ({ song, user }: TrackI) => {
    const [ open, setOpen ] = useState(false)
    const [ hover, setHover ] = useState(false)
    const [ edit, setEdit ] = useState(false)
    
    const {
        title,
        artist,
        startTime,
        endTime,
        youtubeLink
    } = song

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

    const toggleOpenDetails = () => {
        setOpen(!open)
    }

    const toggleRemoveTrack = () => {
        console.log('remove')
    }

    const toggleEditForm = () => {
        setEdit(!edit)
    }

    const updateSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        console.log(e)
        console.log('submit')
    }

    return(
        <li
            className="px-5 py-5 cursor-pointer"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div className='flex flex-wrap items-center justify-between'>
                <div>
                    <span className='font-bold'>&quot;{songObj?.songTitle}&quot;</span>
                    <span> - </span>
                    <span className='italic'>{songObj?.songArtist} ({songObj?.songAlbum}, {songObj?.songYear})</span>
                    <span className='ml-10'>{user}</span>
                </div>
                {hover &&
                    <span className='flex gap-10'>
                        <OnClickButton
                            text={open ? "Close" : "Expand"}
                            bgColor='ceruleanBlue'
                            ctaArrow={false}
                            onClick={toggleOpenDetails}
                        />
                        <OnClickButton
                            text="Remove"
                            bgColor='vermillion'
                            ctaArrow={false}
                            onClick={toggleRemoveTrack}
                        />
                    </span>
                }
            </div>
            {open &&
                <section className='flex flex-col md:flex-row justify-between py-5'>
                    <div>
                        <div className='font-bold'>Timestamps:</div>
                        <div><span className='font-medium'>Start: </span>{songObj?.songStartTime}</div>
                        <div><span className='font-medium'>End: </span>{songObj?.songEndTime}</div>
                        <div>
                            <ModalComp
                                onClick={toggleEditForm}
                                text="Edit"
                                bgColor='ceruleanBlue'
                            >
                                <FormContainer
                                    onSubmit={updateSubmitHandler}
                                >
                                    <TextInput
                                        name='songTitle'
                                        labelText='Edit song title'
                                        type='text'
                                        value={songObj?.songTitle}
                                        fieldRequired
                                        placeholder={songObj?.songTitle}
                                        onChange={onChangeHandler}
                                    />
                                    <TextInput
                                        name='songArtist'
                                        labelText='Edit song title'
                                        type='text'
                                        value={songObj?.songArtist}
                                        fieldRequired
                                        placeholder={songObj?.songArtist}
                                        onChange={onChangeHandler}
                                    />
                                    <TextInput
                                        name='songAlbum'
                                        labelText='Edit song album'
                                        type='text'
                                        value={songObj?.songAlbum}
                                        fieldRequired
                                        placeholder={songObj?.songAlbum}
                                        onChange={onChangeHandler}
                                    />
                                    <TextInput
                                        name='songYear'
                                        labelText='Edit song year'
                                        type='number'
                                        value={songObj?.songYear}
                                        fieldRequired
                                        placeholder={songObj?.songYear}
                                        onChange={onChangeHandler}
                                    />
                                    <TextInput
                                        name='songStartTime'
                                        labelText='Edit song start time'
                                        type='text'
                                        value={songObj?.songStartTime}
                                        fieldRequired
                                        placeholder={songObj?.songStartTime}
                                        onChange={onChangeHandler}
                                    />
                                    <TextInput
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
                        </div>
                    </div>
                    <div>
                        <TrackPresent
                            link={youtubeLink}
                            startTime={songObj?.songStartTime}
                            endTime={songObj?.songEndTime}
                        />
                    </div>
                </section>
                }
        </li>
    )
}

export default Track