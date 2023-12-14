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
import { useAppDispatch } from '@/redux/hooks'
import { setInstance } from '@/redux/slices/instanceSlice'
import { IoArrowUndo } from "react-icons/io5";
import { switchTrackAction, deleteSwitchSongAction } from '@/redux/actions/song-actions'

const Track = ({
    song,
    user,
    index,
    removeHandler,
    songCount,
    participantTrack
}: TrackI) => {
    const dispatch = useAppDispatch()
    const [ openTrack, setOpen ] = useState(false)

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

    const addSongToUnsorted = () => {
        dispatch(switchTrackAction(song?.id, 0, songCount, song))
        dispatch(deleteSwitchSongAction(index, false))
    }

    return(
        <>
            <div 
                className='flex flex-wrap items-center justify-between'
            >
                {!participantTrack &&
                    <ExpandBtn
                        text='Move to unsorted list'
                        icon={IoArrowUndo}
                        backgroundColor='bg-altGreen-400'
                        onClick={addSongToUnsorted}
                        size={14.5}
                    />
                }
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
                        text="Delete"
                        icon={AiFillDelete}
                        backgroundColor='vermillion'
                        onClick={() => removeHandler(index, song?.id)}
                        size={7}
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