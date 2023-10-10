import { createSlice } from '@reduxjs/toolkit'

const initialState: {powerHour: any, songs: any} = {
    powerHour: null,
    songs: null
}

const powerHourSlice = createSlice({
    name: 'powerHour',
    initialState: initialState,
    reducers: {
        setPowerHour: (state, action) => {
            state.powerHour = action.payload
        },
        clearPowerHour: (state) => {
            state.powerHour = {}
        },
        patchPowerHour: (state, action) => {
            state.powerHour = action.payload
        },
        setSongs: (state, action) => {
            state.songs = action.payload
        },
        clearSongs: (state) => {
            state.songs = {}
        },
        addSong: (state, action) => {
            state.songs = state.songs.push(action.payload)
        },
        deleteSong: (state, action) => {
            state.songs = action.payload
        }
    }
})

export const {
    setPowerHour,
    clearPowerHour,
    setSongs,
    patchPowerHour,
    addSong,
    deleteSong
} = powerHourSlice.actions

export default powerHourSlice.reducer