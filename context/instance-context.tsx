import { createContext, useReducer } from "react";
import { ChildrenI } from "@/interfaces";
import modalInstanceReducer, { initialState } from "@/reducer/instance-reducer";

export const ModalInstanceContext = createContext(initialState)

const ModalInstanceStore = ({ children }: ChildrenI) => {
    const [state] = useReducer(modalInstanceReducer, initialState)

    return (
        <ModalInstanceContext.Provider value={state}>
            {children}
        </ModalInstanceContext.Provider>
    )
}

export default ModalInstanceStore