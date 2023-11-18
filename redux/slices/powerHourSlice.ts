import { createSlice, current } from '@reduxjs/toolkit'

const initialState: {powerHour: any, songs: any, unsortedSongs: any} = {
    powerHour: null,
    songs: [],
    unsortedSongs: []
}

const powerHourSlice = createSlice({
    name: 'powerHour',
    initialState: initialState,
    reducers: {
        setPowerHour: (state, action) => {
            state.powerHour = action.payload
        },
        clearPowerHour: (state) => {
            state.powerHour = null
        },
        patchPowerHour: (state, action) => {
            state.powerHour = action.payload
        },
        setSongs: (state, action) => {
            state.songs = action.payload
        },
        setUnsortedSongs: (state, action) => {
            state.unsortedSongs = action.payload
        },
        clearUnsortedSongs: (state) => {
            state.unsortedSongs = []
        },
        clearSongs: (state) => {
            state.songs = []
        },
        addSong: (state, action) => {
            let newStateSongs = [... current(state.songs)]
            state.songs = newStateSongs.concat(action.payload)
        },
        deleteSong: (state, action) => {
            state.songs = action.payload
        },
        deleteUnsortedSong: (state, action) => {
            state.unsortedSongs = action.payload
        },
        reorderSongs: (state, action) => {
            state.songs = action.payload
        },
        patchSong: (state, action) => {
            state.songs[action.payload.index] = {
                ...state.songs[action.payload.index],
                title: action.payload.data.title,
                artist: action.payload.data.artist,
                album: action.payload.data.album,
                startTime: action.payload.data.startTime,
                endTime: action.payload.data.endTime,
                youtubeLink: action.payload.data.youtubeLink,
                year: action.payload.data.year
            }
        },
        patchUnsortedSong: (state, action) => {
            state.unsortedSongs[action.payload.index] = {
                ...state.unsortedSongs[action.payload.index],
                title: action.payload.data.title,
                artist: action.payload.data.artist,
                album: action.payload.data.album,
                startTime: action.payload.data.startTime,
                endTime: action.payload.data.endTime,
                youtubeLink: action.payload.data.youtubeLink,
                year: action.payload.data.year
            }
        }
    }
})

export const {
    setPowerHour,
    clearPowerHour,
    setSongs,
    patchPowerHour,
    addSong,
    deleteSong,
    reorderSongs,
    clearSongs,
    patchSong,
    setUnsortedSongs,
    clearUnsortedSongs,
    deleteUnsortedSong,
    patchUnsortedSong
} = powerHourSlice.actions

export default powerHourSlice.reducer