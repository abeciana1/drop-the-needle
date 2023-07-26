import { useState } from 'react'
import { TrackI } from '@/interfaces'
import { TrackPresent } from '@/components/account'
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

    const toggleOpenDetails = () => {
        setOpen(!open)
    }

    const toggleRemoveTrack = () => {
        console.log('remove')
    }

    const toggleHover = () => {
        setHover(!hover)
    }

    const toggleEditForm = () => {
        setEdit(!edit)
    }

    return(
        <li
            className="px-5 py-5 cursor-pointer"
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
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
                                <h1>hello world</h1>
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