import { createSlice } from '@reduxjs/toolkit'

const instanceSlice = createSlice({
    name: 'instance',
    initialState: {
        display: false,
        name: '',
        data: {}
    },
    reducers: {
        setInstance: (state, action) => {
            state.display = true,
            state.name = action.payload.name,
            state.data = action.payload.data
        },
        clearInstance: (state) => {
            state.display = false,
            state.name = '',
            state.data = {}
        }
    }
})

export const {
    setInstance,
    clearInstance
} = instanceSlice.actions

export default instanceSlice.reducer