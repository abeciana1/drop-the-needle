import { createSlice } from '@reduxjs/toolkit'

const initialState: { videos: any, powerHours: any } = {
    videos: null,
    powerHours: null
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setVideos: (state, action) => {
            state.videos = action.payload
        },
        setUserPowerHours: (state, action) => {
            state.powerHours = action.payload
        },
        clearVideos: (state) => {
            state.videos = null
        },
        clearUserPowerHours: (state) => {
            state.powerHours = null
        }
    }
})

export const {
    setVideos,
    clearVideos,
    setUserPowerHours,
    clearUserPowerHours
} = userSlice.actions

export default userSlice.reducer