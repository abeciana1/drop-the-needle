import axios from 'axios'
import {
    loading,
    success,
    failure
} from '@/redux/slices/loadingSlice'
import { AppDispatch } from '@/redux/store'
import { setSongs } from '@/redux/slices/powerHourSlice'
import { setVideos } from '@/redux/slices/userSlice'

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

// * {
// *     "id": "AW55J2zE3N4",
// *     "title": "The Beatles - Now And Then (Official Audio)",
// *     "link": "https://youtu.be/AW55J2zE3N4",
// *     "thumbnail": "https://i.ytimg.com/vi/AW55J2zE3N4/hqdefault.jpg",
// *     "channel": {
// *         "id": "UCc4K7bAqpdBP8jh1j9XZAww",
// *         "name": "The Beatles",
// *         "link": "https://www.youtube.com/channel/UCc4K7bAqpdBP8jh1j9XZAww",
// *         "handle": null,
// *         "verified": true,
// *         "thumbnail": "https://yt3.ggpht.com/ytc/APkrFKZaa3FGlL9nr6YnH8_PtgOmEkTxh9C6r77YA6lkxw=s0?imgmax=0"
// *     },
// *     "description": "Now and Then's eventful journey to fruition took place over five decades and is the product of conversations and collaborations ...",
// *     "views": 6455190,
// *     "uploaded": "4 days ago",
// *     "duration": 249,
// *     "durationString": "4:09"
// * }