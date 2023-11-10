import axios from 'axios'
import {
    loading,
    success,
    failure
} from '@/redux/slices/loadingSlice'
import { AppDispatch } from '@/redux/store'
import { setSongs } from '@/redux/slices/powerHourSlice'
import { setVideos, setUserPowerHours } from '@/redux/slices/userSlice'

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
                dispatch(setSongs(response?.data?.userSongs?.PowerHourSongs))
            })
            .catch((err) => {
                console.log('err', err)
                dispatch(failure({ error: 'Failed to fetch power hour songs' }))
            })
        }
    }
}

export const searchYouTubeAction = (searchTerm: string) => {
    return async (dispatch: AppDispatch) => {
        dispatch(loading())
        try {
            await axios.post('/api/search', {
                searchTerm: searchTerm
            })
            .then(response => {
                dispatch(setVideos(response?.data?.videos))
                dispatch(success())
            })
        } catch (err) {
            console.error('err', err)
        }
    }
}

export const fetchUserPowerHoursAction = (userId: number) => {
    return async (dispatch: AppDispatch) => {
        dispatch(loading())
        try {
            await axios.post('/api/user/get-powerhours', {
                userId: userId
            })
            .then(response => {
                dispatch(setUserPowerHours(response.data.userPowerHours.participants))
                dispatch(success())
            })
        } catch (err) {
            console.error('err', err)
        }
    }
}