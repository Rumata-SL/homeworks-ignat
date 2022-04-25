import {UserType} from "../HW8";

type ActionType = {
    type: "sort" | "check"
    payload: string | number
}

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case "sort": {
            // need to fix

            return [...state].sort((a, b) => {
                return action.payload === "up" ? b.age - a.age : a.age - b.age
            })
        }
        case "check": {
            // need to fix
            return state.filter(el=> el.age >= action.payload)
        }
        default:
            return state
    }
}