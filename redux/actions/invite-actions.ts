import axios from 'axios'
import {
    loading,
    success,
    failure
} from '@/redux/slices/loadingSlice'
import { AppDispatch } from '@/redux/store'

interface RSVPI {
    rsvpYes: boolean;
    rsvpNo: boolean;
    rsvpMaybe: boolean;
}

export const updateInvitesAction = (inviteId: number, {rsvpYes, rsvpNo, rsvpMaybe}: RSVPI) => {
    return async (dispatch: AppDispatch) => {
        dispatch(loading())
        try {
            axios.patch('/api/invite/' + inviteId, {
                rsvpYes: rsvpYes,
                rsvpNo: rsvpNo,
                rsvpMaybe: rsvpMaybe
            })
            .then(res => {
                console.log('res', res)
                dispatch(success())
            })
        } catch (error) {
            console.error('err', error)
        }
    }
}