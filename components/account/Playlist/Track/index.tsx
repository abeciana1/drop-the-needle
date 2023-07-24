import { TrackI } from '@/interfaces'

const Track = ({ song, user }: TrackI) => {

    const {
        title,
        artist,
        startTime,
        endTime
    } = song

    return(
        <li className="px-5 py-5">
            <details>
                <summary>
                    <span className='font-bold'>&quot;{title}&quot;</span>
                    <span> - </span>
                    <span className='italic'>{artist} (album, year)</span>
                    <span className='float-right'>{user}</span>
                </summary>
                <div>
                    <div className='font-bold'>Timestamps:</div>
                    <div><span className='font-medium'>Start: </span>{startTime}</div>
                    <div><span className='font-medium'>End: </span>{endTime}</div>
                </div>
            </details>
        </li>
    )
}

export default Track