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
import {
    setInstance,
    clearInstance
} from '@/redux/slices/instanceSlice'

const Track = ({
    song,
    user,
    index,
    removeHandler
}: TrackI) => {
    const dispatch = useAppDispatch()
    const [ openTrack, setOpen ] = useState(false)
    console.log('title - orderNumber', song?.title, song?.orderNumber)

    const toggleOpenDetails = () => {
        setOpen(!openTrack)
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
                id: song.id,
                index: index,
                title: song.title,
                artist: song.artist,
                startTime: song.startTime,
                endTime: song.endTime,
                album: song.album,
                year: song.year,
                youtubeLink: song.youtubeLink,
            }
        }))
    }

    return(
        <>
            <div 
                className='flex flex-wrap items-center justify-between'
            >
                <div
                    tabIndex={0}
                    onKeyDown={focusTrackHandler}
                >
                    <span className='font-bold'>&quot;{song?.title}&quot;</span>
                    <span> - </span>
                    <span className='italic'>{song?.artist} ({song?.album}, {song?.year})</span>
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
                        onClick={() => removeHandler(index, song?.id)}
                        size={8}
                    />
                </span>
            </div>
            {openTrack &&
                <section className='flex flex-col md:flex-row justify-between py-5'>
                    <div>
                        <div className='font-bold'>Timestamps:</div>
                        <div><span className='font-medium'>Start: </span>{song?.startTime}</div>
                        <div><span className='font-medium'>End: </span>{song?.endTime}</div>
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
                            link={song?.youtubeLink}
                            startTime={song?.startTime}
                            endTime={song?.endTime}
                        />
                    </div>
                </section>
            }
        </>
    )
}

export default Track