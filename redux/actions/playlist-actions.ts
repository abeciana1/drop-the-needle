import axios from 'axios'
import {
    setPowerHour,
    setSongs,
    patchPowerHour,
    setUnsortedSongs
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
                dispatch(setPowerHour(res.data.powerHour))
                dispatch(success())
            })
        } catch (error) {
            dispatch(failure({ error: 'Failed to fetch power hour data' }))
        }
    }
}

export const fetchSongs = (id: string) => {
    return async function (dispatch: AppDispatch) {
        dispatch(loading())
        try {
            await axios.get('/api/powerhour/get-songs/' + id)
            .then(res => {
                dispatch(setSongs(res.data.powerHourSongs[0].PowerHourSongs))
                dispatch(setUnsortedSongs(res.data.unsortedSongs[0].PowerHourSongs))
                dispatch(success())
            })
        } catch (error) {
            dispatch(failure({ error: 'Failed to fetch power hour data' }))
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
                date_time: new Date(data?.date_time),
                submissionDeadline: new Date(data?.submissionDeadline),
                privateStatus: data?.privateStatus === 'true',
                publishStatus: data?.publishStatus === 'true',
                songLimit: data?.songLimit
            })
            .then(res => {
                dispatch(patchPowerHour(res.data.powerHour))
                dispatch(success())
            })
        } catch (err) {
            dispatch(failure({ error: 'Failed to update power hour data' }))
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
                        submissionDeadline: new Date(powerHourData?.submissionDeadline),
                        privateStatus: powerHourData.privateStatus === 'true',
                        publishStatus: powerHourData.publishStatus === 'true',
                        songLimit: Number(powerHourData.songLimit)
                    }
                }
            })
            .then(response => {
                if (response.status === 200) {
                    window.location.href = `/dashboard/powerhour/${response.data.newPowerHour.id}`
                    dispatch(success())
                }
            })
        } catch (error) {
            dispatch(failure({ error: 'Failed to update cover image.' }))
        }
    }
}

export const createParticipantAction = (powerHourId: number, userId: number) => {
    return async (dispatch: AppDispatch) => {
        dispatch(loading())
        try {
            await axios.post('/api/participant/new', {
                powerHourId: powerHourId,
                userId: userId
            })
            .then(res => {
                console.log('createParticipantAction', res)
                window.location.pathname = `/dashboard/powerhour/participant/${encodeURI(powerHourId.toString())}`
                dispatch(success())
            })
        } catch (error) {
            console.error('err', error)
        }
    }
}

export const deleteParticipantAction = (powerHourId: number, userId: number) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(loading())
            await axios.post('/api/participant/delete', {
                powerHourId: powerHourId,
                userId: userId
            })
            .then(res => {
                dispatch(success())
            })
        } catch (error) {
            console.error('err', error)
        }
    }
}