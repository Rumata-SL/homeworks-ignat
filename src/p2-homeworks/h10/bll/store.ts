import {loadingReducer} from './loadingReducer'
import {combineReducers, legacy_createStore} from "redux";
import {themeReducer} from "../../h12/bll/themeReducer";

const RootReducers = combineReducers({
    loading: loadingReducer,
    theme:themeReducer
})

// const store = createStore(reducers)
export const store = legacy_createStore(RootReducers)

// export default store

export type AppStoreType = ReturnType<typeof RootReducers>

// @ts-ignore
window.store = store // for dev
