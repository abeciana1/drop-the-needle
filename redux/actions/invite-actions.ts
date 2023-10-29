import axios from 'axios'
import {
    loading,
    success,
    failure
} from '@/redux/slices/loadingSlice'
import { AppDispatch } from '@/redux/store'

export const updateInvitesAction = () => {
    return async (dispatch: AppDispatch) => {
        dispatch(loading())
    }
}