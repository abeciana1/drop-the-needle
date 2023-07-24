import { TrackI } from '@/interfaces'

const Track = ({ song, user }: TrackI) => {

    const {
        title,
        artist
    } = song

    return(
        <li>
            <details>
                <summary>
                    <span className='font-bold'>&quot;{title}&quot;</span>
                    <span> - </span>
                    <span className='italic'>{artist} (album, year)</span>
                    <span className='float-right mr-5'>{user}</span>
                </summary>
                <div>
                    
                </div>
            </details>
        </li>
    )
}

export default Track