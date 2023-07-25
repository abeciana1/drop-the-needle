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
                    <span className='font-bold'>&quot;{title}&quot;</span>
                    <span> - </span>
                    <span className='italic'>{artist} (album, year)</span>
                </div>
                {hover ?
                    <span>
                        <OnClickButton
                            text="Remove"
                            bgColor='vermillion'
                            ctaArrow={false}
                            onClick={toggleRemoveTrack}
                        />
                    </span>
                        :
                    <span className='float-right'>{user}</span>
                }
            </div>
            {open &&
                <section className='flex flex-col md:flex-row justify-between py-5'>
                    <div>
                        <div className='font-bold'>Timestamps:</div>
                        <div><span className='font-medium'>Start: </span>{startTime}</div>
                        <div><span className='font-medium'>End: </span>{endTime}</div>
                    </div>
                    <div>
                        <TrackPresent
                            link={youtubeLink}
                            startTime={startTime}
                            endTime={endTime}
                        />
                    </div>
                </section>
                }
        </li>
    )
}

export default Track