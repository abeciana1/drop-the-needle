import { configureStore, type ThunkAction, type Action } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import loadingReducer from '@/redux/slices/loadingSlice'
import instanceReducer from '@/redux/slices/instanceSlice'
import powerHourReducer from '@/redux/slices/powerHourSlice'
import inviteReducer from '@/redux/slices/inviteSlice'

const middlewareEnhancer = [thunk]

const store =  configureStore({
        reducer: {
            loading: loadingReducer,
            instance: instanceReducer,
            powerHour: powerHourReducer,
            invites: inviteReducer
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: false,
        }).concat(middlewareEnhancer),
        devTools: process.env.NODE_ENV !== 'production'
    })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type ReduxStore = typeof store
export type ReduxThunkAction<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    any,
    Action
>

export default store