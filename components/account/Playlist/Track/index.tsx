import { useState } from 'react'
import { TrackI } from '@/interfaces'
import {
    TrackPresent,
    UpdateTrackForm
} from '@/components/account'
import {
    ExpandBtn
} from '@/components/common'
import {
    AiFillDelete,
    AiFillFolderOpen
} from 'react-icons/ai'
import axios from 'axios'

const Track = ({ song, user, provided }: TrackI) => {
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

    const toggleRemoveTrack = async () => {
        if (confirm(`Are you sure you want to delete '${title}' from this power hour?`)) {
            await axios.delete(`http://localhost:3000/api/track/${id}`)
            .then(res => console.log(`Deleted post with ID ${id}`))
            .catch(err => console.error({err}))
            console.log('you deleted it')
        }
    }

    const updateSubmitHandler = async (e: React.FormEvent<HTMLFormElement>, data: any) => {
        e.stopPropagation()
        e.preventDefault()
        console.log(data)
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
        await axios.patch(`http://localhost:3000/api/track/${id}`, {
            title: data?.songTitle,
            artist: data?.songArtist,
            startTime: data?.songStartTime,
            endTime: data?.songEndTime,
            youtubeLink: data?.songLink,
            album: data?.songAlbum,
            year: data?.songYear
        })
        .then(res => console.log(res))
        .catch(err => console.error({err}))
    }

    const focusTrackHandler = (e: React.KeyboardEvent<HTMLElement>) => {
        if(e.code === "Enter") {
            setOpen(!openTrack)
        }
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
                    <span className='float-right'>{user}</span>
                </div>
                <span className='flex gap-5'>
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
                        onClick={toggleRemoveTrack}
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