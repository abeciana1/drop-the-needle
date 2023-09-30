import { LoadingAction, LoadingState } from '@/types/context'
import { SUCCESS, FAILURE, LOADING } from '@/context/actions/constants'

export const initialState: LoadingState = {
    isLoading: false,
    error: ''
}

const loadingReducer = (state: LoadingState, action: LoadingAction) => {
    const { type, payload } = action
    switch(type) {
        case LOADING:
            return {
                ...state,
                isLoading: payload.isLoading
            }
        case SUCCESS:
            return {
                ...state,
                isLoading: payload.isLoading
            }
        case FAILURE:
            return {
                ...state,
                isLoading: payload.isLoading,
                error: payload.error
            }
        default: return state
    }
}

export default loadingReducer