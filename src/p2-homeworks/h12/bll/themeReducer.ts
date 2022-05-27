type InitialStateType={
    color:string
}

const initState = {
     color:"#067E63"
};



export const themeReducer = (state = initState, action: ActionType): InitialStateType => { // fix any
    switch (action.type) {
        case "CHANGE-THEME": {
            return {
                ...state,
                color: action.color
            }
        }
        default: return state;
    }
};

type ActionType = ChangeThemeACType

type ChangeThemeACType= ReturnType<typeof changeThemeAC>

export const changeThemeAC = (color: string) => ({
    type:"CHANGE-THEME",
        color
} as const); // fix any