import { SUCCESS, FAILURE, LOADING } from '@/context/actions/constants'

export type LoadingState = {
    isLoading: boolean;
    error: string
}

export type LoadingAction =
    | { type: typeof LOADING, payload: { isLoading: boolean } }
    | { type: typeof SUCCESS, payload: { isLoading: boolean } }
    | { type: typeof FAILURE, payload: { isLoading: boolean, error: string } }