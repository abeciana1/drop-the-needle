import { useState } from 'react'
import { UnsortedTrackI } from '@/interfaces'
import { useAppSelector, useAppDispatch } from '@/redux/hooks'
import { TrackPresent } from '@/components/account'
import { OnClickButton } from '@/components/common'
import { switchTrackAction, deleteSwitchSongAction } from '@/redux/actions/song-actions'

const UnsortedTrack = ({
    song,
    user,
    index,
    songCount
}: UnsortedTrackI) => {
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

    const addSongToPH = () => {
        dispatch(switchTrackAction(song?.id, (songCount + 1), songCount, song))
        dispatch(deleteSwitchSongAction(index, true))
    }

    return(
        <li className='mt-3 flex flex-wrap items-center justify-between border-2 rounded-lg p-3'>
            <div
                tabIndex={0}
                onKeyDown={focusTrackHandler}
            >
                <span className='font-bold'>&quot;{song?.title}&quot;</span>
                <span> - </span>
                <span className='italic'>{song?.artist} ({song?.album}, {song?.year})</span>
                <span className='ml-5'>{user}</span>
            </div>
            <div className='pt-3'>
                <OnClickButton
                    text='Add song to power hour'
                    bgColor='ceruleanBlue'
                    onClick={addSongToPH}
                />
            </div>
            <div className='pt-3'>
                <OnClickButton
                    text='Show details'
                    bgColor='jaffa'
                    onClick={toggleOpenDetails}
                />
            </div>
            {openTrack &&
                <div className='flex flex-col justify-between py-5'>
                    <div className='font-bold'>Timestamps:</div>
                    <div><span className='font-medium'>Start: </span>{song?.startTime}</div>
                    <div><span className='font-medium'>End: </span>{song?.endTime}</div>
                    <div className="pt-3 md:pt-0">
                        <TrackPresent
                            link={song?.youtubeLink}
                            startTime={song?.startTime}
                            endTime={song?.endTime}
                        />
                    </div>
                </div>
            }
        </li>
    )
}

export default UnsortedTrack