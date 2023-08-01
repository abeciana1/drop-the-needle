import { useState } from 'react'
import { TrackI } from '@/interfaces'
import {
    TrackPresent,
    UpdateTrackForm
} from '@/components/account'
import {
    OnClickButton
} from '@/components/common'

const Track = ({ song, user }: TrackI) => {
    const [ openTrack, setOpen ] = useState(false)
    // const [ hover, setHover ] = useState(false)
    
    const {
        title,
        artist,
        startTime,
        endTime,
        youtubeLink,
        // orderNumber
    } = song

    const [ trackObj, setTrackObj ] = useState({
        trackTitle: title,
        trackArtist: artist,
        trackStartTime: startTime,
        trackEndTime: endTime,
        trackYouTubeLink: youtubeLink,
        trackAlbum: '',
        trackYear: ''
    })

    const toggleOpenDetails = () => {
        setOpen(!openTrack)
    }

    const toggleRemoveTrack = () => {
        console.log('remove')
    }

    const updateSubmitHandler = (e: React.FormEvent<HTMLFormElement>, data: any) => {
        e.preventDefault()
        console.log(e)
        console.log(data)
        console.log('submit')
        // setTrackObj()
    }

    const focusTrackHandler = (e: React.KeyboardEvent<HTMLElement>) => {
        if(e.code === "Enter") {
            setOpen(!openTrack)
        }
    }

    return(
        <li
            className="px-5 py-5 cursor-pointer focus:border-2 border-ceruleanBlue"
        >
            <div 

                className='flex flex-wrap items-center justify-between'
            >
                <div
                    tabIndex={0}
                    onKeyDown={focusTrackHandler}
                >
                    <span className='font-bold'>&quot;{trackObj?.trackTitle}&quot;</span>
                    <span> - </span>
                    <span className='italic'>{trackObj?.trackArtist} ({trackObj?.trackAlbum}, {trackObj?.trackYear})</span>
                    <span className='float-right'>{user}</span>
                </div>
                <span className='flex gap-10'>
                    <OnClickButton
                        text={openTrack ? "Close" : "Open"}
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
            </div>
            {openTrack &&
                <section className='flex flex-col md:flex-row justify-between py-5'>
                    <div>
                        <div className='font-bold'>Timestamps:</div>
                        <div><span className='font-medium'>Start: </span>{trackObj?.trackStartTime}</div>
                        <div><span className='font-medium'>End: </span>{trackObj?.trackEndTime}</div>
                        <div className='mt-7'>
                            <UpdateTrackForm
                                title={trackObj?.trackTitle}
                                artist={trackObj?.trackArtist}
                                startTime={trackObj?.trackStartTime}
                                endTime={trackObj?.trackEndTime}
                                album={trackObj?.trackAlbum}
                                year={trackObj?.trackYear}
                                youtubeLink={trackObj?.trackYouTubeLink}
                                submitHandler={updateSubmitHandler}
                            />
                        </div>
                    </div>
                    <div>
                        <TrackPresent
                            link={youtubeLink}
                            startTime={trackObj?.trackStartTime}
                            endTime={trackObj?.trackEndTime}
                        />
                    </div>
                </section>
                }
        </li>
    )
}

export default Track