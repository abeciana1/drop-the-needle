import { createSlice } from '@reduxjs/toolkit'

const loadingSlice = createSlice({
    name: 'loading',
    initialState: {
        isLoading: false,
        error: ''
    },
    reducers: {
        loading: (state) => {
            state.isLoading = true
        },
        success: (state) => {
            state.isLoading = false
        },
        failure: (state, action) => {
            state.isLoading = false,
            state.error = action.payload.error
        }
    }
})

export const {
    loading,
    success,
    failure
} = loadingSlice.actions

export default loadingSlice.reducer