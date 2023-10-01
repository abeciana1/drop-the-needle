import {
    ModalInstanceState,
    InstanceAction
} from '@/types/context'
import {
    SUCCESS,
    FAILURE,
    LOADING,
    SET_INSTANCE,
    CLEAR_INSTANCE
} from '@/context/actions/constants'

export const initialState: ModalInstanceState = {
    isLoading: false,
    error: '',
    instance: {
        display: false,
        name: '',
        data: null
    }
}

const modalInstanceReducer = (state: ModalInstanceState, action: InstanceAction) => {
    const { type, payload } = action
    switch(type) {
        case LOADING:
            return {
                ...state,
                isLoading: true,
                error: '',
                instance: {
                    display: false,
                    name: '',
                    data: null
                }
            }
        case SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                instance: {
                    display: false,
                    name: '',
                    data: null
                }
            }
        case FAILURE:
            return {
                ...state,
                isLoading: false,
                error: payload.error,
                instance: {
                    display: '',
                    name: '',
                    data: null
                }
            }
        case SET_INSTANCE:
            return {
                ...state,
                isLoading: false,
                instance: {
                    display: true,
                    name: payload.instance.name,
                    data: payload.instance.data
                }
            }
        case CLEAR_INSTANCE:
            return {
                ...state,
                isLoading: false,
                error: '',
                instance: {
                    display: false,
                    name: '',
                    data: null
                }
            }
        default: return state
    }
}

export default modalInstanceReducer