import axios from 'axios'
import {
    loading,
    success,
    failure
} from '@/redux/slices/loadingSlice'
import { AppDispatch } from '@/redux/store'
import { TrackDataI, SongI } from '@/interfaces'
import {
    addSong,
    deleteSong,
    reorderSongs,
    patchSong,
    deleteUnsortedSong,
    patchUnsortedSong
} from '@/redux/slices/powerHourSlice'
import store from '@/redux/store'

interface ResultI {
    source: {
        index: number;
    },
    destination: {
        index: number;
    }
}

export const addTrackAction = (data: TrackDataI, orderNumber?: number) => {
    return async function (dispatch: AppDispatch) {
        dispatch(loading())
        try {
            await axios.post('/api/track/new', {
                ...data,
                orderNumber: orderNumber ? orderNumber : 0
            })
            .then(res => {
                dispatch(addSong(res.data.newTrack))
                dispatch(success())
            })
        } catch (error) {
            dispatch(failure({ error: 'Failed to add new track' }))
            console.log('addTrackAction', error);
        }
    }
}

export const deleteTrackAction = (index: number, id: number) => {
    console.log('delete action')
    return async function (dispatch: AppDispatch) {
        dispatch(loading())
        try {
            const songs = store.getState().powerHour.songs
            console.log('song state')
            let newSongs = [...songs]
            newSongs.splice(index, 1)
            dispatch(deleteSong(newSongs))
            console.log('new song state', newSongs)
            await axios.delete('/api/track/' + id)
            .then(response => {
                if (response.data.hasOwnProperty('updatedPowerHour')) {
                    console.log('songs return response', response.data.updatedPowerHour.PowerHourSongs)
                    dispatch(reorderSongs(response.data.updatedPowerHour.PowerHourSongs))
                }
                dispatch(success())
            })
        } catch (err) {
            dispatch(failure({ error: 'Failed to delete track' }))
            console.log('deleteTrackAction', err);
        }
    }
}

export const reorderSongsAction = (id: number, result: ResultI) => {
    return async function (dispatch: AppDispatch) {
        dispatch(loading())
        const songsState = store.getState().powerHour.songs
        let foundSong = songsState[result.source.index]
        let newSongList = [...songsState]
        const [reorderedItem] = newSongList?.splice(result?.source?.index, 1);
        newSongList.splice(result.destination.index, 0, reorderedItem);
        dispatch(reorderSongs(newSongList))
        try {
            await axios.patch('/api/powerhour/reorder-songs/' + id, {
                type: result.destination.index > result.source.index ? 'down' : 'up',
                trackId: foundSong.id,
                sourceOrderNumber: (result.source.index + 1),
                destinationOrderNumber: (result.destination.index + 1)
            })
            .then(response => {
                dispatch(reorderSongs(response.data.reorderedSongs.PowerHourSongs))
                dispatch(success())
            })
        } catch {
            dispatch(failure({ error: 'Unable to reorder songs' }))
        }
    }
}

export const patchSongAction = (index: number, songId: number, data: any) => {
    return async (dispatch: AppDispatch) => {
        dispatch(loading())
        dispatch(patchSong({
            index: index,
            data: data
        }))
        try {
            await axios.patch('/api/track/' + songId, {
                title: data?.title,
                artist: data?.artist,
                startTime: data?.startTime,
                endTime: data?.endTime,
                youtubeLink: data?.youtubeLink,
                album: data?.album,
                year: data?.year
            })
            .then(() => {
                dispatch(success())
            })
        } catch (err) {
            dispatch(failure({ error: 'Failed to update track' }))
            console.error({ err })
        }
    }
}

export const deleteSwitchSongAction = (index: number, unsorted: boolean) => {
    return async (dispatch: AppDispatch) => {
        if (unsorted) {
            const songs = store.getState().powerHour.unsortedSongs
            let newSongs = [...songs]
            newSongs.splice(index, 1)
            dispatch(deleteUnsortedSong(newSongs))
        } else {
            const songs = store.getState().powerHour.songs
            let newSongs = [...songs]
            newSongs.splice(index, 1)
            dispatch(deleteSong(newSongs))
        }
    }
}

export const switchTrackAction = (songId: number, orderNumber: number, index: number, song: SongI) => {
    return async (dispatch: AppDispatch) => {
        dispatch(loading())
        try {
            if (orderNumber > 0) {
                dispatch(patchSong({
                    index: index,
                    data: song
                }))
            } else {
                dispatch(patchUnsortedSong({
                    index: index,
                    data: song
                }))
            }
            await axios.patch('/api/track/' + songId, {
                orderNumber: orderNumber
            })
            .then(response => {
                dispatch(success())
                if (orderNumber > 0) {
                    dispatch(patchSong({
                        index: index,
                        data: response.data.track
                    }))
                } else {
                    dispatch(patchUnsortedSong({
                        index: index,
                        data: response.data.track
                    }))
                }
            })
        } catch (err) {
            dispatch(failure({ error: 'Failed to update track' }))
            console.log('err', err)
        }
    }
}