import axios from 'axios'
// import store from '@/redux/store'
import {
    loading,
    success,
    failure
} from '@/redux/slices/loadingSlice'
import { AppDispatch } from '@/redux/store'
import { setSongs } from '@/redux/slices/powerHourSlice'

export const fetchUserSongsAction = (userId: number, phId: number) => {
    return async (dispatch: AppDispatch) => {
        dispatch(loading())
        if (phId) {
            await axios.post('/api/user/get-songs', {
                userId: userId,
                phId: phId
            })
            .then(response => {
                dispatch(success())
                dispatch(setSongs(response?.data?.songs))
            })
            .catch((err) => {
                console.log('err', err)
                dispatch(failure({ error: 'Failed to fetch power hour songs' }))
            })
        }
    }
}