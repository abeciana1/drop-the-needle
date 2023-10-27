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
import { AppDispatch } from '@/redux/store'

export const fetchPowerHour = (id: string) => {
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
                dispatch(setSongs(res.data.powerHourSongs.PowerHourSongs))
            })
        } catch (error) {
            dispatch(failure({ error: 'Failed to fetch power hour data' }))
            console.error('fetchSong', error);
        }
    }
}

export const updatePowerHourAction = (id: number, data: any) => {
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
            console.log('updatePowerHour', err)
        }
    }
}

export const updatePowerHourImgAction = (file: any, phId: string) => {
    return async function (dispatch: AppDispatch) {
        let newImgLink = ''
        dispatch(loading())
        await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, {
            method: 'POST',
            body: file
        })
        .then(response => response.json())
        .then(data => {
            newImgLink = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v${data.version}/${data.public_id}.webp`
        })
        .catch(error => {
            console.error('error', error)
        })
        if (newImgLink) {
            try {
                axios.patch('/api/powerhour/' + phId, {
                    cover_image: newImgLink
                })
                .then(res => {
                    dispatch(patchPowerHour(res.data.powerHour))
                    dispatch(success())
                })
            } catch (error) {
                console.error('err', error)
                dispatch(failure({ error: 'Failed to update cover image.' }))
            }
        }
    }
}

export const createPowerHourAction = (powerHourData: any, userId: number) => {
    return (dispatch: AppDispatch) => {
        try {
            axios.post('/api/powerhour/new', {
                data: {
                    userId: userId,
                    powerHourData: {
                        title: powerHourData.title,
                        description: powerHourData.description,
                        cover_image: 'https://res.cloudinary.com/dymmbugh2/image/upload/v1697937069/dtn-image/g2mkvb7takf9pojc4ium.webp',
                        date_time: new Date(powerHourData.dateTime),
                        privateStatus: powerHourData.privateStatus === 'true',
                        publishStatus: powerHourData.publishStatus === 'true',
                        songLimit: Number(powerHourData.songLimit)
                    }
                }
            })
            .then(response => {
                // response.data.newPowerHour.id
                if (response.status === 200) {
                    window.location.href = `/dashboard/powerhour/${response.data.newPowerHour.id}`
                    dispatch(success())
                }
            })
        } catch (error) {
            console.log('err', error)
            dispatch(failure({ error: 'Failed to update cover image.' }))
        }
    }
}