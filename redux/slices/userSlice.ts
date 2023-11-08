import { createSlice } from '@reduxjs/toolkit'

const initialState: { videos: any } = {
    videos: null
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setVideos: (state, action) => {
            state.videos = action.payload
        }
    }
})

export const { setVideos } = userSlice.actions

export default userSlice.reducer