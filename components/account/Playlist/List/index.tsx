import { TrackListI } from '@/interfaces'

const TrackList = ({
    songs
}: TrackListI) => {

    return(
        <section>
            <div className="font-medium">(Click on the track to expand details)</div>
            {songs?.length > 0 &&
                <ul className="border-altBlack border-4 rounded-lg"></ul>
            }
        </section>
    )
}

export default TrackList