import axios from 'axios'
import {
    setPowerHour,
    setSongs,
    patchPowerHour
} from '@/redux/slices/powerHourSlice'
import {
    loading,
    success,
    failure
} from '@/redux/slices/loadingSlice'
import { AppDispatch, ReduxThunkAction } from '@/redux/store'

export const fetchPowerHour = (id: string): ReduxThunkAction => {
    return async function (dispatch: AppDispatch) {
        dispatch(loading())
        try {
            await axios.get('/api/powerhour/' + id)
            .then(res => {
                dispatch(success())
                dispatch(setPowerHour(res.data.powerHour))
            })
        } catch (error) {
            dispatch(failure({ error: 'Failed to fetch power hour data' }))
            console.error('fetchPowerHour', error);
        }
    }
}

export const fetchSongs = (id: string) => {
    return async function (dispatch: AppDispatch) {
        dispatch(loading())
        try {
            await axios.get('/api/powerhour/get-songs/' + id)
            .then(res => {
                dispatch(success())
                dispatch(setSongs(res.data.sortedSongs))
            })
        } catch (error) {
            dispatch(failure({ error: 'Failed to fetch power hour data' }))
            console.error('fetchPowerHour', error);
        }
    }
}

export const updatePowerHour = (id: number, data: any) => {
    return async function (dispatch: AppDispatch) {
        dispatch(loading())
        try {
            await axios.patch(`/api/powerhour/${id}`, {
                title: data?.title,
                description: data?.description,
                date_time: new Date(data?.dateTime),
                privateStatus: data?.privateStatus === 'true',
                publishStatus: data?.publishStatus === 'true',
                songLimit: data?.songLimit
            })
            .then(res => {
                dispatch(success())
                dispatch(patchPowerHour(res.data.powerHour))
            })
        } catch (err) {
            dispatch(failure({ error: 'Failed to update power hour data' }))
            console.log(err)
        }
    }
}