type InitStateType = {
    loading: boolean
}

const initState: InitStateType = {
    loading: false
}

export const loadingReducer = (state: InitStateType = initState, action: LoadingACType): InitStateType => { // fix any
    switch (action.type) {
        case "PRELOADER": {
            return {...state, loading: action.loading}
        }
        default:
            return state
    }
}

type LoadingACType = ReturnType<typeof loadingAC>

export const loadingAC = (loading: boolean) => {
    return {
        type: "PRELOADER",
        loading
    } as const
}
// fix any