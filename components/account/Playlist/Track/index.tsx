import { useState } from 'react'
import { TrackI } from '@/interfaces'
import {
    TrackPresent
} from '@/components/account'
import {
    ExpandBtn,
    OnClickButton
} from '@/components/common'
import {
    AiFillDelete,
    AiFillFolderOpen
} from 'react-icons/ai'
import axios from 'axios'
import { useAppDispatch } from '@/redux/hooks'
import { setInstance } from '@/redux/slices/instanceSlice'

const Track = ({
    song,
    user,
    provided,
    index,
    removeHandler
}: TrackI) => {
    const dispatch = useAppDispatch()
    const [ openTrack, setOpen ] = useState(false)
    
    const {
        id,
        title,
        artist,
        startTime,
        endTime,
        youtubeLink,
        album,
        year
    } = song

    const [ trackObj, setTrackObj ] = useState({
        trackTitle: title,
        trackArtist: artist,
        trackStartTime: startTime,
        trackEndTime: endTime,
        trackYouTubeLink: youtubeLink,
        trackAlbum: album,
        trackYear: year
    })

    const toggleOpenDetails = () => {
        setOpen(!openTrack)
    }

    const updateSubmitHandler = async (data: any) => {
        setTrackObj({
            ...trackObj,
            trackTitle: data?.songTitle,
            trackArtist: data?.songArtist,
            trackStartTime: data?.songStartTime,
            trackEndTime: data?.songEndTime,
            trackYouTubeLink: data?.songLink,
            trackAlbum: data?.songAlbum,
            trackYear: data?.songYear
        })
        await axios.patch(`/api/track/${id}`, {
            title: data?.songTitle,
            artist: data?.songArtist,
            startTime: data?.songStartTime,
            endTime: data?.songEndTime,
            youtubeLink: data?.songLink,
            album: data?.songAlbum,
            year: data?.songYear
        })
        .catch(err => console.error({err}))
    }

    const focusTrackHandler = (e: React.KeyboardEvent<HTMLElement>) => {
        if(e.code === "Enter") {
            setOpen(!openTrack)
        }
    }

    const renderUpdateTrackForm = () => {
        dispatch(setInstance({
            display: true,
            name: 'updateTrack',
            data: {
                title: trackObj.trackTitle,
                artist: trackObj.trackArtist,
                startTime: trackObj.trackStartTime,
                endTime: trackObj.trackEndTime,
                album: trackObj.trackAlbum,
                year: trackObj.trackYear,
                youtubeLink: trackObj.trackYouTubeLink,
                submitHandler: updateSubmitHandler
            }
        }))
    }

    return(
        <li
            className="px-5 py-5 focus:border-2 focus:border-ceruleanBlue border-altBlack border-2 border-b-2"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
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
                    <span className='italic'>{trackObj?.trackArtist} ({trackObj?.trackAlbum}, {trackObj?.trackYear?.substring(0,4).concat("")})</span>
                    <span className='ml-5'>{user}</span>
                </div>
                <span className='flex mt-5 md:mt-0 gap-5'>
                    <ExpandBtn
                        text={openTrack ? "Close" : "Open"}
                        icon={AiFillFolderOpen}
                        backgroundColor='ceruleanBlue'
                        onClick={toggleOpenDetails}
                        size={7}
                    />
                    <ExpandBtn
                        text="Remove"
                        icon={AiFillDelete}
                        backgroundColor='vermillion'
                        onClick={() => removeHandler(index)}
                        size={8}
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
                            <OnClickButton
                                text="Edit"
                                bgColor='ceruleanBlue'
                                onClick={renderUpdateTrackForm}
                            />
                        </div>
                    </div>
                    <div className="pt-3 md:pt-0">
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