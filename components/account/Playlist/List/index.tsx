import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { TrackListI, SongI } from '@/interfaces'
import {
    Track,
    AddTrackForm
} from '@/components/account'
import { AiOutlinePlus } from 'react-icons/ai'

const TrackList = ({
    songs,
    removeHandler,
    addTrackHandler
}: TrackListI) => {

    const handleOnDragEnd = (result: any) => {
        console.log({result})
        if (!result.destination) return;
        let items = songs
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        // setSongs(items);
        // reorderSongs(playlist.playlist.id, parseInt(result.draggableId), result.destination.index)
    }

    return(
        <section>
            <div className="font-medium flex md:flex-row flex-col-reverse justify-between md:items-end pb-2">
                (Click on the track to expand details)
                <AddTrackForm
                    icon={AiOutlinePlus}
                    submitHandler={addTrackHandler}
                />
            </div>
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
                                            draggableId={song?.id.toString()}
                                            index={index}
                                        >
                                            {(provided) => (
                                                <Track
                                                    removeHandler={removeHandler}
                                                    song={song}
                                                    user={song?.participant?.user?.name} 
                                                    provided={provided}
                                                    index={index}
                                                />
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
        </section>
    )
}

export default TrackList