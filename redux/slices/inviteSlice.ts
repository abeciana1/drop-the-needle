import { createSlice } from '@reduxjs/toolkit'

const initialState: { invites: any } = {
    invites: null
}

const inviteSlice = createSlice({
    name: 'invite',
    initialState: initialState,
    reducers: {
        setInvites: (state, action) => {
            state.invites = action.payload
        },
        deleteInvites: (state, action) => {
            state.invites = action.payload
        },
        patchInvite: (state, action) => {
            state.invites[action.payload.index] = {
                ...state.invites[action.payload.index],
                rsvpYes: action.payload.rsvpYes,
                rsvpNo: action.payload.rsvpNo,
                rsvpMaybe: action.payload.rsvpMaybe,
            }
            console.log('action', action.payload)
        }
    }
})

export const {
    setInvites,
    deleteInvites,
    patchInvite
} = inviteSlice.actions

export default inviteSlice.reducer