import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { TrackListI, SongI } from '@/interfaces'
import {
    Track,
} from '@/components/account'
import {
    OnClickButton
} from '@/components/common'
import { AiOutlinePlus } from 'react-icons/ai'
import { useAppDispatch } from '@/redux/hooks'
import {
    setInstance,
    clearInstance
} from '@/redux/slices/instanceSlice'

const TrackList = ({
    songs,
    removeHandler,
    addTrackHandler
}: TrackListI) => {
    const dispatch = useAppDispatch()

    const handleOnDragEnd = (result: any) => {
        console.log({result})
        if (!result.destination) return;
        let items = songs
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        // setSongs(items);
        // reorderSongs(playlist.playlist.id, parseInt(result.draggableId), result.destination.index)
    }

    const renderAddTrackForm = () => {
        dispatch(setInstance({
            display: true,
            name: 'addTrack',
            data: {
                submitHandler: addTrackHandler
            }
        }))
    }

    return(
        <section>
            <div className="font-medium flex md:flex-row flex-col-reverse justify-between md:items-end pb-2">
                (Click on the track to expand details)
                <OnClickButton
                    text='Add track'
                    icon={AiOutlinePlus}
                    bgColor='ceruleanBlue'
                    onClick={renderAddTrackForm}
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