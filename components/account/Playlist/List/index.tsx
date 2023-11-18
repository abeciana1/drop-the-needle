import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { TrackListI, SongI } from '@/interfaces'
import {
    Track,
} from '@/components/account'
import { useAppSelector, useAppDispatch } from '@/redux/hooks'
import { reorderSongsAction } from '@/redux/actions/song-actions'
import { useRouter } from "next/router";

const TrackList = ({
    songs,
    removeHandler,
    participantList = false
}: TrackListI) => {
    const dispatch = useAppDispatch()
    const unsortedSongs = useAppSelector(state => state.powerHour.unsortedSongs)
    const router = useRouter()

    const handleOnDragEnd = (result: any) => {
        if (!result.destination) return;
        dispatch(reorderSongsAction(Number(router.query.id), result))
    }

    return(
        <section>
            {(participantList && songs?.length > 0) &&
                <ul className="border-altBlack border-4 rounded-lg divide-altBlack">
                    {songs.map((song: SongI, index: number) => (
                        <li
                            key={song.id}
                            className="px-5 py-5 focus:border-2 focus:border-ceruleanBlue border-altBlack border-2 border-b-2"
                        >
                            <Track
                                removeHandler={removeHandler}
                                song={song}
                                user={song?.participant?.user?.name}
                                index={index}
                                participantTrack
                                songCount={unsortedSongs?.length}
                            />
                        </li>
                    ))}
                </ul>
            }
            {!participantList &&
                <DragDropContext
                    onDragEnd={(result) => handleOnDragEnd(result)}
                >
                    {songs?.length > 0 &&
                        <Droppable droppableId="droppable-list">
                            {(provided) => (
                                <ul
                                    className="border-altBlack border-4 rounded-lg divide-altBlack"
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                >
                                    {songs?.map((song: SongI, index: number) => {
                                        return (
                                            <Draggable
                                                key={song?.id}
                                                draggableId={song?.id?.toString()}
                                                index={index}
                                            >
                                                {(provided) => (
                                                    <li
                                                        className="px-5 py-5 focus:border-2 focus:border-ceruleanBlue border-altBlack border-2 border-b-2"
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                    >
                                                        <Track
                                                            removeHandler={removeHandler}
                                                            song={song}
                                                            user={song?.participant?.user?.name}
                                                            index={index}
                                                            songCount={unsortedSongs?.length}
                                                            participantTrack={false}
                                                        />
                                                    </li>
                                                )}
                                            </Draggable>
                                        )
                                    })}
                                    {provided.placeholder}
                                </ul>
                            )}
                        </Droppable>
                    }
                </DragDropContext>
            }
        </section>
    )
}

export default TrackList