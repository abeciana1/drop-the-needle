import { createContext, useReducer } from "react";
import { ChildrenI } from "@/interfaces";
import loadingReducer, { initialState } from "@/reducer/loading-reducer";

export const LoadingContext = createContext(initialState)

const LoadingStore = ({ children }: ChildrenI) => {
    const [state] = useReducer(loadingReducer, initialState)

    return (
        <LoadingContext.Provider value={state}>
            {children}
        </LoadingContext.Provider>
    )
}

export default LoadingStore