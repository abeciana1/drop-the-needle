import { useState } from 'react'
import { TrackI } from '@/interfaces'
import { TrackPresent } from '@/components/account'
import { OnClickButton } from '@/components/common'

const Track = ({ song, user }: TrackI) => {
    const [ open, setOpen ] = useState(false)
    const [ hover, setHover ] = useState(false)

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

    return(
        <li 
            onClick={toggleOpenDetails} 
            className="px-5 py-5 cursor-pointer"
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
        >
            <div className='flex flex-wrap items-center justify-between'>
                <div>
                    <span className='font-bold'>&quot;{songObj?.songTitle}&quot;</span>
                    <span> - </span>
                    <span className='italic'>{songObj?.songArtist} (album, year)</span>
                    <span className='ml-10'>{user}</span>
                </div>
                {hover &&
                    <span>
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