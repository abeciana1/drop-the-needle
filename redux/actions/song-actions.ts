import axios from 'axios'
import {
    loading,
    success,
    failure
} from '@/redux/slices/loadingSlice'
import { AppDispatch } from '@/redux/store'
import { TrackDataI } from '@/interfaces'
import {
    addSong,
    deleteSong
} from '@/redux/slices/powerHourSlice'
import store from '@/redux/store'

export const addTrackAction = (data: TrackDataI, orderNumber: number) => {
    return async function (dispatch: AppDispatch) {
        dispatch(loading())
        try {
            await axios.post('/api/track/new', {
                ...data,
                orderNumber: orderNumber
            })
            .then(res => {
                console.log('res', res)
                dispatch(success())
                dispatch(addSong(res.data.newTrack))
            })
        } catch (error) {
            dispatch(failure({ error: 'Failed to add new track' }))
            console.log('addTrackAction', error);
        }
    }
}

export const deleteTrackAction = (index: number, id: number) => {
    return async function (dispatch: AppDispatch) {
        dispatch(loading())
        try {
            const songs = store.getState().powerHour.songs
            let newSongs = [...songs]
            newSongs.splice(index, 1)
            dispatch(deleteSong(newSongs))
            dispatch(success())
            await axios.delete('/api/track/' + id,)
        } catch (err) {
            dispatch(failure({ error: 'Failed to delete track' }))
            console.log('deleteTrackAction', err);
        }
    }
}

export const reorderSongsAction = (id: number, result: any) => {
    return async function (dispatch: AppDispatch) {
        dispatch(loading())
        const songsState = store.getState().powerHour.songs
        let items = [...songsState]
        const [reorderedItem] = items?.splice(result?.source?.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        // await axios.patch('/api/powerhour/reorder-songs/' + id, {})
        // ! patch
            //* type -> up, down
            //* 
    }
}