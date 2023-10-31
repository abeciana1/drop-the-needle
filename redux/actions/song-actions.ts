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
    deleteSong,
    reorderSongs,
    patchSong
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
    return async function (dispatch: AppDispatch) {
        dispatch(loading())
        try {
            const songs = store.getState().powerHour.songs
            let newSongs = [...songs]
            newSongs.splice(index, 1)
            dispatch(deleteSong(newSongs))
            await axios.delete('/api/track/' + id)
            dispatch(success())
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
                console.log('response', response)
                dispatch(success())
                // dispatch(reorderSongs(newSongList))
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
            await axios.patch('/api/track' + songId, {
                title: data?.songTitle,
                artist: data?.songArtist,
                startTime: data?.songStartTime,
                endTime: data?.songEndTime,
                youtubeLink: data?.songLink,
                album: data?.songAlbum,
                year: data?.songYear
            })
            .then(response => {
                console.log('track patch', response)
                dispatch(success())
            })
        } catch (err) {
            console.error({ err })
        }
    }
}