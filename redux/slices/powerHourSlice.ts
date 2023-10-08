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
        }
    }
})

export const {
    setPowerHour,
    clearPowerHour,
    setSongs,
    patchPowerHour
} = powerHourSlice.actions

export default powerHourSlice.reducer