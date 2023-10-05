import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import loadingReducer from '@/redux/slices/loadingSlice'
import instanceReducer from '@/redux/slices/instanceSlice'

const middlewareEnhancer = [thunk]

const store =  configureStore({
    reducer: {
        loading: loadingReducer,
        instance: instanceReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }).concat(middlewareEnhancer),
    devTools: process.env.NODE_ENV !== 'production'
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store