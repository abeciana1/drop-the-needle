import {
    SUCCESS,
    FAILURE,
    LOADING,
    SET_INSTANCE,
    CLEAR_INSTANCE
} from '@/context/actions/constants'

export type ModalInstanceState = {
    isLoading: boolean;
    error: string;
    instance: {
        display: boolean;
        name: string;
        data: any;
    }
}

export type InstanceAction =
    | { type: typeof LOADING, payload: { isLoading: boolean } }
    | { type: typeof SUCCESS, payload: { isLoading: boolean } }
    | { type: typeof FAILURE, payload: { isLoading: boolean, error: string } }
    | { 
        type: typeof SET_INSTANCE,
        payload: {
            isLoading: boolean;
            error: string;
            instance: {
                display: boolean;
                name: string;
                data: any;
            }
        }
    }
    | { 
        type: typeof CLEAR_INSTANCE,
        payload: {
            isLoading: boolean;
            error: string;
            instance: {
                display: boolean;
                name: string;
                data: any;
            }
        }
    }