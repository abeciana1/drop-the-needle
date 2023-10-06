import axios from 'axios'
import {
    setPowerHour,
    setSongs
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
                dispatch(setSongs(res.data.powerHour))
            })
        } catch (error) {
            dispatch(failure({ error: 'Failed to fetch power hour data' }))
            console.error('fetchPowerHour', error);
        }
    }
}