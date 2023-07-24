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
                </summary>
            </details>
        </li>
    )
}

export default Track