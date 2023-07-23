import { TrackListI, SongI } from '@/interfaces'
import { Track } from '@/components/account'

const TrackList = ({
    songs
}: TrackListI) => {

    return(
        <section>
            <div className="font-medium">(Click on the track to expand details)</div>
            {songs?.length > 0 &&
                <ul className="border-altBlack border-4 rounded-lg">
                    {songs?.map((song: SongI) => {
                        return <Track key={song?.id} song={song} user={song?.participant?.user?.name} />
                    })}
                </ul>
            }
        </section>
    )
}

export default TrackList