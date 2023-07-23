import { TrackI } from '@/interfaces'

const Track = ({ song, user }: TrackI) => {
    console.log(song)
    return(
        <li>
            <details>
                <summary></summary>
            </details>
        </li>
    )
}

export default Track